import { Container, Heading, Box, Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Works = () => {
  return (
    <Layout>
      <Container mt={12}>
        <Section>
          <Heading as="h3" fontSize={20} mb={4}>
            Coming soon...
          </Heading>
          <Paragraph>Here you can will see my works.</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="cyan">
                Return to home
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
