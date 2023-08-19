import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";
import Button from "../Button/Button.js";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const msToTime = (miliseconds) => {

    const hours = Math.floor(miliseconds / 3600000);
    const minutes = Math.floor((miliseconds % 3600000) / 60000);
    const seconds = Math.floor(((miliseconds % 360000) % 60000) / 1000);
    miliseconds = Math.floor((miliseconds - seconds * 1000));
    return (`${hours} : ${minutes} : ${seconds} : ${miliseconds}`);
  };

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setTime(previousTime => previousTime + 1);
      }, 1);
      return () => clearInterval(timer);
    }
  }, [start]);
  return (
    <div className={styles.timer}>
      <section className={styles.time}>{msToTime(time)}</section>
      <Button onClick={() => setStart(true)}>Start</Button>
      <Button onClick={() => setStart(false)}>Stop</Button>
      <Button onClick={() => setTime(0)}>Reset</Button>
    </div>
  )

}

export default Timer;