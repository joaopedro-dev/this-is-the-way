import styles from "../../styles/components/dash-journey.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function DashJourney() {
  return (
    <div className={styles.dashboard}>
      <div>
        <div className={styles.grid}>
          <motion.div
            animate="visible"
            initial="hidden"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Link href="/devwan">
              <a className={styles.card}>
                <Image
                  src="/babysound.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <h3>Devwan</h3>
                <p>Beginner Level</p>
              </a>
            </Link>
          </motion.div>
          <motion.div
            animate="visible"
            initial="hidden"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Link href="">
              <a className={styles.card}>
                <Image src="/monkey.png" alt="Logo" width={100} height={100} />
                <h3>Dev Knight</h3>
                <p>Intermediate Level</p>
              </a>
            </Link>
          </motion.div>
          <motion.div
            animate="visible"
            initial="hidden"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Link href="">
              <a className={styles.card}>
                <Image
                  src="/astronaut-1.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <h3>Dev Master</h3>
                <p>Advanced Level</p>
              </a>
            </Link>
          </motion.div>
          <motion.div
            animate="visible"
            initial="hidden"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Link href="">
              <a className={styles.card}>
                <Image src="/krishna.png" width={100} height={100} alt="ok" />
                <h3>Grand Master</h3>
                <p>God Level</p>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DashJourney;
