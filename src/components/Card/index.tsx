import React from 'react'
import { Box, Button, Center, Image } from '@chakra-ui/react'
import Camp from '../../assets/camp.webp'
import { useNavigate } from 'react-router-dom'

export const Card = () => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/camps')
  }
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderColor={'borders.700'}
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={Camp} alt="Acampamento" />
      <Center p="2">
        <Button
          aria-label="Acessar acampamentos"
          size={'md'}
          bg="borders.700"
          onClick={handleOnClick}
        >
          ACAMPAMENTOS
        </Button>
      </Center>
    </Box>
  )
}
