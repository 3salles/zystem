import React from 'react'
import { Box, Button, Center, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { CardContent } from '../../models'

interface CardProps {
  card: CardContent
}

export const Card = ({ card }: CardProps) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`${card.route}`)
  }

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderColor={card.color}
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={card.img} alt={card.alt} w={400} h={250} />
      <Center p="2">
        <Button
          aria-label={card.ariaLabel}
          size={'md'}
          bg={card.color}
          onClick={handleOnClick}
        >
          {card.label}
        </Button>
      </Center>
    </Box>
  )
}
