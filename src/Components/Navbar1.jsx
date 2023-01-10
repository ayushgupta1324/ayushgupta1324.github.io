import React from 'react'
import {Box} from "@chakra-ui/react"
import styles from "./Navbar1.module.css"

export const NavbarNew = () => {
  return (
    <Box className={styles.navbar}>
      <button className={styles.btnStyle}>Home</button>
      <button>About</button>
      <button>Skills</button>
      <button>Projects</button>
      <button>Contact</button>
      <button>Resume</button>
    </Box>
  )
}
