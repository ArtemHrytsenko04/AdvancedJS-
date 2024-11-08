import Questions from './faqs.json';
import { useState } from 'react';
import AutoSlideshow from './AutoSlideShow';
import ManualSlideshow from './ManualSlideShow';

function FAQ() {

  const smartphoneImages = [
    "./images/phone1.jpg",
    './images/phone2.jpg',
    './images/phone3.jpg'
  ]

  const [enteredKeywords, setEnteredKeywords] = useState("");
  let id = 0


  return(
    <>
      <div style={{minHeight: "60vh"}}>
        <h1>Frequently Asked Questions</h1>

        {/*Add a search box on top*/}
        <div className='row'>
          <input className='col-11 m-3' type='text' name='search' onChange={(e) => {setEnteredKeywords(e.target.value)}} placeholder='keywords'>
          </input>
        </div>


        <div>
          {/*Loop through all questions and display them*/}
          {Questions.filter(
            question => question.question.toLowerCase().includes(enteredKeywords.toLowerCase()) || question.answer.toLowerCase().includes(enteredKeywords.toLowerCase())).map(
            question => {
              return(
                <div className='bg-warning p-3 m-2' key={id++}>
                  <h4>{question.question}</h4>
                  <p>{question.answer}</p>
                </div>
              )
            }
          )}
        </div>

          <div className='row'>
            <div className='col-md-6'>
              <h3>Automatic slideshow of Smartphones</h3>
              <AutoSlideshow images = {smartphoneImages} />
            </div>

            <div className='col-md-6'>
              <h3>Manual Slide Show of Smartphones</h3>
              <ManualSlideshow images={smartphoneImages} />
            </div>
        </div>
      </div>
    </>
  )
}

export default FAQ;