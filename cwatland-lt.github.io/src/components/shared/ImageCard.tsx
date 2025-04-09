import { Button, Card, CloseButton, Dialog, Flex, Image, Portal } from "@chakra-ui/react";
import * as React from "react";

interface CardComponentProps {
    title: string;
    description: string;
    imageUrl: string;
    component?: React.FC;
    codepenLink?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, description, imageUrl, component: Component, codepenLink }) => {
    return (
        <Dialog.Root size={"cover"} placement={'top'} motionPreset={'slide-in-bottom'}>
            <Card.Root maxW={'sm'} cursor={'pointer'}>
                <Flex justifyContent={'center'} p={4} minH={'235px'} minW={'235px'}>
                    <Image width={'200px'} fit={'contain'} src={imageUrl} />
                </Flex>
                <Card.Body minH={'118px'}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>{description}</Card.Description>
                </Card.Body>
                <Card.Footer>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        gap={2}
                        alignItems={"center"}
                        justifyContent={"space-around"}
                        width={"100%"}
                    >
                        <Dialog.Trigger asChild>
                            <Button
                                variant="solid"
                                colorPalette="blue"
                                size="sm"
                                width={{ base: "100%", md: "auto" }}
                            >
                                View Animation
                            </Button>
                        </Dialog.Trigger>
                        {codepenLink && (
                            <Button
                                asChild
                                variant="solid"
                                colorPalette="blue"
                                size="sm"
                                width={{ base: "100%", md: "auto" }}
                            >
                                <a
                                    href={codepenLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        fontSize: "inherit",
                                    }}
                                >
                                    CodePen
                                </a>
                            </Button>
                        )}
                    </Flex>
                </Card.Footer>
            </Card.Root>
            <Portal>
                <Dialog.Backdrop>
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Context>
                                {(store) => (
                                    <>
                                        <Dialog.Header>
                                            <Dialog.Title style={{ textAlign: 'center', width: '100%' }}>{title}</Dialog.Title>
                                            <CloseButton onClick={() => store.setOpen(false)} style={{ position: "absolute", top: "8px", right: "8px" }} autoFocus={false}>X</CloseButton>
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