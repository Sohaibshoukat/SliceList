import React, { useState } from 'react'
import Accordion from '../../Components/FAQ/Accordion'
import { FaMinus, FaPlus } from 'react-icons/fa';
import Form from '../../Components/FAQ/Form';
import EditForm from '../../Components/FAQ/EditForm';


const FAQ = () => {


  const [QuestionBTN, setQuestionBTN] = useState(false)
  const [EditBTN, setEditBTN] = useState(false)
  const [Question, setQuestion] = useState(null)
  const [Answer, setAnswer] = useState(null)
  const [TabSelection, setTabSelection] = useState(null)

  console.log("TabSelection",TabSelection);

  return (
    <>

      <Accordion
        Question={Question}
        setQuestion={setQuestion}
        Answer={Answer}
        setAnswer={setAnswer}
        setEditBTN={setEditBTN}
        EditBTN={EditBTN}
        TabSelection={TabSelection}
        setTabSelection={setTabSelection}
      />
      <div className="relative flex flex-col pb-6 px-3 md:px-6 ">
        <button
          className={`py-2 px-4  rounded-lg w-full font-para text-xs sm:text-sm md:text-base font-bold bg-[#4DB678] text-white hover:bg-black hover:text-accence ease-in-out duration-300 `} onClick={() => { setQuestionBTN(!QuestionBTN) }}
        >
          + Add a Question
        </button>
        {/* <FaPlus className=' absolute top-[10px] left-[485px] text-base text-white' /> */}
      </div>
      <div className={` flex flex-col px-3 md:px-6 ${QuestionBTN ? "block " : "hidden "} `}>
        <Form />
      </div>
      <div className={` flex flex-col mt-6 px-3 md:px-6 ${EditBTN ? "block " : "hidden "} `}>
        <EditForm
          Question={Question}
          setQuestion={setQuestion}
          Answer={Answer}
          setAnswer={setAnswer}
          TabSelection={TabSelection}
          setEditBTN={setEditBTN}
          setTabSelection={setTabSelection}
        />
      </div>

    </>
  )
}

export default FAQ