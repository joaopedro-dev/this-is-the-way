import Image from "next/image";
import styles from "../../styles/components/building.module.css";

function Building(){
    return(
        <div className={styles.container_building}>
            <h2 className={styles.title_build}>Developing this Page...</h2>
            <p className={styles.error}>ERROR 420</p>
            <Image src="/coding.png" alt="developing status" width={128} height={128}/>
        </div>  
    )
}

export default Building