import {Card, CloseButton, Dialog, Flex, Image, Portal} from "@chakra-ui/react";
import * as React from "react";

interface CardComponentProps {
    title: string;
    description: string;
    imageUrl: string;
    component?: React.FC;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, description, imageUrl, component: Component }) => {
    return (
        <Dialog.Root size={"cover"} placement={'top'} motionPreset={'slide-in-bottom'}>
            <Dialog.Trigger>
                <Card.Root maxW={'sm'} cursor={'pointer'}>
                    <Flex justifyContent={'center'} p={4}>
                        <Image width={'200px'} fit={'contain'} src={imageUrl}/>
                    </Flex>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Description>{description}</Card.Description>
                    </Card.Body>
                </Card.Root>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop>
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Context>
                                {(store) => (
                                    <>
                                    <Dialog.Header>
                                        <Dialog.Title style={{ textAlign: 'center', width: '100%' }}>{title}</Dialog.Title>
                                        <CloseButton onClick={() => store.setOpen(false)} style={{position: "absolute", top: "8px", right: "8px"}} autoFocus={false}>X</CloseButton>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                {Component && <Component />}
                            </Dialog.Body>
                                    </>
                                )}

                            </Dialog.Context>
                        </Dialog.Content>

                    </Dialog.Positioner>
                </Dialog.Backdrop>
            </Portal>
        </Dialog.Root>
    );
}

export default CardComponent;