import { Box, Text } from "@chakra-ui/react";

const Maps: React.FC = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            p={4}
        >
            <Text
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
                fontWeight="bold"
                color="teal.500"
            >
                This is the future home of the Maps page
            </Text>
        </Box>
    );
}

export default Maps;