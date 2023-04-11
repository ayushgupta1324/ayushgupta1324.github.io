import styles from "./Home.module.css"
import programmer from "../Assets/programmer.gif"

import { BsStars } from 'react-icons/bs';



export default function Home()
{

    
return(
<>

<div className={styles.container} id="home">
    <div className={styles.text}>
        <div className={styles.line}>
            <p>Hi,</p>
            <p>I'm Ayush!</p>
        </div>
        <div className={styles.line}>
            <p>Full Stack</p>
            <p> Web Developer  </p>
        </div>
        <BsStars  style={{marginLeft:"240px", fontSize:"12px"}} className={styles["animate-flicker"]}/>
    </div>
    <div className={styles.imgDivWrapper}>
    <BsStars className={styles["animate-flicker"]}/>
        <img src={programmer} alt="programmer" className={styles.portfolioImg}/>
        {/* <BsStars  style={{marginLeft:"240px"}} className={styles["animate-flicker"]}/> */}
    </div>
    
</div>

</>


    ) 
}

