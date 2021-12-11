import React, { ChangeEvent, useState } from 'react'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Center,
  SimpleGrid,
  Input,
} from '@chakra-ui/react'

import { colors } from '../../utils/colors'

export const ColorPicker = () => {
  const [color, setColor] = useState('gray.500')

  return (
    <Popover variant={'picker'}>
      <PopoverTrigger>
        <Button
          aria-label={color}
          bg={color}
          h={'40px'}
          w={'40px'}
          p={0}
          minW="unset"
          borderRadius={4}
        />
      </PopoverTrigger>
      <PopoverContent w={400}>
        <PopoverArrow bg={color} />
        <PopoverCloseButton color="white" />
        <PopoverHeader
          h="100px"
          bg={color}
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          color="white"
        >
          <Center h="100%">{color}</Center>
        </PopoverHeader>
        <PopoverBody>
          <SimpleGrid columns={16} spacing={2}>
            {colors?.map((color, index) => (
              <Button
                key={index}
                bg={color}
                aria-label={color}
                h="22px"
                w="22px"
                p={0}
                minW="unset"
                borderRadius={4}
                _hover={{ opacity: 0.8 }}
                onClick={() => setColor(color)}
              />
            ))}
          </SimpleGrid>
          <Input
            mt="2"
            placeholder="red.100"
            size="sm"
            value={color}
            color="black"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setColor(event.target.value)
            }
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
