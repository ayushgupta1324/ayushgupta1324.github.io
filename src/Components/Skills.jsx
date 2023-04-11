import { Box, Divider, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import chakrauiImg from "../Assets/skills_img/chakraui.png"
import htmlImg from "../Assets/skills_img/HTML.png"
import cssImg from "../Assets/skills_img/CSS.png"
import javascriptImg from "../Assets/skills_img/JS.png"
import reactImg from "../Assets/skills_img/REACT.png"
import reduxImg from "../Assets/skills_img/redux.png"
import nodejsImg from "../Assets/skills_img/nodejs.png"
import expressImg from "../Assets/skills_img/expressjs.png"
import mongoImg from "../Assets/skills_img/mongodb.png"
import typescriptImg from "../Assets/skills_img/TYPESCRIPT.png"
import gitbashImg from "../Assets/skills_img/git.png"
import githubImg from "../Assets/skills_img/github.png"

export const Skills = () => {
  return (
    <div style={{marginBottom:"64px",paddingTop:"80px"}} id="skills">
      <h1 style={{fontSize:"36px",fontWeight: "bold",padding: "0 15px"}}>Skills</h1>
      <Divider w="80%" m="auto" zIndex={-1} />
    <SimpleGrid columns={[3, 3, 4]} spacing='6%' w="80%" m="auto" paddingTop={"40px"} textAlign="center">
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px" display="flex" flexDirection={"column"} alignItems={"center"} justifyContent="space-around"><Image w="36%" src={htmlImg} m="auto"/>HTML</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={cssImg} m="auto"/>CSS</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={javascriptImg} m="auto"/>JavaScript</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={reactImg} m="auto"/>React</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={expressImg} m="auto"/>ExpressJS</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={typescriptImg} m="auto"/>TypeScript</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={reduxImg} m="auto"/>Redux</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={nodejsImg} m="auto"/>NodeJS</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={mongoImg} m="auto"/>MongoDB</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={gitbashImg} m="auto"/>GitBash</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={chakrauiImg} m="auto"/>ChakrUI</Box>
        <Box height='auto' fontSize={"14px"} w="100%" paddingY={"2"} m="auto" border={"4px solid grey"} borderRadius="8px"><Image w="36%" src={githubImg} m="auto"/>Github</Box>
    </SimpleGrid>
    </div>
  )
}
