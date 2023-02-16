import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import {Box, Container, Center, Heading, Input, Button, Wrap } from "@chakra-ui/react"
import { Api } from "../../config/api"
import { login } from "../../hooks/Auth"

export function RegisterPage(){
    const nomeRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const handleTologin = async () =>{
        let nome = nomeRef.current.value
        let email = emailRef.current.value
        let password = passwordRef.current.value
        if (email && password) {
            Api.post('/user/create', {
                nome,
                email,
                password
              })
              .then(function (response) {
                console.log(response.data);
                if(response.data.status === "ok"){
                    login(response.data.token)
                    navigate("/painel")
                }else{
                    console.log(response.data.msg);
                }
               
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

    return(
    <Container maxW='2xl'  centerContent h='100vh'>
        <Center h='100vh'>
            <Box padding='4'  color='black' maxW='xl'>
                <Wrap spacing={4}>
                    <Heading>Criar conta</Heading>
                    <Input variant='filled' 
                    placeholder='nome' 
                    type='text' 
                    ref={nomeRef}
                    />
                    <Input variant='filled' 
                    placeholder='E-mail' 
                    type='email' 
                    ref={emailRef}
                    />
                    <Input variant='filled' 
                    placeholder='Senha' 
                    type='password' 
                    ref={passwordRef}
                    />
                    <Button colorScheme='teal' 
                    size='lg'
                    onClick={handleTologin}>
                    Registrar
                    </Button>
                </Wrap>
            </Box>
        </Center>
    </Container>
    )
}