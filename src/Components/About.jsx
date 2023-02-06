import styles from "./About.module.css";
import React from "react";
import { Image, SimpleGrid } from "@chakra-ui/react";
import AyushPhoto from "../Assets/AyushPhoto.jpg";

import { FaReact } from "react-icons/fa";
// import {IoLogoJavascript} from "react-icons/io"
import {
  SiTypescript,
  SiJavascript,
  SiGithub,
  SiMongodb,
} from "react-icons/si";

export const About = () => {
  return (
    <div id="about">
      <div className={styles.container}>
        <div>
          <p className={styles.heading}>Something About Me!</p>
        </div>
        <div className={styles.introWrapper}>
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">
            <div height="320px" className={styles.imageWrapper}>
              <Image src={AyushPhoto} alt="" className={styles.introImage} />
            </div>
            <div height="320px" className={styles.textWrapper}>
              <p className={styles.introText}>
                Innovative solution seeker and an accountable team player,
                driven to deliver the best in any situation. Enthusiastic
                approach towards new technologies. Passionate about building
                user friendly application in individual and collaborative
                environments.
              </p>
            </div>
          </SimpleGrid>
        </div>

        {/* <div className={styles.box}>
          <FaReact
            style={{ color: "aqua", marginLeft: "20px", marginTop: "200px" }}
          />
          <SiJavascript style={{ color: "aqua", marginLeft: "40px" }} />
          <SiTypescript style={{ color: "#3178C6", marginLeft: "60px" }} />
          <SiGithub style={{ color: "white", marginLeft: "80px" }} />
          <SiMongodb style={{ color: "#4ea94b", marginLeft: "100px" }} />
        </div> */}

        {/* <div
          className={styles.box}
          style={{ color: "yellow", marginLeft: "40px" }}
        >
          <SiJavascript />
        </div> */}

        {/* <div
          className={styles.box}
          style={{ color: "#3178C6", marginLeft: "60px" }}
        >
          <SiTypescript />
        </div>

        <div
          className={styles.box}
          style={{ color: "white", marginLeft: "80px" }}
        >
          <SiGithub />
        </div>

        <div>
          <SiMongodb
            className={styles.box}
            style={{ color: "#4ea94b", marginLeft: "100px" }}
          />
        </div> */}
      </div>
    </div>
  );
};
