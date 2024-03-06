import Hero from '../../components/Hero'
import Products from '../Products'
import { Box } from '@chakra-ui/react'

const index = () => {
    return (
        <Box>
            <Hero
                image="/hero-image.png"
                heroText="Discover Our New Collection" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis"
            />
            <Products />
        </Box>
    )
}

export default index