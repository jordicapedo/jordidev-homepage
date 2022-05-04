import { Container, Heading } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Works = () => {
  return (
    <Container mt={12}>
      <Section>
        <Heading as="h3" fontSize={20} mb={4}>
          Coming soon...
        </Heading>
        <Paragraph>Here you can will see my works.</Paragraph>
      </Section>
    </Container>
  )
}

export default Works
