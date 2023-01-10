import { Box,Text,Image, SimpleGrid,Button } from "@chakra-ui/react"
import tripToB1 from "../Assets/tripToB1.PNG"
import styles from "./Projects.module.css"


export default function Projects()
{
    return(

        <Box mt="36px" h="100vh" className={styles.container}>
        <Text fontSize={"36px"}>
            Projects
        </Text>
        <Box w="90%" m="auto" mt="36px">

<SimpleGrid columns={{sm: 1, md: 2}} spacing='40px'>
  <Box height='320px'>
    <Image h="320px" src={tripToB1}/>
  </Box>
  <Box bg='transparent' height='150px'>
    <Text>tripTo</Text>
    <Text>tripTo is a clone of social travel platform tripoto. Built with passion to offer the best user experience.</Text>
    <Button variant='outline'><a href="https://triptosite.netlify.app/"></a>Website</Button>
    <Button variant='outline'><a href="https://github.com/ayushgupta1324/tripTo"></a>Github</Button>
  </Box>

</SimpleGrid>
        </Box>
        </Box>



        // <Box>
        // </Box>
    )

    
}