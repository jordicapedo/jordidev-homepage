import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelDogLoader from '../voxel-character-loader'
import dynamic from 'next/dynamic'

const LazyVoxelDog = dynamic(() => import('../voxel-character'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Jordi Capellades - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md">
        <LazyVoxelDog />
        {children}
      </Container>
    </Box>
  )
}

export default Main
