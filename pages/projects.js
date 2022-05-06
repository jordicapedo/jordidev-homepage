import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import thumbPokemones from '../public/images/works/pokemones_eyecatch.png'

const Works = () => {
  return (
    <Layout>
      <Container mt={12}>
        <Section>
          <Heading as="h3" fontSize={20} mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id="pokemones"
                title="Pokemones"
                url="https://pokemonesdex.vercel.app/"
                thumbnail={thumbPokemones}
              >
                App created with Nextjs and Chakra UI
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
