import React from 'react'
import styles from "./Navbar1.module.css"
import logo from "../Assets/AG.png"
import {Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import {FaBars} from "react-icons/fa"
import { HashLink as Link } from 'react-router-hash-link'
import {FaCarSide} from "react-icons/fa"

export const Navbar1 = () => {


window.onscroll = function() {myFunction()};
function myFunction() 
{
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
// document.getElementById("icon-id").style.translate = scrolled+"%";
}

  return (
    <>
     <div className={styles.navbar}>
      
      <div className={styles.leftSide}>
      <img src={logo} style={{width:"48px"}} alt="logo" />
      </div>

  <div className={styles.rightSide}>
    <div className={styles.links}>
      <Link to="#home" smooth className={styles.btnStyle}  >
      <span>Home</span>
      </Link>
      <Link to="#about" smooth className={styles.btnStyle}>
      <span>About</span>
      </Link>
      
      <Link to="#projects" smooth className={styles.btnStyle}>
      <span>Projects</span>
      </Link>
      <Link to="#skills" smooth className={styles.btnStyle}>
      <span>Skills</span>
      </Link>
      <Link to="#contact" smooth className={styles.btnStyle}>
      <span>Contact</span>
      </Link>

      <Link to="#resume" smooth className={styles.btnStyle}>
      <span>Resume</span>
      </Link>
    </div>
  </div>

    {/* ***********MOBILE NAV***************** */}
  <div className={styles.mobileNav}>
    <Menu>
      <MenuButton bgColor={"none"}>
        <FaBars/>
      </MenuButton>
      <MenuList bgColor={"black"}>

        <MenuItem className={styles.menuItem}>
          <Link to="#home" smooth  >
          <Text  _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Home</Text>
          </Link>
        </MenuItem>
        <MenuItem className={styles.menuItem}>
          <Link to="#about" smooth>
      <Text _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">About</Text>
      </Link>
        </MenuItem>

        <MenuItem className={styles.menuItem}>
      <Link to="#projects" smooth>
      <Text  _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Projects</Text>
      </Link>
        </MenuItem>

        <MenuItem className={styles.menuItem}>
      <Link to="#skills" smooth>
      <Text  _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Skills</Text>
      </Link>
      </MenuItem>
        <MenuItem className={styles.menuItem}>
      <Link to="#contact" smooth>
      <Text _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Contact</Text>
      </Link>
        </MenuItem>
        <MenuItem className={styles.menuItem}>
      <Link to="#resume" smooth>
      <Text _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Resume</Text>
      </Link>
        </MenuItem>
      </MenuList>
    </Menu>
        
  </div>

    </div>



    {/* ****************ProgressBar****************** */}
  <div className={styles.progressContainer}>
    <div className={styles.progressBar} id="myBar">
    {/* <div id="icon-id"><FaCarSide/></div> */}
    </div>
  </div>
    </>
  )


}


