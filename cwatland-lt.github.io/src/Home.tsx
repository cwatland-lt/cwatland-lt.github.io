import {Flex} from "@chakra-ui/react";
import Smoke from "@/components/animations/Smoke.tsx";

export default function Home() {

    return (
        <Flex>
            Hi
            <div>
                <Smoke />
            </div>


        </Flex>
    );
}