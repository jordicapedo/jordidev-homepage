import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Grid
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Skill from '../components/skill'
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMailOutline
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container mt={12}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jordi Capellades
            </Heading>
            <p>( Artist / Developer / Designer ) </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            mb={{ base: 4 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="190px"
              display="inline-block"
              borderRadius="full"
              src="/images/jordi.jpeg"
              alt="profile"
            />
          </Box>
        </Box>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb={6}
          p="3"
          align="center"
        >
          Hello, I&apos;m a web developer based in Barcelona!
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Jordi is a developer based in Barcelona with a passion for create
            and building digital stuff. He is currently learning Frontend
            technologists like Nextjs, React, Chakra UI and Tailwind. He is also
            a big fan of the open-source community and is always trying to learn
            new things. When he is not coding, he is usually training
            calisthenics or listing/making music.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Barcelona, Catalunya.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Completed the Superior Grade in Web Aplication Development at Escola
            Industrial.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked at Edittec
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked at Fhios
          </BioSection>
          <BioSection>
            <BioYear>Present</BioYear>
            Learning to become a Full-Stack Developer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>
            Music, design, technology, art and everything in between. I love too
            much animals and special my cat and this is what I become vegan 2
            years ago.
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            <Skill color="red">React</Skill>
            <Skill color="orange">Next</Skill>
            <Skill color="yellow">JS</Skill>
            <Skill color="green">PHP</Skill>
            <Skill color="teal">CSS</Skill>
            <Skill color="blue">HTML</Skill>
            <Skill color="purple">GIT</Skill>
            <Skill color="pink">SCRUM</Skill>
          </Grid>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://instagram.com/jordicapedo" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @jordicapedo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://linkedin.com/in/jordicapelladesedo"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  /in/jordicapelladesedo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/jordicapedo" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  /jordicapedo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:jordicapelladesedo@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoMailOutline />}
                >
                  jordicapelladesedo@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
