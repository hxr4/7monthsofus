import { useEffect, useRef, useState } from 'react'
import { achievementWord, correctMicrocopy, quizQuestions, secretContent } from '../data/quiz'

type QuizState = 'quiz' | 'answerReveal' | 'foodWrongReveal' | 'foodPunchline' | 'achievementWord' | 'secretPrompt' | 'portalTransition' | 'suspense' | 'countdown' | 'secretReveal' | 'complete'

export function QuizExperience() {
  const [state, setState] = useState<QuizState>('quiz')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState('')
  const [secretInput, setSecretInput] = useState('')
  const [suspenseIndex, setSuspenseIndex] = useState(0)
  const [countdown, setCountdown] = useState(3)
  const [resolvedLetters, setResolvedLetters] = useState<string[]>([])
  const timerRef = useRef<number | undefined>(undefined)
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const question = quizQuestions[questionIndex]
  const isCorrect = selected !== null && question.correctOptions.includes(selected)
  const canContinue = secretInput.trim().length > 0

  const clearTimer = () => window.clearTimeout(timerRef.current)

  const submitAnswer = () => {
    if (selected === null || state !== 'quiz') return
    setFeedback('')
    if (!isCorrect) {
      if (question.special === 'food') {
        setSelected(null)
        setState('foodWrongReveal')
      }
      else {
        setFeedback('not that one. try again.')
        setSelected(null)
      }
      return
    }
    if (question.special === 'food') {
      setState('foodWrongReveal')
      return
    }
    setResolvedLetters((letters) => [...letters, question.achievementLetter])
    setState('answerReveal')
  }

  const continueFromReveal = () => {
    if (state !== 'answerReveal') return
    if (questionIndex === quizQuestions.length - 1) setState('achievementWord')
    else {
      setQuestionIndex((index) => index + 1)
      setSelected(null)
      setState('quiz')
    }
  }

  useEffect(() => {
    clearTimer()
    if (state === 'foodWrongReveal') {
      timerRef.current = window.setTimeout(() => {
        if (question.special === 'food' && isCorrect) setState('foodPunchline')
        else setState('quiz')
      }, isCorrect ? (reducedMotion ? 500 : 2200) : 800)
    } else if (state === 'foodPunchline') {
      timerRef.current = window.setTimeout(() => {
        setResolvedLetters((letters) => [...letters, question.achievementLetter])
        setState('answerReveal')
      }, reducedMotion ? 350 : 1200)
    } else if (state === 'achievementWord') {
      timerRef.current = window.setTimeout(() => setState('secretPrompt'), reducedMotion ? 800 : 2800)
    } else if (state === 'portalTransition') {
      timerRef.current = window.setTimeout(() => {
        setSuspenseIndex(0)
        setState('suspense')
      }, reducedMotion ? 100 : 900)
    } else if (state === 'suspense') {
      if (suspenseIndex < secretContent.suspense.length - 1) timerRef.current = window.setTimeout(() => setSuspenseIndex((index) => index + 1), reducedMotion ? 450 : 1500)
      else timerRef.current = window.setTimeout(() => setState('countdown'), reducedMotion ? 450 : 1300)
    } else if (state === 'countdown') {
      if (countdown > 1) timerRef.current = window.setTimeout(() => setCountdown((value) => value - 1), reducedMotion ? 250 : 850)
      else timerRef.current = window.setTimeout(() => setState('secretReveal'), reducedMotion ? 250 : 850)
    } else if (state === 'secretReveal') {
      timerRef.current = window.setTimeout(() => {
        setState('complete')
        window.setTimeout(() => document.querySelector('.letter-section')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' }), 250)
      }, reducedMotion ? 900 : 5000)
    }
    return clearTimer
  }, [state, question, isCorrect, reducedMotion, suspenseIndex, countdown])

  if (state === 'complete') return <div className="quiz-handoff" aria-hidden="true" />

  if (state === 'answerReveal') return (
    <section className="quiz-scene quiz-scene--reveal" aria-labelledby="answer-title">
      <span className="eyebrow">answer</span>
      <p id="answer-title" className="quiz-scene__answer">{question.answerReveal}</p>
      <div className="quiz-scene__letter" aria-label={`Achievement letter ${question.achievementLetter}`}>{question.achievementLetter}</div>
      <p className="quiz-scene__microcopy">{correctMicrocopy[questionIndex]}</p>
      <button className="text-button" type="button" onClick={continueFromReveal}>continue</button>
    </section>
  )

  if (state === 'foodWrongReveal') return <section className="quiz-scene quiz-scene--fakeout" aria-live="polite"><p className="quiz-scene__answer">{isCorrect ? 'wrong.' : 'not that one.'}</p></section>
  if (state === 'foodPunchline') return <section className="quiz-scene quiz-scene--fakeout" aria-live="polite"><p className="quiz-scene__answer">just kidding</p><p className="quiz-scene__punchline">{question.answerReveal}</p></section>
  if (state === 'achievementWord') return <section className="quiz-scene quiz-scene--achievement" aria-labelledby="achievement-title"><span className="eyebrow">seven answers</span><p id="achievement-title" className="achievement-word">{achievementWord.split('').map((letter, index) => <span key={`${letter}-${index}`} className={resolvedLetters.includes(letter) ? 'achievement-word__letter achievement-word__letter--resolved' : 'achievement-word__letter'}>{letter}</span>)}</p><span className="eyebrow">a little wisdom, apparently</span></section>
  if (state === 'secretPrompt') return (
    <section className="secret-prompt page-width" aria-labelledby="secret-prompt-title">
      <span className="eyebrow">one more thing</span>
      <h2 id="secret-prompt-title">type anything you want to leave here.</h2>
      <p>the next part only opens after you do.</p>
      <form onSubmit={(event) => { event.preventDefault(); if (canContinue) setState('portalTransition') }}>
        <label className="sr-only" htmlFor="secret-input">Your answer</label>
        <input id="secret-input" value={secretInput} onChange={(event) => setSecretInput(event.target.value)} autoComplete="off" />
        <button className="quiz-submit" type="submit" disabled={!canContinue}>continue</button>
      </form>
    </section>
  )
  if (state === 'portalTransition') return <section className="quiz-scene quiz-scene--portal" aria-live="polite"><span className="quiz-portal__input">{secretInput.trim()}</span></section>
  if (state === 'suspense') return <section className="quiz-scene quiz-scene--suspense" aria-live="polite"><p className="quiz-scene__suspense">{secretContent.suspense[suspenseIndex]}</p></section>
  if (state === 'countdown') return <section className="quiz-scene quiz-scene--countdown" aria-live="polite"><p className="quiz-scene__countdown">{countdown}</p></section>
  if (state === 'secretReveal') return <section className="quiz-scene quiz-scene--secret" aria-labelledby="secret-title"><p id="secret-title" className="secret-reveal">{secretContent.reveal}</p><p className="secret-aside">{secretContent.aside}</p></section>

  return (
    <section className="quiz-section page-width" aria-labelledby="quiz-title" key={question.id}>
      <div className="quiz-section__header">
        <span className="eyebrow">the quiz / {String(questionIndex + 1).padStart(2, '0')} / 07</span>
        <h2 id="quiz-title">how well do you know me?</h2>
      </div>
      <div className="quiz-question" aria-live="polite">
        <p className="quiz-question__prompt">{question.prompt}</p>
        <div className="quiz-options" role="radiogroup" aria-label={question.prompt}>
          {question.options.map((option, index) => (
            <button className={`quiz-option ${selected === index ? 'quiz-option--selected' : ''}`} type="button" role="radio" aria-checked={selected === index} key={`${question.id}-${option}-${index}`} onClick={() => setSelected(index)}>
              <span>{String.fromCharCode(65 + index)}</span>{option}
            </button>
          ))}
        </div>
        <button className="quiz-submit" type="button" disabled={selected === null} onClick={submitAnswer}>answer</button>
        <p className="quiz-feedback" aria-live="polite">{feedback}</p>
      </div>
      {questionIndex === quizQuestions.length - 1 && selected !== null && isCorrect && <span className="quiz-section__hint">the last one</span>}
    </section>
  )
}
