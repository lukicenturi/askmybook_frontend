const questions = [
  'Who is the creator of this book, and when was it published?',
  'What is this book about?',
  'What are the things that shown in balance sheet?',
  'What are the disadvantages of a Partnership?',
  'Where can I get the information about my customers?',
  'Why business planning is the most important factor determining business success?',
  'What are the tips for for successful field research?',
  'How to get the best loan deal?'
]

export const getRandomQuestion = () => {
  return questions[Math.floor(Math.random() * questions.length)]
}
