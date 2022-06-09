import Image from "next/image";
import styles from "../../styles/components/building.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function Building(){
    return(
        <motion.div animate="visible" initial="hidden" variants={{
            hidden:{
              scale: .8,
              opacity: 0
            },
            visible:{
              scale: 1,
              opacity: 1,
              transition: {
                delay: .5
              }
            }
          }}>
        <div className={styles.container_building}>
            <Link href="/">
                <a>
                    <Image src="/cannabis.png" alt="developing status" width={128} height={128}/>
                    <p className={styles.error}>ERROR 420</p>
                </a>
            </Link>
            <h2 className={styles.title_build}>We still developing this page...</h2>
        </div>
        </motion.div>  
    )
}

export default Building