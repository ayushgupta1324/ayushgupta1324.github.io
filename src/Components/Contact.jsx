import React from 'react'
import styles from "./Contact.module.css"
import { BsGithub,BsLinkedin } from 'react-icons/bs';
import {Box,Text} from "@chakra-ui/react"

export const Contact = () => {

  let username = ['@','a','y','u','s','h','g','u','p','t','a','1','3','2','4']

  return (
    <>
    <div id="contact">
      <Box className={styles.container}>
      <Box><Text className={styles.heading}>Just a Click away!</Text></Box>
        <div className={styles.line}>

        <div className={styles.githubLogo}>
            <h3><BsGithub/></h3>
        </div>
        <div>
        <a className={`${styles.word} ${styles.fancy}`} id="github-link" href="https://github.com/ayushgupta1324" target="_blank" rel="noreferrer"  >    
          {
            username.map(letter=>(<span className={styles.letter}>{letter}</span>))
          }
        </a>
        </div>
                
        </div>
        <div>
          <BsLinkedin/>
        </div>
        <Box>

        </Box>
      
      </Box>
    </div>

  
    </>
    
  )
}
