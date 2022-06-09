import styles from "../../styles/components/dash.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Dash() {
  return (
    <div className={styles.dashboard}> 
        <div className={styles.grid}>
            <motion.div animate="visible" initial="hidden" variants={{
              hidden:{
                scale: .8,
                opacity: 0
              },
              visible:{
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .4
                }
              }
            }}>
          <Link href="/manifesto">
              <a className={styles.card}>
                <Image src="/astronaut.png" alt="Logo" width={90} height={90} />
                <h3>Manifesto</h3>
                <p>Here are our purpose and perspective</p>
              </a>
          </Link>
            </motion.div>
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
          <Link href="/journey">
            <a className={styles.card}>
              <Image src="/saber.png" alt="Logo" width={90} height={90} />
              <h3>The Journey</h3>
              <p>This is the journey to change your destiny forever</p>
            </a>
          </Link>
            </motion.div>
        </div>
      </div>
  );
}

export default Dash;
