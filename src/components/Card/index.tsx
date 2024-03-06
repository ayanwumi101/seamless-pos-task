import { Box, Image, Heading, Text, Stack, Flex } from "@chakra-ui/react"
import { ProductCardProps } from "../../Schemas"
import ButtonComponent from "../Button"
import { Link } from "react-router-dom"


const index = ({image, title, description, price, category, id}: ProductCardProps) => {
  return (
      <Box w='285px' bg='#F4F5F7' h='auto' borderRadius='8px' border='1px solid #ededed'>
        <Stack w='100%' h='100%' spacing={2}>
            <Image 
                src={image} w='100%' h='250px' objectFit='cover' borderTopRightRadius='8px' borderTopLeftRadius='8px' 
            />
            <Box p='3'>
            <Stack spacing={2} mb='4'>
                <Heading fontSize={18} lineHeight='28px' fontWeight={700}>{title}</Heading>
                <Text textTransform='capitalize'>{description}</Text>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Box>
                        <Stack direction='row' alignItems='center' spacing={0.5}>
                            <Text fontWeight={700}>$</Text>
                            <Heading fontWeight={700} fontSize={24}>{price}</Heading>
                        </Stack>
                    </Box>
                    <Text textTransform='capitalize' px='12px' py='4px' fontSize={13} borderRadius='60px' bg='gray' color='white'>{category}</Text>
                </Flex>
            </Stack>
            <Link to={`/products/${id}`}>
                <ButtonComponent text='View details' bg='rgba(0,0,0,0.5)' color='white' width='100%' />
            </Link>
           </Box>
        </Stack>
    </Box>
  )
}

export default index