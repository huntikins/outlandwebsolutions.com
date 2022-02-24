export class Question {
  type: string
  text: string
  value: number
  choices?: { text: string; value: number }[]

  constructor(
    type: string,
    text: string,
    value: number,
    choices?: { text: string; value: number }[]
  ) {
    this.type = type
    this.text = text
    this.value = value
    this.choices = choices
  }
}

export class Choice {
  text: string
  value: number

  constructor(text: string, value: number) {
    this.text = text
    this.value = value
  }
}
