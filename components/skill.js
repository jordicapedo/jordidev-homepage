import { Badge, GridItem } from '@chakra-ui/react'

function skill({ children, color }) {
  return (
    <GridItem>
      <Badge colorScheme={color}>{children}</Badge>
    </GridItem>
  )
}

export default skill
