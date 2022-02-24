import { useEffect, useState } from 'react'

export default function Radio(
  {currentQuestion,
  index,
  choice,
  handleCheckboxChange
} : any) {
  const [checked, setCheckBoxChecked] = useState(false)

    useEffect(() => {
        console.log(checked)
    })
  return (
    <input
      id={`choice_${currentQuestion}_${index}`}
      type="checkbox"
      checked={checked}
      name={`choice_${currentQuestion}_${index}`}
      value={choice.value}
      onClick={() => setCheckBoxChecked(!checked)}
      onChange={handleCheckboxChange}
    />
  )
}
