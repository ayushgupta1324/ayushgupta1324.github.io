import styles from "./Home.module.css"
import programmer from "../Assets/programmer.gif"

import { BsStars } from 'react-icons/bs';



export default function Home()
{

    
return(
<>

    <div className={styles.container}>
        <div className={styles.text}>
            <div className={styles.line}>
                <h1 className={styles.word}>Hi,</h1>
                <h1 className={styles.word}>I'm Ayush!</h1>
            </div>
            <div className={styles.line}>
                <p className={styles.word}>Full Stack</p>
                <p> Web Developer  </p>
            </div>
        </div>
        <div className={styles.imgDivWrapper}>
        <BsStars className={styles["animate-flicker"]}/>
            <img src={programmer} alt="programmer" className={styles.portfolioImg}/>
            <BsStars  style={{marginLeft:"240px"}} className={styles["animate-flicker"]}/>
        </div>
        <BsStars className={styles["animate-flicker"]}/>
    </div>

</>


    ) 
}

