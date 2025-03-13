import { Flex, Grid } from "@chakra-ui/react";
import ImageCard from "@/components/shared/ImageCard.tsx";
import Sphere from "@/components/animations/Sphere.tsx";

const Animations: React.FC = () => {
    const cardData = [
        {
            title: "Rotating Sphere",
            description: "For this animation, I used animejs to rotate a sphere comprised of 400 dots in 3D space.",
            imageUrl: "./sphere.png",
            component: Sphere,
        },
    ];
    return (
        <Flex alignItems={'center'} justifyContent={'space-evenly'}>
        <Grid gap={6} templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}>
            {cardData.map((card, index) => (
                <ImageCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    component={card.component}
                />
            ))}
        </Grid>
        </Flex>
    );
}

export default Animations;