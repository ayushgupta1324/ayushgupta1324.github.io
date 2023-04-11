import { Box, Image, SimpleGrid, Button, Heading, Divider } from "@chakra-ui/react";
import styles from "./Projects.module.css";
import fullsizeScreenshot from "../Assets/triptoImg.webp";
import brightlineImg from "../Assets/helloBrightlineImg.webp";
import mondayImg from "../Assets/mondayImg.webp";
import githubLogo from "../Assets/skills_img/github.png"
import burberryImg from "../Assets/burberryImg.webp"

export default function Projects() {
  
  return (
    <>
      <div className={styles.container} id="projects">
        <p className={styles.heading}>Projects</p>
        <Divider w="80%" m="auto" zIndex={-1} />
<div>
        <div mt="36px" paddingBottom={"24px"} className={styles.wrapper}>
          <div className={styles.box}>
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing="40px">

              <article>
                <div className={styles.stand}>
                  <div className={styles.monitor}>
                  <img src={burberryImg} alt="" />
                  </div>
                </div>
              </article>
              <div className={styles.descWrapper}>
                <p className={styles.projectHeading}>BURBERRY</p>
                <p>
                Burberry is a British luxury fashion house established in 1856 by Thomas Burberry headquartered in London, England.
                </p>
                <p>Tech Stack:</p> 
                <div className={styles.techStackWrapper}>
                
                <div className={styles.techStackTag}>HTML </div>
                <div className={styles.techStackTag}>CSS </div>
                <div className={styles.techStackTag}>Express</div>
                <div className={styles.techStackTag}>Javascript</div>
                <div className={styles.techStackTag}>React</div>
                <div className={styles.techStackTag}>MongoDB</div>
                
                </div>
                <div className={styles.btnDiv}>
                <a href="https://burberry-five.vercel.app/" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Website</span>
                </a>
                <a href="https://github.com/piyushkhurana8744/Burberry" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span> Github</span>
                </a>
                </div>
                
                
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
                <p className={styles.techStackPara}>Tech Stack:  <span className={styles.techStackTag}>HTML </span>
                <span className={styles.techStackTag}>CSS </span>
                <span className={styles.techStackTag}>Javascript</span>
                <span className={styles.techStackTag}>React</span> </p>
                <div className={styles.btnDiv}>
                <a href="https://triptosite.netlify.app/" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Website</span>
                </a>
                <a href="https://github.com/ayushgupta1324/tripTo" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Github</span>
                </a>
                </div>
                
                
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
                <p className={styles.techStackPara}>Tech Stack:  <span className={styles.techStackTag}>HTML </span>
                <span className={styles.techStackTag}>CSS </span>
                <span className={styles.techStackTag}>Javascript</span>
                </p>
                <div className={styles.btnDiv}>
                <a href="https://hellobrightline.netlify.app/" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Website</span>
                </a>
                <a href="https://github.com/ayushgupta1324/helloBrightline-clone" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Github</span>
                </a>
                </div>

                
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
                <p className={styles.techStackPara}>Tech Stack: <span className={styles.techStackTag}>HTML </span>
                <span className={styles.techStackTag}>CSS </span>
                <span className={styles.techStackTag}>Javascript</span>
                <span className={styles.techStackTag}>React</span>
                </p>
                <div className={styles.btnDiv}>
                <a href="https://teamsunday.netlify.app/" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span>Website</span>
                </a>
                <a href="https://github.com/ayushgupta1324/monday.com-clone/tree/main/Final_website" smooth className={styles.btnStyle} target="_blank" rel="noreferrer">
                  <span> Github</span>
                </a>
                </div>
                
                
              </div>
            </SimpleGrid>
          </div>
        </div>
        </div>
      </div>

      {/* ---------------------GITHUB STATS------------------------ */}
<div style={{"width":"80%","margin":"auto"}}>
      <div id="stats">
            <div id='stats Div'>
              <Heading textDecoration={'underline'} fontSize={36} textUnderlineOffset='10px' textDecorationStyle={'solid'} textDecorationColor={'orange'} color={'white'}>GitHub Stats </Heading><br/>
            </div><br/>
{/* -------------------------------------------------------- */}
            <div className={styles.statsFlex} >
            <div className={styles.statsFlexElement} id='contributionDiv'>
              <img src="https://github-readme-stats.vercel.app/api?username=ayushgupta1324&show_icons=true&count_private=true&theme=gruvbox&bg_color=0,000000,130F40&layout=compact&border_radius=10" alt="" />
              </div><br/>

            <div className={styles.statsFlexElement} id='contributionDiv'>
              
              <img src="https://github-readme-streak-stats.herokuapp.com/?user=ayushgupta1324&count_private=true&show_icons=true&custom_title=Github&theme=dark&bg_color=0,000000,130F40&layout=compact&border_radius=8&bg" alt="" />
            </div><br/>
            </div>

            <div id="calenderDiv">
             
             <link
                rel="stylesheet"
                href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
              />
             
             <div style={{backgroundColor:'Background',padding:'10px',borderRadius:'10px' ,border:"6px solid #3b3228", width:"90%", margin:"auto"}}>
              <img src="https://ghchart.rshah.org/342AFD/ayushgupta1324" alt="ayush's Github chart" />
             </div>
             
            </div> <br/>
            </div>
</div>


    </>
  );
}
