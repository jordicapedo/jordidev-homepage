import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import thumbPokemones from '../public/images/works/pokemones_eyecatch.png'
import thumbTodoApp from '../public/images/works/todo_app_eyecatch.png'
import thumbSpotifyClone from '../public/images/works/spotify_clone_eyecatch.png'

const Works = () => {
  return (
    <Layout title="Projects">
      <Container mt={12}>
        <Section>
          <Heading as="h3" fontSize={20} mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                title="Pokemones"
                url="https://pokemonesdex.vercel.app/"
                thumbnail={thumbPokemones}
              >
                App created with Nextjs and Chakra UI
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                title="Todo App"
                url="https://todo-redux-smoky.vercel.app/"
                thumbnail={thumbTodoApp}
              >
                App created with React and Redux
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                title="Spotify Clone"
                url="https://github.com/jordicapedo/spotify-next"
                thumbnail={thumbSpotifyClone}
              >
                App created with Next, Tailwind, Middlewares and NextAuth
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
