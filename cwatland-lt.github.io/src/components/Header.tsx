import {
    Link as ChakraLink,
    MenuRoot,
    MenuTrigger,
    MenuPositioner,
    MenuContent as ChakraMenuContent,
    Stack, Flex
} from "@chakra-ui/react";
import {NavLink, useNavigate} from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    const MenuLinks: React.FC = () => {
        return (
            <Stack>
                <NavLink to='/animations' style={{ color: 'white', outline: 'none'}}>Animations</NavLink>
                <NavLink to='/models' style={{ color: 'white', outline: 'none'}}>3D Models</NavLink>
                <NavLink to='/maps' style={{ color: 'white', outline: 'none'}}>Maps</NavLink>
            </Stack>
        )
    }

    return (
        <Flex as={'nav'} left={0} top={0} maxHeight={'64px'} width={'100%'} bg="teal.500" p={4}>
            <ChakraLink color="white" fontWeight="bold" mr={4} onClick={() => navigate('/')}>
                Home
            </ChakraLink>
            <MenuRoot>
                <MenuTrigger asChild>
                    <ChakraLink color="white" fontWeight="bold" mr={4}>
                        Stuff
                    </ChakraLink>
                </MenuTrigger>
                <MenuPositioner>
                    <ChakraMenuContent width={'auto'} minWidth={0} bg="teal.500">
                        <MenuLinks />
                    </ChakraMenuContent>
                </MenuPositioner>
            </MenuRoot>
        </Flex>
    )
}

export default Header;