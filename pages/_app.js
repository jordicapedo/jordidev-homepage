import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Footer from '../components/footer'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
          <Footer />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
