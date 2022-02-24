import { useState } from 'react'
import questionList from '../../utils/question-list'
import Radio from './Radio'

export default function Calculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [prospectValue, setProspectValue] = useState(0)

  const text = questionList[currentQuestion].text
  const type = questionList[currentQuestion].type
  const value = questionList[currentQuestion].value
  const choices = questionList[currentQuestion].choices ?? null

  function handleCheckboxChange({ target }: any) {
    const value = parseInt(target.value)
    target.checked
      ? setProspectValue((prevCount) => prevCount + value)
      : setProspectValue((prevCount) => prevCount - value)
  }

  return (
    <section className="bg-stone-900 text-purple-200">
      <div className="mx-auto max-w-7xl p-8">
        {prospectValue}
        <div>
          <h2 className="p-8 text-center font-brand text-3xl">{text}</h2>
          <p className="w-full lg:mx-auto lg:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit amet
            impedit, quis vero quam reprehenderit blanditiis, similique dolore
            minima eos atque, voluptatum corrupti vitae consequuntur beatae
            odio. Non, iste deserunt.
          </p>
        </div>
        <div>
          <form>
            <div className="align-start mt-8 flex w-full flex-col justify-start lg:mx-auto lg:w-3/4">
              {type === 'radio' &&
                choices?.map((choice, index) => {
                  return (
                    <div className="p-2" key={`choice_${index}`}>
                      <Radio
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
            </div>
          </form>
        </div>
        <div className="mt-8 flex p-2 lg:mx-auto lg:w-3/4">
          {currentQuestion !== 0 && (
            <button
              className="mt-8 inline-block bg-purple-200 py-3 px-5 text-center text-stone-900"
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              Previous
            </button>
          )}
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
