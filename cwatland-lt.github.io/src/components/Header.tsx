import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";

const Header: React.FC = () => {
    return (
        <Box as={'header'} position={'fixed'} left={0} top={0} width={'100%'} bg="teal.500" p={4}>
            <Flex as="nav" justify="space-between" align="center">
                <ChakraLink href="/" color="white" fontWeight="bold" mr={4}>
                    Home
                </ChakraLink>
                <ChakraLink href="/stuff" color="white" fontWeight="bold" mr={4}>
                    Stuff
                </ChakraLink>
            </Flex>
        </Box>
    )
}

export default Header;