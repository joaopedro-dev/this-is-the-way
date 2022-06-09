import styles from "../../styles/components/manifesto.module.css";
import { motion } from "framer-motion";

function Manifesto_card() {
  return (
    <motion.div animate="visible" initial="hidden" variants={{
      hidden:{
        scale: .8,
        opacity: 0
      },
      visible:{
        scale: 1,
        opacity: 1,
        transition: {
          delay: .2
        }
      }
    }}>
    <div className={styles.container}>
      <h1 className={styles.title}>Manifesto DevOrder</h1>
      <ol className={styles.articles}>
        <li>
          Act like an adult:
          <ol className={styles.subArticles}>
            <li className={styles.lines}>
              Instead of outsourcing your decisions, take the responsibility for
              them and search for your answers!
            </li>
            <li className={styles.lines}>
              Instead of looking for companies that give you scooters, look for
              those that bring you real evolution.
            </li>
            <li className={styles.lines}>
              Don&apos;t follow the script, analyze what works well for you and make
              your own.
            </li>
            <li className={styles.lines}>
              Assume the glory of the right choices and the learning of the
              wrong ones.
            </li>
            <li className={styles.lines}>
              Don&apos;t blame the game, blame the player, instead learn how to play.
            </li>
          </ol>
        </li>
        <li className={styles.lines}>Be accountable.</li>
        <li className={styles.lines}>
          Stop trying to be the next Steve Jobs, instead just try to be
          yourself!
        </li>
        <li className={styles.articles}>Documentation is your best friend.</li>
        <li className={styles.articles}>Start where you are!</li>
        <li className={styles.articles}>Formulas don&apos;t exist.</li>
        <li className={styles.articles}>Be so good then can&apos;t ignore you</li>
      </ol>
    </div>
    </motion.div>
  );
}

export default Manifesto_card;
