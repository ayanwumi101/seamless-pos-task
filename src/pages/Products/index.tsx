import { Box, Flex } from "@chakra-ui/react"
import ProductCard from '../../components/Card'
import { useContext } from "react"
import { ProductsContext } from "../../App"


const Products = () => {
  const { products } = useContext<ProductsContextType>(ProductsContext);
  return (
    <Box w='95%' my='14' mx='auto'>
      <Flex alignItems='center' flexWrap='wrap' rowGap='35px' justifyContent={{base: 'center', md:'space-between', lg: 'space-between'}}>
        {products.map((product: any) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title.substring(0, 40) + '...'}
              description={product.description.substring(0, 50) + '...'}
              price={product.price}
              category={product.category}
              id={product.id}
            />
          )
        })}
      </Flex>
    </Box>
  )
}

export default Products