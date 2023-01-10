import styles from "./About.module.css"
import React from 'react'
import {Box,Text,Image,SimpleGrid} from "@chakra-ui/react"
import AyushPhoto from "../Assets/AyushPhoto.jpg"

import { FaReact } from 'react-icons/fa';



export const About = () => {
  return (
    <div>
      
      <Box className={styles.container}>
      <Box><Text className={styles.heading}>Something About Me!</Text></Box>
        <Box className={styles.introWrapper}>
        <SimpleGrid columns={[1,1,2]} spacing='40px'>
  <Box height='320px' className={styles.imageWrapper}>
  <Image src={AyushPhoto} alt="" className={styles.introImage}/>
  </Box>
  <Box height='320px' className={styles.textWrapper}>
      <Text className={styles.introText}>
            Innovative solution seeker and an accountable team player, with
            1200+ hours of coding experience, driven to deliver the best in
            any situation. Enthusiastic approach towards new technologies.
            Passionate about building user friendly applications in individual
            and collaborative environments.
      </Text>
  </Box> 
</SimpleGrid>
        
            
            
        </Box>

	<div className={styles.box}>
    <FaReact/>
  </div>




      </Box>



    </div>
  )
}


