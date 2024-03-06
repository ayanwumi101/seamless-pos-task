import { Box, Image, Heading, Text, Flex, Stack } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductsContext } from "../../App"


const ProductDetails = () => {
  const [newProduct, setNewProduct] = useState<any>([])
  const { id } = useParams<{ id: any }>()
  const { products } = useContext(ProductsContext);
  

  useEffect(() => {
    const filteredProduct = products?.find((product: any) => product?.id === parseInt(id));
    setNewProduct(filteredProduct);
  }, [id])

  return (
    <Box w='95%' mx='auto' py='14'>
      <Flex alignItems='center' justifyContent='space-between' flexWrap='wrap' flexDirection={{base: 'column', md: 'column', lg: 'row'}} maxW='1200px' mx='auto'>

        <Box maxW='500px' h='500px' borderRadius='12px' border='1px solid lightgray' mb='5'>
          <Image src={newProduct?.image} w='100%' h='100%' objectFit='cover' borderRadius='12px' />
        </Box>

        <Box maxW='600px' p={{base: 4, lg: 0}}>
          <Stack spacing={5}>
            <Heading>{newProduct?.title}</Heading>
            <Text>{newProduct?.description}</Text>
            <Text>{newProduct?.description}</Text>
            <Flex alignItems='center' justifyContent='space-between'>
              <Box>
                <Stack direction='row' alignItems='center' spacing={0.5}>
                  <Text fontWeight={700} fontSize={18}>$</Text>
                  <Heading fontWeight={700} fontSize={30}>{newProduct?.price}</Heading>
                </Stack>
              </Box>
              <Text textTransform='capitalize' px='12px' py='4px' fontSize={13} borderRadius='60px' bg='gray' color='white'>{newProduct?.category}</Text>
            </Flex>
          </Stack>
        </Box>
        
      </Flex>
    </Box>
  )
}

export default ProductDetails