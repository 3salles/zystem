import React from 'react'
import { Box, Button, Center, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { NavigationCardContent } from '../../models'

interface NavigationCardProps {
  cardContent: NavigationCardContent
}

export const NavigationCard = ({ cardContent }: NavigationCardProps) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`${cardContent?.route}`)
  }

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderColor={cardContent?.color}
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={cardContent?.img} alt={cardContent?.alt} w={400} h={250} />
      <Center p="2">
        <Button
          aria-label={cardContent?.ariaLabel}
          size={'md'}
          bg={cardContent?.color}
          _hover={{
            bg: `${cardContent?.color}`,
            opacity: 0.7,
          }}
          onClick={handleOnClick}
        >
          {cardContent?.label}
        </Button>
      </Center>
    </Box>
  )
}
