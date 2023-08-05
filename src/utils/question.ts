const questions = [
  'What are the things that shown in balance sheet?',
  'What are the disadvantages of a Partnership'
]

export const getRandomQuestion = () => {
  return questions[Math.floor(Math.random() * questions.length)]
}
