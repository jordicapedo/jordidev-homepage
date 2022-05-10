import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Jordi Capellades - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Box align="center" pt={24}></Box>
      <Container maxW="container.md">{children}</Container>
    </Box>
  )
}

export default Main
