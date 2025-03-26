import {useState} from "react";

export default function TimerChallenge({ title, targetTime })
{
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  let timer

  function handleStart () {
    setTimerStarted(true);

    timer = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  function handleStop () {
    clearTimeout(timer)
  }

  return <section className="challenge">
    <h2>{title}</h2>
    {timerExpired && <p>You lost!</p>}
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? 's' : ''}
    </p>
    <button onClick={timerStarted ? handleStop : handleStart}>
      {timerStarted ? 'Stop' : 'Start'} Challenge
    </button>
    <p className={timerStarted ? 'active' : undefined}>
      {timerStarted ? 'Time is running...' : 'Timer inactive'}
    </p>
  </section>
}