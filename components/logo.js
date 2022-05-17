import Link from 'next/link'
import Image from 'next/image'
import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/logo${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={40} height={40} alt="logo" />
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
