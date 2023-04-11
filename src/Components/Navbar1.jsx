import React from 'react'
import styles from "./Navbar1.module.css"
import logo from "../Assets/AG.png"
import {Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import {FaBars} from "react-icons/fa"
import { HashLink as Link } from 'react-router-hash-link'
// import {FaCarSide} from "react-icons/fa"
import resume from "../Assets/fw21_1180-Ayush-Gupta-Resume.pdf"
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

function resumeExternal(){
  window.open("https://drive.google.com/file/d/13DT5DynuKzhjk6ZPJFOACgCYjqiHJKN_/view?usp=sharing")
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

      <div smooth className={styles.btnStyle}>
        <a href={resume}  target="_blank" rel="noreferrer" download>
          <button onClick={resumeExternal}>
            <span>
            Resume
            </span>
          </button>
        </a>
      </div>
    </div>
  </div>

    {/* ***********MOBILE NAV***************** */}
  <div className={styles.mobileNav} >
    <Menu >
      <MenuButton bgColor={"none"} color="white" display="flex" alignItems="center">
        <FaBars/>
      </MenuButton>
      <MenuList bgColor={"black"}>
        <MenuItem bgColor={"#000000"} justifyContent="center" cursor={"pointer"} color="whiteAlpha.900" padding={"8px"} >
          <Link to="#home" smooth  >
          <Text  _hover={{borderBottomWidth:"2px", borderBottomColor:"white"}} borderBottomWidth="2px" borderBottomColor="transparent" transition="0.4s">Home</Text>
          </Link>
        </MenuItem>
        <MenuItem bgColor={"#000000"} justifyContent="center" cursor={"pointer"} color="whiteAlpha.900" padding={"8px"} >
          <Link to="#about" smooth>
      <Text _hover={{borderBottomWidth:"2px", borderBottomColor:"white"}} borderBottomWidth="2px" borderBottomColor="transparent" transition="0.4s">About</Text>
      </Link>
        </MenuItem>

        <MenuItem bgColor={"#000000"} justifyContent="center" cursor={"pointer"} color="whiteAlpha.900" padding={"8px"} >
      <Link to="#projects" smooth>
      <Text  _hover={{borderBottomWidth:"2px", borderBottomColor:"white"}} borderBottomWidth="2px" borderBottomColor="transparent" transition="0.4s">Projects</Text>
      </Link>
        </MenuItem>

        <MenuItem bgColor={"#000000"} justifyContent="center" cursor={"pointer"} color="whiteAlpha.900" padding={"8px"} >
      <Link to="#skills" smooth>
      <Text  _hover={{borderBottomWidth:"2px", borderBottomColor:"white"}} borderBottomWidth="2px" borderBottomColor="transparent" transition="0.4s">Skills</Text>
      </Link>
      </MenuItem>
        <MenuItem bgColor={"#000000"} justifyContent="center" cursor={"pointer"} color="whiteAlpha.900" padding={"8px"} >
      <Link to="#contact" smooth>
      <Text _hover={{borderBottomWidth:"2px", borderBottomColor:"white"}} borderBottomWidth="2px" borderBottomColor="transparent" transition="0.4s">Contact</Text>
      </Link>
        </MenuItem>
        <MenuItem bgColor={"#000000"} justifyContent="center" cursor={"pointer"} color="whiteAlpha.900" padding={"8px"} >
      <Link to="#resume" smooth>
      <Text _hover={{borderBottomWidth:"2px", borderBottomColor:"white"}} borderBottomWidth="2px" borderBottomColor="transparent" transition="0.4s">Resume</Text>
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


