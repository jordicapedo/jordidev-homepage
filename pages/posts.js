import { Container, Heading } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Posts = () => {
  return (
    <Container mt={12}>
      <Section>
        <Heading as="h3" fontSize={20} mb={4}>
          Coming soon...
        </Heading>
        <Paragraph>
          I&apos;m working on a new blog, but it&apos;s not ready yet. Here you
          can will see my posts. I&apos;ll be adding posts from all what I do in
          my life: vegan recipes, books that I liked, rutines, workouts... Stay
          tuned!
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Posts
