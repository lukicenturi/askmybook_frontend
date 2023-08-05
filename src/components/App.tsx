import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import { getRandomQuestion } from '../utils/question'
import axios from 'axios'
import { HTMLTextAreaElement, InputEvent } from 'happy-dom'

const App = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const ask = async (question: string) => {
    setLoading(true)
    const result = await axios.get<{ response: string }>('/ask', {
      baseURL: import.meta.env.VITE_BACKEND_URL,
      params: {
        question
      }
    })
    setAnswer(result.data.response)
    setLoading(false)
  }

  const feelingLucky = async () => {
    const randomQuestion = getRandomQuestion()
    await setQuestion(randomQuestion)
    await ask(randomQuestion)
  }

  const reset = () => {
    setQuestion('')
    setAnswer('')
  }

  return (
    <div className="py-8">
      <div className="container max-w-[600px] px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="/cover.png"
              className="w-48 rounded shadow-xl"
              alt="A Brief Guide to Starting a Home Based Business"
            />
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold">Ask My Book</h1>

            <div className="mt-4 text-left text-lg text-gray-500">
              This is an experiment project to replicate{' '}
              <a
                href="https://askmybook.com"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                https://askmybook.com
              </a>{' '}
              by{' '}
              <a
                href="https://twitter.com/shl"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Sahil Lavingia
              </a>
              , except this is not my book. Ask a question and AI'll answer it
              in real-time:
            </div>
          </div>
          <div className="mt-8">
            <textarea
              value={question}
              className="h-32 w-full rounded border border-gray-800 p-4"
              placeholder="Ask a question about this book"
              onInput={(event) => setQuestion(event.currentTarget.value)}
            />
          </div>
          {!answer && (
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="rounded-lg bg-black px-6 py-3 text-white transition-all hover:bg-gray-700 disabled:bg-gray-300"
                disabled={loading || !question}
                onClick={() => ask(question)}
              >
                {loading ? 'Asking...' : 'Ask question'}
              </button>
              <button
                className="rounded-lg bg-gray-300 px-6 py-3 transition-all hover:bg-gray-400"
                onClick={feelingLucky}
              >
                I'm feeling lucky
              </button>
            </div>
          )}

          {answer && (
            <div className="mt-8 text-left">
              <div className="text-xl leading-8 text-gray-600">
                <strong>Answer:</strong> {answer}
              </div>
              <div className="mt-8">
                <button
                  className="rounded-lg bg-black px-6 py-3 text-white transition-all hover:bg-gray-700"
                  onClick={reset}
                >
                  Ask another question
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 text-xl leading-10 text-gray-500">
            <div>
              Project by{' '}
              <a
                href="https://lukicenturi.com"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                Luki Centuri
              </a>
            </div>
            <div>
              Fork in{' '}
              <a
                href="https://github.com/lukicenturi/askmybook_frontend"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
