import { useRef, useState } from 'react'
import questionList from '../../utils/question-list'
import { Form } from './Form'
import Radio from './Radio'

export default function Calculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [prospectValue, setProspectValue] = useState(0)
  const [formState, setFormState] = useState(false)

  const numberRef: any = useRef(0);

  const text = questionList[currentQuestion].text
  const type = questionList[currentQuestion].type
  const value = questionList[currentQuestion].value
  const choices = questionList[currentQuestion].choices ?? null

  function handleCheckboxChange({ target }: any) {
    const value = parseInt(target.value)
    target.checked
      ? setProspectValue((prevCount) => prevCount + value)
      : setProspectValue((prevCount) => prevCount - value)
    console.log(prospectValue)
  }

  function handleNumberChange({ target }: any) {

    const base_value = parseInt(target.dataset.base_value)
    
    if (target.value > numberRef.current) {
      setProspectValue((prevCount) => prevCount + base_value)
    } else {
      setProspectValue((prevCount) => prevCount - base_value)
    }
    numberRef.current = target.value
    console.log(prospectValue)
  }

  return (
    <section className="bg-stone-900 pb-8 text-purple-200">
      <div className="mx-auto max-w-7xl p-8">
        <div>
          <h3 className="p-8 text-center font-brand text-3xl">{text}</h3>
          <p className="w-full lg:mx-auto lg:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit amet
            impedit, quis vero quam reprehenderit blanditiis, similique dolore
            minima eos atque, voluptatum corrupti vitae consequuntur beatae
            odio. Non, iste deserunt.
          </p>
        </div>
        <div>
          <div className="align-start mt-8 flex w-full flex-col justify-start lg:mx-auto lg:w-3/4">
            {type === 'radio' &&
              choices?.map((choice, index) => {
                return (
                  <div className="p-2" key={`choice_${index}`}>
                    <Radio
                      key={`choice_${currentQuestion}_${index}`}
                      currentQuestion={currentQuestion}
                      index={index}
                      choice={choice}
                      handleCheckboxChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor={`choice_${currentQuestion}_${index}`}
                      className="pl-4"
                    >
                      {choice.text}
                    </label>
                  </div>
                )
              })}
            {type === 'number' && (
              <div className="p-2">
                <label
                  htmlFor={`choice_${currentQuestion}}`}
                  className="sr-only"
                >
                  Number of Pages
                </label>
                <input
                  type="number"
                  id={`number_${currentQuestion}`}
                  min="0"
                  max="100"
                  step="1"
                  name={`choice_${currentQuestion}`}
                  data-base_value={value}
                  onChange={handleNumberChange}
                />
              </div>
            )}
            {type === 'form' && (
              <Form pageName='pricing' setFormState={setFormState}/>
            )}
            {formState && (
              <p>Thank you, your inquiry we will contact you as soon as possible</p>
            )}
          </div>
        </div>
        <div className="mt-8 flex p-2 lg:mx-auto lg:w-3/4">
          {currentQuestion !== questionList.length - 1 && (
            <div className="flex flex-auto flex-row-reverse">
              <button
                className="mt-8 inline-block bg-purple-200 py-3 px-5 text-center text-stone-900"
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
