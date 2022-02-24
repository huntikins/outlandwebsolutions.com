import { Choice, Question } from './questions'

  // Question One
  const questionOne_choices = [
    new Choice('basic website', 300),
    new Choice('ecommerce storefront', 600),
    new Choice('Complex buisness tool', 800),
  ]
  const questionOne = new Question(
    'radio',
    'What kind of website are you looking for?',
    0,
    questionOne_choices
  )

  // Question Two
  const questionTwo = new Question('number', 'How Many Pages do you need?', 50)

  // Question Three
  const questionThree_choices = [new Choice('Yes', 0), new Choice('No', 50)]
  const questionThree = new Question(
    'radio',
    'Are you able to provide your own designs?',
    0,
    questionThree_choices
  )

  // Question Four
  const questionFour_choices = [new Choice('Yes', 0), new Choice('No', 50)]
  const questionFour = new Question(
    'radio',
    'Are you able to provide your own copy?',
    0,
    questionFour_choices
  )

  // Question Five
  const questionFive_choices = [new Choice('Yes', 100), new Choice('No', 0)]
  const questionFive = new Question(
    'radio',
    'Do you need marketing integrations?',
    0,
    questionFive_choices
  )

  // Question Six
  const questionSix_choices = [new Choice('Yes', 300), new Choice('No', 0)]
  const questionSix = new Question(
    'radio',
    'Do you need old content migrated?',
    0,
    questionSix_choices
  )

  // Question Seven
  const questionSeven_choices = [new Choice('Yes', 0), new Choice('No', 20)]
  const questionSeven = new Question(
    'radio',
    'Do you own your domain?',
    0,
    questionSeven_choices
  )

  // Question Eight
  const questionEight_choices = [new Choice('Yes', 100), new Choice('No', 0)]
  const questionEight = new Question(
    'radio',
    'Would you like us to launch and host your website?',
    0,
    questionEight_choices
  )

  // Question Nine
  const questionNine_choices = [
    new Choice('Monthly', 100),
    new Choice('Quarterly', 200),
    new Choice('No', 0),
  ]
  const questionNine = new Question(
    'radio',
    'Do you need monthly or quarterly maintenance?',
    0,
    questionNine_choices
  )

  // Question Ten
  const questionTen = new Question(
    'textarea',
    'Anything you would like to share?',
    0
  )

  const questionList = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen,
  ]

  export default questionList

