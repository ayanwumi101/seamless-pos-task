import { Button } from "@chakra-ui/react"
import { ButtonProps } from "../../Schemas"

const ButtonComponent = ({ bg, color, text, width }: ButtonProps) => {
  return (
      <Button
          bg={bg}
          color={color}
          py="20px"
          px="16px"
          borderRadius="8px"
          fontWeight="normal"
          w={width}
      >
          {text}
      </Button>
  )
}

export default ButtonComponent