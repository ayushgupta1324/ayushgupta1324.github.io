import {
  VStack,
  Divider,
  Heading,
  Text,
  Input,
  Textarea,
  InputGroup,
  InputLeftElement,
  Button,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser"

let githubUsername = [
  "@",
  "a",
  "y",
  "u",
  "s",
  "h",
  "g",
  "u",
  "p",
  "t",
  "a",
  "1",
  "3",
  "2",
  "4",
];

let linkedinUsername = ["@", "a", "y", "u", "t", "a"];

export const ContactNew = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const { hasCopied, onCopy } = useClipboard("ayushgupta1324@gmail.com");

  const toast = useToast()

  const handleSubmit = (e) => {

    e.preventDefault();
    if(userName!=="" && userEmail!=="" && userMessage!=="")
    {

    
    let params = {
      name: userName,
      email: userEmail,
      message: userMessage,
    };


    // ------------EMAIL JS------------

    emailjs.send("service_sb63wzx","template_hfirrwq",params,"U25ckeDkQn0jD9Iwb")
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          title:'Message Sent',
          status:'success',
          isClosable:'true'
        });
  
      }, function(err) {
        console.log('FAILED...', err);
      });
  
      setUserName("");
      setUserEmail("");
      setUserMessage("")
  }
  else
  {
    toast({
      title: `Please fill all your Details`,
      position: 'top-right',
      status:"warning",
      isClosable: true,
    })
  }
}


  return (
    <div
      id="contact"
      style={{ width: "100%", margin: "auto", padding: " 40px 10%" }}
    >
      <Heading textAlign="center" color="white" size="xl">
        <Text>Just a click away!</Text>
      </Heading>
      <Divider zIndex={-1} />
      <div className={styles.contactContainer}>
        <div className={styles.contactLeftElement}>
          <div className={styles.detailsDivWrapper}>
            <BsFillTelephoneFill size="25px" color="white" />
            <p color="white">+91 7550484895</p>
          </div>
          <div className={styles.detailsDivWrapper}>
            <BsFillEnvelopeFill size="25px" color="white" />
            <p color="white">ayushgupta1324@gmail.com</p>
          </div>
          <div className={styles.detailsDivWrapper}>
            <GoLocation size="25px" color="white" />
            <p color="white">Jhansi, Uttar Pradesh</p>
          </div>
          <div className={styles.detailsDivWrapper} padding="5px 0px">
            <BsLinkedin color="white" size="30px" />
            <a
              className={`${styles.word} ${styles.fancy}`}
              id="linkedin-link"
              href="https://www.linkedin.com/in/ayuta/"
              target="_blank"
              rel="noreferrer"
            >
              {linkedinUsername.map((letter) => (
                <span className={styles.letter}>{letter}</span>
              ))}
            </a>
          </div>
          <div className={styles.detailsDivWrapper}>
            <BsGithub color="white" size="30px" />
            <a
              className={`${styles.word} ${styles.fancy}`}
              id="github-link"
              href="https://github.com/ayushgupta1324"
              target="_blank"
              rel="noreferrer"
            >
              {githubUsername.map((letter) => (
                <span className={styles.letter}>{letter}</span>
              ))}
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <VStack
            className={styles.contactRightElement}
            gap={3}
            padding={4}
            alignItems={{ base: "center", sm: "center", md: "flex-start" }}
            width={{ base: "100%", sm: "85%", md: "80%", lg: "100%" }}
            margin="auto"
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiUser color="white" />}
              />
              <Input type="text" name={userName} value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter Your Name" color="white" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BsFillEnvelopeFill color="white" />}
              />
              <Input
                type="email"
                placeholder="Enter Your Email"
                color={"white"}
                name={userEmail} value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}
              />
            </InputGroup>
            <Textarea name={userMessage} value={userMessage} onChange={(e)=>setUserMessage(e.target.value)} placeholder="Message" color="white" />
            <Button
              type="submit"
              bgColor="#181823"
              fontSize="14px"
              textAlign="center"
              border="1px solid gray"
              _hover={{bgColor:"white",color:"#000"}}
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </div>
    </div>
  );
};

// export default Contact
