import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelCharacterLoader from '../voxel-character-loader'
import dynamic from 'next/dynamic'

const LazyVoxelCharacter = dynamic(() => import('../voxel-character'), {
  ssr: false,
  loading: () => <VoxelCharacterLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Jordi's homepage" />
        <meta name="author" content="Jordi Capellades" />
        <meta name="author" content="jordicapedo" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/images/logo-icon.png" />
        <meta property="og:site_name" content="Jordi Capellades" />
        <meta property="og:title" content="Jordi Capellades" />
        <meta property="og:type" content="website" />
        <title>Jordi Capellades - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelCharacter />
        {children}
      </Container>
    </Box>
  )
}

export default Main
