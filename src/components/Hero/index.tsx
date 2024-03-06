import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import { HeroComponentProps } from "../../Schemas"


const Hero = ({ image, description, heroText }: HeroComponentProps) => {
    return (
        <Box 
            bgImage={image} 
            backgroundRepeat='no-repeat' 
            backgroundSize='cover' 
            backgroundPosition='center' 
            w='100%' 
            h='500px'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Box
                w='100%'
                h='100%'
                bg='rgba(0, 0,0,0.5)'
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
               <Box>
                    <VStack spacing={2} textAlign='center'>
                        <Heading fontSize={40} color='white'>{heroText}</Heading>
                        <Text fontSize={20} color='white'>{description}</Text>
                    </VStack>
               </Box>
            </Box>
        </Box>
    )
}

export default Hero