import React, { useEffect, useState } from 'react'

const AddBlogDetail = () => {

  const [JsonDetail, setJsonDetail] = useState([])
  const [DropDown, setDropDown] = useState(false)

  // useEffect(() => {
  //   console.log(JsonDetail)
  // }, [setJsonDetail, JsonDetail])


  return (
    <div className="w-[95%] m-auto bg-white flex flex-col gap-4 py-6 px-6 my-6 rounded-xl shadow-2xl">
      <div className="flex flex-row justify-between items-center">
        <h1 className='font-head text-4xl tracking-wider'>Heading</h1>
        <button className={`py-3 px-10 rounded-3xl mb-4 text-base md:text-xl  bg-black text-white `}>Preview</button>
      </div>
      <div className='bg-black pt-4 rounded-xl text-white font-Para w-fit '>
        <h2 className='text-center px-8 text-lg pb-4' onClick={() => { setDropDown(!DropDown) }}>Add Section</h2>
      </div>
      {DropDown
        &&
        <div className="bg-white rounded-lg  w-fit shadow-boxshade flex flex-col gap-2 font-Para text-black text-lg">
          <h3
            className='hover:bg-black hover:text-white px-8 py-2 ease-in-out duration-300 rounded-lg'
            onClick={() => {
              setJsonDetail([
                ...JsonDetail,
                {
                  Type: "Detail",
                  Heading: "",
                  Content: [""],
                  Image: ''
                }
              ])
            }}
          >
            Detail Section
          </h3>
          <h3
            className='hover:bg-black hover:text-white px-8 py-2 ease-in-out duration-300 rounded-lg'
            onClick={() => {
              setJsonDetail([
                ...JsonDetail,
                {
                  Type: "Image",
                  Image: "",
                  note: ""
                }
              ])
            }}
          >
            Image Section
          </h3>
          <h3
            className='hover:bg-black hover:text-white px-8 py-2 ease-in-out duration-300 rounded-lg'
            onClick={() => {
              setJsonDetail([
                ...JsonDetail,
                {
                  Type: "Steps",
                  Heading: "",
                  Data: [
                    {
                      head: "",
                      des: "",
                      image: ""
                    }
                  ]
                }
              ])
            }}
          >
            Step Section
          </h3>
        </div>
      }

      <div className="flex flex-col gap-y-8">
        {JsonDetail?.map((item, index) => (
          <div className='' key={index}>
            {
              item?.Type == "Detail" ?
                <>
                  <div className="flex flex-col gap-y-4 font-Para">
                    <h1 className='text-xl md:text-3xl font-Para'>Detail Section</h1>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex flex-col gap-2 basis-[50%]">
                          <label htmlFor="" className='text-neutral-500 text-base md:text-xl'>Heading</label>
                          <input type="text" value={item.Heading} className='border-2 border-gray-300 py-2 px-4 rounded-lg h-[100%]' />
                        </div>
                        <div className="flex flex-col gap-2 basis-[50%]">
                          <label htmlFor="" className='text-neutral-500 text-base md:text-xl'>Image</label>
                          <input type="file" value={item.Image} className='border-2 border-gray-300 py-2 px-4 rounded-lg' />
                        </div>
                      </div>
                      {item.Content.map((item2, index2) => (
                        <div className="flex flex-col gap-2" key={index2}>
                          <label htmlFor="" className='text-neutral-500 text-base md:text-xl'>Paragraph</label>
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            value={item2}
                            rows="5"
                            className='border-2 border-gray-300 py-2 px-4 rounded-lg'
                          />
                        </div>
                      ))}
                      <button
                        className='bg-green-400 py-4 w-[100%] text-white font-bold rounded-full'
                        onClick={() => {
                          let UpdatedJson = JsonDetail
                          console.log(UpdatedJson)
                          UpdatedJson[index]?.Content?.push('')
                          console.log(UpdatedJson)
                          setJsonDetail(UpdatedJson)
                        }}
                      >
                        Add Paragraph
                      </button>
                    </div>
                  </div>
                </>
                : item?.Type == "Image" ?
                  <>
                    <div className="flex flex-col gap-y-4 font-Para">
                      <h1 className='text-xl md:text-3xl font-Para'>Image Section</h1>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col lg:flex-row gap-4">
                          <div className="flex flex-col gap-2 basis-[50%]">
                            <label htmlFor="" className='text-neutral-500 text-base md:text-xl'>Image</label>
                            <input type="file" value={item.Image} className='border-2 border-gray-300 py-2 px-4 rounded-lg' />
                          </div>
                          <div className="flex flex-col gap-2 basis-[50%]">
                            <label htmlFor="" className='text-neutral-500 text-base md:text-xl'>Note</label>
                            <input type="text" value={item.note} className='border-2 border-gray-300 py-2 px-4 rounded-lg h-[100%]' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  : item?.Type == "Steps" ?
                    <>
                      <div className="flex flex-col gap-y-4 font-Para">
                        <h1 className='text-xl md:text-3xl font-Para'>Step Section</h1>
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex flex-col gap-2 basis-[50%]">
                              <label htmlFor="" className='text-neutral-500 text-base md:text-xl'>Main Heading</label>
                              <input type="text" value={item.Heading} className='border-2 border-gray-300 py-2 px-4 rounded-lg h-[100%]' />
                            </div>
                          </div>
                          {item.Data.map((item2, index2) => (
                            <div className="flex flex-col gap-2 font-Para my-4" key={index2}>
                              <h2 className='text-black text-xl font-bold'>Step {index2 + 1}</h2>
                              <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex flex-col gap-2 basis-[50%]">
                                  <label htmlFor="" className='text-neutral-500 text-base md:text-xl'>Heading</label>
                                  <input type="text" value={item2.head} className='border-2 border-gray-300 py-2 px-4 rounded-lg h-[100%]' />
                                </div>
                                <div className="flex flex-col gap-2 basis-[50%]">
                                  <label htmlFor="" className='text-neutral-500 text-base md:text-xl'>Image</label>
                                  <input type="file" value={item2.image} className='border-2 border-gray-300 py-2 px-4 rounded-lg' />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <label htmlFor="" className='text-neutral-500 text-base md:text-xl'>Paragraph</label>
                                <textarea
                                  name=""
                                  id=""
                                  cols="30"
                                  value={item2.des}
                                  rows="5"
                                  className='border-2 border-gray-300 py-2 px-4 rounded-lg'
                                />
                              </div>
                            </div>
                          ))}
                          <button
                            className='bg-green-400 py-4 w-[100%] text-white font-bold rounded-full'
                            onClick={() => {
                              let UpdatedJson = JsonDetail
                              UpdatedJson[index]?.Data?.push({
                                head: "",
                                des: "",
                                image: ""
                              })
                              setJsonDetail(UpdatedJson)
                            }}
                          >
                            Add Step
                          </button>
                        </div>
                      </div>
                    </>
                    :
                    <></>
            }
          </div>
        ))}
      </div>
    </div >
  )
}

export default AddBlogDetail