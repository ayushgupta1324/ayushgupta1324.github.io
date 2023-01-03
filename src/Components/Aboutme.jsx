import {Text,Box,Image} from "@chakra-ui/react"
import GithubBanner from "../Assets/GithubBanner.gif"

export default function Aboutme()
{
return(
<Box mt={"36px"}>
      {/* <Text fontSize={"36px"}>
        Hi I'm Ayush
    </Text>
    <Text fontSize={"24px"}>
        Full Stack Web Developer
    </Text> */}
    <Box w="90%" m="auto" mt="36px">
    <Image src={GithubBanner} display="block" m="auto"/>
    </Box>
    {/* GithubBanner */}
</Box>
    ) 
}

