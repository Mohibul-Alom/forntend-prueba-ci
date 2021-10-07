import { Flex, Spacer,Box,Link,Heading } from "@chakra-ui/react"
export default function Navbar() {
    return (
        <Flex bg="teal" mt="1">
            <Box p="2">
                <Heading color="white" size="md">Prueba internacional CI</Heading>
            </Box>
            <Spacer />
            <Box color="white" mt="2" mr="2">
                <Link>Test</Link>
            </Box>
            <Box color="white" mt="2" mr="2">
            <Link>Resutlado</Link>
            </Box>
        </Flex>
    )
}


