import { Container, Heading, Box, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Posts = () => {
  return (
    <Layout>
      <Container mt={12}>
        <Section>
          <Heading as="h3" fontSize={20} mb={4}>
            Coming soon...
          </Heading>
          <Paragraph>
            I&apos;m working on a new blog, but it&apos;s not ready yet. Here
            you can will see my posts. I&apos;ll be adding posts from all what I
            do in my life: vegan recipes, books that I liked, rutines,
            workouts... Stay tuned!
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="cyan">
                Back to home
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
