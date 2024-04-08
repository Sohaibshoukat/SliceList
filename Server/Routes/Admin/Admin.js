const express = require("express");


const Admin = require("../../Models/Admin")

const router = express.Router();
const fetchadmin = require('../../Middleware/FetchAdmin')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const FAQ = require("../../Models/FAQ");
const Testimonial = require("../../Models/Testimonial");
const Blogs = require("../../Models/Blogs");

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REION,
});

const uploadTestimonial = (bucketName, folderName) =>
    multer({
        storage: multerS3({
            s3,
            bucket: bucketName,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                const fileName = `Testimonial-${Date.now()}.jpg`;
                const filePath = folderName ? `${folderName}/${fileName}` : fileName;
                cb(null, filePath);
            }
        }),
});


const JWT_KEY = process.env.JWT_KEY

const PhotosStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads/AdminProfile");
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const PhotosUploader = multer({ storage: PhotosStorage });


//Create a admin 
router.post("/createAdmin", async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {

        // let admin = await Admin.findById(req.admin.id);
        // if (!admin) {
        //     return res.status(404).json({ success: false, message: "You Have no Access" });
        // }

        admin = await Admin.findOne({ Email: req.body.Email })
        if (admin) {
            return res.status(404).json({ success, error: "this account already exist" })
        }


        const Salt = await bcrypt.genSalt(10);
        const SecPassword = await bcrypt.hash(req.body.Password, Salt)
        admin = await Admin.create({
            Email: req.body.Email,
            Name: req.body.Name,
            Password: SecPassword,
        })

        const data = {
            admin: {
                id: admin.id,
            }
        }

        const AdminODSToken = jwt.sign(data, JWT_KEY);

        success = true;
        res.json({ success, AdminODSToken })

    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }
})

//Login a admin
router.post("/loginAdmin", async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { Email, Password } = req.body;

    try {
        let admin = await Admin.findOne({ Email: Email })
        if (!admin) {
            return res.status(400).json({ success: false, Message: "Account does not Exist" })
        }

        const passwordCompare = await bcrypt.compare(Password, admin.Password)

        if (!passwordCompare) {
            return res.status(400).json({ success: false, Message: "Email or Password is Incorrect" })
        }

        const Payload = {
            admin: {
                id: admin.id,
            }
        }
        const AdminODSToken = jwt.sign(Payload, JWT_KEY);
        success = true;
        res.json({ success, AdminODSToken })

    } catch (error) {
        console.error(error)
        res.status(500).send({ success: false, Message: 'Error occured' })
    }
})

router.put("/UpdateAdmin",
    fetchadmin,
    PhotosUploader.fields([
        { name: 'ProfilePhoto', maxCount: 1 },
    ]), async (req, res) => {
        try {
            const { Name } = req.body;

            const newAdmin = {};
            if (Name) newAdmin.Name = Name;

            let admin = await Admin.findById(req.admin.id);
            if (!admin) {
                return res.status(404).json({ success: false, message: "Admin not found" });
            }

            if (req.files) {
                if (req.files['ProfilePhoto']) {
                    let path = req.files['ProfilePhoto'][0].path;
                    let remainingUrl = path.replace('uploads/', '')
                    newAdmin.ProfilePhoto = remainingUrl;
                }
            }

            admin = await Admin.findByIdAndUpdate(req.admin.id, { $set: newAdmin }, { new: true });
            res.json({ success: true });

        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Error occurred' });
        }
    });


// Create a FAQ
router.post("/createFAQ", fetchadmin, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }

        const { Question, Answer } = req.body;

        const newFAQ = new FAQ({
            Question,
            Answer
        });

        await newFAQ.save();

        res.json({ success: true, message: 'FAQ created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Get all FAQs
router.get("/getFAQs", fetchadmin, async (req, res) => {
    try {
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }
        const faqs = await FAQ.find();
        res.json({ success: true, faqs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Get all FAQs
router.get("/getFAQ/:id", fetchadmin, async (req, res) => {
    try {
        const id = req.params.id;
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }
        const faq = await FAQ.findById(id);
        res.json({ success: true, faq });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Update a FAQ
router.put("/updateFAQ/:id", fetchadmin, async (req, res) => {
    try {
        const { Question, Answer } = req.body;

        const updatedFAQ = {
            Question,
            Answer
        };

        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }

        const faq = await FAQ.findByIdAndUpdate(req.params.id, updatedFAQ, { new: true });

        if (!faq) {
            return res.status(404).json({ success: false, message: 'FAQ not found' });
        }

        res.json({ success: true, message: 'FAQ updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Delete a FAQ
router.delete("/deleteFAQ/:id", fetchadmin, async (req, res) => {
    try {
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }

        const faq = await FAQ.findByIdAndDelete(req.params.id);

        if (!faq) {
            return res.status(404).json({ success: false, message: 'FAQ not found' });
        }

        res.json({ success: true, message: 'FAQ deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});


router.post("/createTestimonial", fetchadmin, uploadTestimonial("slicelist-admin", "Testimonial").single("testiomnialimg"), async (req, res) => {
    try {


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }

        // Now you can access req.body and req.file
        const { Title, Rating, Name, Company, Position, Description } = req.body;

        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        const newTestimonial = new Testimonial({
            Title,
            Rating,
            Profile: req.file.location,
            Name,
            Company,
            Position,
            Description
        });

        await newTestimonial.save();

        res.json({ success: true, message: 'Testimonial created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Get all Testimonials
router.get("/getTestimonials", fetchadmin, async (req, res) => {
    try {
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }
        const testimonials = await Testimonial.find();
        res.json({ success: true, testimonials });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Get Testimonial
router.get("/getTestimonial/:id", fetchadmin, async (req, res) => {
    try {
        let id = req.params.id
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }
        const testimonial = await Testimonial.findById(id);
        res.json({ success: true, testimonial });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Update a Testimonial
router.put("/updateTestimonial/:id", fetchadmin, uploadTestimonial("slicelist-admin", "Testimonial").single("testiomnialimg"), async (req, res) => {
    try {
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }

        const { Title, Rating, Name, Company, Position, Description } = req.body;
        const profile = req.file ? req.file.location : req.body.Profile;

        const updatedTestimonial = {
            Title,
            Rating,
            Profile: profile,
            Name,
            Company,
            Position,
            Description
        };

        const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, updatedTestimonial, { new: true });

        if (!testimonial) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }

        res.json({ success: true, message: 'Testimonial updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});


// Delete a Testimonial
router.delete("/deleteTestimonial/:id", fetchadmin, async (req, res) => {
    try {
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }

        const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

        if (!testimonial) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }

        res.json({ success: true, message: 'Testimonial deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});



router.post("/createBlog", fetchadmin, async (req, res) => {
    try {
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { Title, SubHeading, Image, DetailBlog } = req.body;

        const newBlog = new Blogs({
            Title,
            SubHeading,
            Image,
            Status: "Pending",
            DetailBlog
        });

        await newBlog.save();

        res.json({ success: true, message: 'Blog created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Update a Blog
router.put("/publishBlog/:id", fetchadmin, async (req, res) => {
    try {

        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }

        const updatedBlog = {
            Status: 'Published',
        };

        const blog = await Blogs.findByIdAndUpdate(req.params.id, updatedBlog, { new: true });

        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        res.json({ success: true, message: 'Blog Published successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Get all Blogs
router.get("/getBlogs", async (req, res) => {
    try {
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }

        const blogs = await Blogs.find();
        res.json({ success: true, blogs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Update a Blog
router.put("/updateBlog/:id", fetchadmin, async (req, res) => {
    try {

        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }
        const { Title, SubHeading, Image, Status, DetailBlog } = req.body;

        const updatedBlog = {
            Title,
            SubHeading,
            Image,
            Status,
            DetailBlog
        };

        const blog = await Blogs.findByIdAndUpdate(req.params.id, updatedBlog, { new: true });

        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        res.json({ success: true, message: 'Blog updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});

// Delete a Blog
router.delete("/deleteBlog/:id", fetchadmin, async (req, res) => {
    try {
        let admin = await Admin.findById(req.admin.id);
        if (!admin) {
            return res.status(404).json({ success: false, message: "You Have no Access" });
        }


        const blog = await Blogs.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        res.json({ success: true, message: 'Blog deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
});



module.exports = router