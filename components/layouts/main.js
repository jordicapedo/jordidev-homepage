import Head from 'next/head'
import { Box, Container, Image, useColorModeValue } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  const catImg = `/images/cat${useColorModeValue('', '-dark')}.png`
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Jordi Capellades - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Box align="center" pt={10}>
        <Image src={catImg} width={300} height={300} alt="logo" />
      </Box>
      <Container maxW="container.md">{children}</Container>
    </Box>
  )
}

export default Main
