import styles from "./About.module.css";
import React from "react";
import { HStack, Image, SimpleGrid,Link, Divider } from "@chakra-ui/react";
import AyushPhoto from "../Assets/AyushPhoto.jpg";
import resume from "../Assets/fw21_1180-Ayush-Gupta-Resume.pdf";



import { BsGithub, BsLinkedin } from "react-icons/bs";

export const About = () => {

  function resumeExternal() {
    window.open(
      "https://drive.google.com/file/d/13DT5DynuKzhjk6ZPJFOACgCYjqiHJKN_/view?usp=sharing"
    );
  }

  return (
    <div id="about" style={{"paddingTop":"80px"}}>
      <div>
        <div className={styles.container}>
          <div>
            <p className={styles.heading}>Something About Me!</p>
          </div>
        <Divider w="80%" m="auto" zIndex={-1} />
          <div className={styles.introWrapper}>
            <SimpleGrid columns={[1, 1, 2]} spacing="40px">
              <div height="320px" className={styles.imageWrapper}>
                <Image src={AyushPhoto} alt="" className={styles.introImage} />
              </div>
              <div height="320px" className={styles.textWrapper}>
                <p className={styles.introText}>
                  {/* Innovative solution seeker, driven to deliver the best in any
                  situation. Enthusiastic approach towards new technologies.
                  Passionate about building user friendly application in
                  individual and collaborative environments. */}
                    Engineer, proactive, dynamic and multiskilled programmer 
                    with the main forte in Full Stack Web Development, having 
                    knowledge of Javascript, MongoDB, Express, Node.js, HTML, and CSS. 
                    Learning and technology enthusiast. Currently seeking opportunities 
                    to build reliable, optimised and scalable systems.

                </p>
                  {/* ----------------RESUME BUTTON----------------------- */}
                  <div className={styles.resumeBtnContainer}>
                    <div smooth className={styles.btnStyle}>
                        <a href={resume}  target="_blank" rel="noreferrer" download>
                          <button onClick={resumeExternal}>
                            <span>
                            Resume
                            </span>
                          </button>
                        </a>
                    </div>
                  <div>
            <HStack gap={0} padding="5px 0px" cursor={"pointer"}>
                  
                <Link href='https://www.linkedin.com/in/ayuta/' isExternal ><BsLinkedin color="white" size="30px"/></Link>   
                <a href="https://github.com/ayushgupta1324" target="_blank" rel="noreferrer"  ><BsGithub color="white" size="30px"/></a>
              </HStack>
             
             
            </div>
              </div>
              <div></div>
            
          </div>
            </SimpleGrid>
          </div>
        </div>
      </div>
    </div>
  );
};
