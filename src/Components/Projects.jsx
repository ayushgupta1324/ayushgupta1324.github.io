import { Box, Image, SimpleGrid, Button } from "@chakra-ui/react";
// import tripToB1 from "../Assets/tripToB1.png"
import styles from "./Projects.module.css";
// import helloBrightline from "../Assets/helloBrightline.png"
import fullsizeScreenshot from "../Assets/triptoImg.webp";
import brightlineImg from "../Assets/helloBrightlineImg.webp";
import mondayImg from "../Assets/mondayImg.webp";
import githubLogo from "../Assets/skills_img/github.png"

export default function Projects() {
  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


  // document.querySelector("h1").onmouseover = event=>{
  //   let iterations = 0;
  //   const interval = setInterval(()=>{
  //   event.target.innerText = event.target.innerText.split("").map((letter,index)=>{
  //     if(index<iterations)
  //       {
  //         return event.target.dataset.value[index]
          
  //       }
  // return letters[Math.floor(Math.random()*26)]}).join("");
  //     if (iterations>=event.target.dataset.value.length) clearInterval(interval)
  //     iterations+=1/3
  //   },30)
  // }
  

  return (
    <>
      <Box mt="36px" className={styles.container} id="projects">
        <p className={styles.heading}>Projects</p>

        <div mt="36px" paddingBottom={"24px"} className={styles.wrapper}>
          <div className={styles.box}>
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing="40px">

              <article>
                <div className={styles.stand}>
                  <div className={styles.monitor}>
                    <img src={fullsizeScreenshot} alt="" />
                  </div>
                </div>
              </article>
              <div className={styles.descWrapper}>
                <p className={styles.projectHeading}>TRIPTO</p>
                <p>
                  TRIPTO is inspired from social travel platform tripoto. Built
                  with passion to offer the best user experience.
                </p>
                <p>Tech Stack: HTML,CSS, Javascript,React</p>
                <a href="https://triptosite.netlify.app/" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Website</span>
                </a>
                <a href="https://github.com/ayushgupta1324/tripTo" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Github</span>
                </a>
                
              </div>
            </SimpleGrid>
          </div>
        </div>

        <div mt="36px" paddingBottom={"24px"} className={styles.wrapper}>
          <div className={styles.box}>
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing="40px">

              <article>
                <div className={styles.stand}>
                  <div className={styles.monitor}>
                  <img src={brightlineImg} alt="" />
                  </div>
                </div>
              </article>
              <div className={styles.descWrapper}>
                <p className={styles.projectHeading}>HELLOBRIGHTLINE</p>
                <p>
                Brightline is a technology-enabled behavioral health home for children and their families.
                </p>
                <p>Tech Stack: HTML,CSS, Javascript</p>
                <a href="https://hellobrightline.netlify.app/" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Website</span>
                </a>
                <a href="https://github.com/ayushgupta1324/helloBrightline-clone" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Github</span>
                </a>
                
              </div>
            </SimpleGrid>
          </div>
        </div>

        <div mt="36px" paddingBottom={"24px"} className={styles.wrapper}>
          <div className={styles.box}>
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing="40px">

              <article>
                <div className={styles.stand}>
                  <div className={styles.monitor}>
                  <img src={mondayImg} alt="" />
                  </div>
                </div>
              </article>
              <div className={styles.descWrapper}>
                <p className={styles.projectHeading}>MONDAY.COM</p>
                <p>
                Monday.com is a cloud-based platform that allows users to create their own applications and project management software
                </p>
                <p>Tech Stack: HTML,CSS, Javascript</p>
                <a href="https://illustrious-stardust-fe979b.netlify.app/index.html" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Website</span>
                </a>
                <a href="https://github.com/ayushgupta1324/monday.com-clone/tree/main/Final_website" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span> Github</span>
                </a>
                
              </div>
            </SimpleGrid>
          </div>
        </div>

        {/* <Box w="90%" m="auto" mt="36px" paddingBottom={"24px"}>
          <Box>
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing="40px">
            
              <div className={styles.stand}>
                <div className={styles.monitor}>
                  <img src={brightlineImg} alt="" />
                </div>
              </div>
              <Box
                bg="transparent"
                border={"1px solid yellow"}
                w="80%"
                m="auto"
                p="20px 16px 20px 16px"
              >
                <p>HELLOBRIGHTLINE</p>
                <p>
                  tripTo is a clone of social travel platform tripoto. Built
                  with passion to offer the best user experience.
                </p>
                <p>Tech Stack: HTML,CSS, Javascript,React</p>
                <a href="https://triptosite.netlify.app/">
                  <Button variant="outline">Website</Button>
                </a>
                <a href="https://github.com/ayushgupta1324/tripTo">
                  <Button variant="outline">Github</Button>
                </a>
              </Box>
            </SimpleGrid>
          </Box>
        </Box> */}

        {/* <Box w="90%" m="auto" mt="36px" paddingBottom={"24px"}>
          <Box>
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing="40px">
              
              <div className={styles.stand}>
                <div className={styles.monitor}>
                  <img src={mondayImg} alt="" />
                </div>
              </div>
              <Box
                bg="transparent"
                border={"1px solid yellow"}
                w="80%"
                m="auto"
                p="20px 16px 20px 16px"
              >
               
                <h1 data-value="monday.com">monday.com</h1>
                <p>
                  tripTo is a clone of social travel platform tripoto. Built
                  with passion to offer the best user experience.
                </p>
                <p>Tech Stack: HTML,CSS, Javascript,React</p>
                <a href="https://triptosite.netlify.app/">
                  <Button variant="outline">Website</Button>
                </a>
                <a href="https://github.com/ayushgupta1324/tripTo">
                  <Button variant="outline">Github</Button>
                </a>
              </Box>
            </SimpleGrid>
          </Box>
        </Box> */}
      </Box>
    </>
  );
}
