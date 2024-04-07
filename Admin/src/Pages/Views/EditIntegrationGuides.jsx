import React, { useEffect, useState } from 'react'
import EditForm from '../../Components/IntegrationGuide/EditForm'
import PreviewCard from '../../Components/IntegrationGuide/PreviewCard';
import { useLocation } from 'react-router-dom';
import { cardsData } from '../../Data/CardsData';


const EditIntegrationGuides = () => {

    const [Title, setTitle] = useState(null)
    const [Description, setDescription] = useState(null)
    const [Image, setImage] = useState(null)


    const { state } = useLocation();
    const {id} = state ;
    console.log(state)
    console.log(Image)



    useEffect(() => {
        cardsData.map((item, index) => {
            if (index === id) {
                setTitle(item.title)
                setDescription(item.description)
                setImage(item.image)
            }
        })

    }, [])


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // You can process the file here (e.g., upload to a server or display preview)
        setImage(URL.createObjectURL(file));
    };


    return (
        <>
            <div className='flex flex-col lg:py-5 lg:px-6 p-2 lg:flex-row m-5 md:m-10 rounded-2xl shadow-boxshade'>
                <EditForm
                    FormTitle="Edit Form Design"
                    Title={Title}
                    setTitle={setTitle}
                    Description={Description}
                    setDescription={setDescription}
                    Image={Image}
                    setImage={setImage}
                    handleImageChange={handleImageChange}
                />

                <div className='flex-col md:basis-[80%]'>
                    <div className='mt-8 mx-4'>
                        <button
                            className={`py-3 px-10 rounded-3xl mb-4 text-base md:text-xl  bg-black text-white `}
                        >
                            Preview
                        </button>

                    </div>
                    <PreviewCard
                        title={Title}
                        content={Description}
                        Image={Image}
                    />
                </div>
            </div>
        </>
    )
}

export default EditIntegrationGuides
