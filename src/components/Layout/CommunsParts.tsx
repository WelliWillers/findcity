import { Box, Link, Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react"
import { ReactNode, useLayoutEffect, useState } from "react"
import { RiArrowUpLine } from "react-icons/ri"
import { Footer } from "../Footer"
import { Header } from "../Header"


interface CommunsPartsProps {
    title?: string
    subtitle?: string
    children: ReactNode
}

export default function CommunsParts({title, subtitle, children}: CommunsPartsProps){

    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
        function updatePosition() {
        setPosition(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return (
        <Box height="100vh" minHeight="100%">
            <Flex direction="column" h={{base: "auto"}}>
                <Header/> 

                <Flex w="100%" h="100%" minHeight="65vh" maxWidth={1480} mb={{base: "20", lg: "6"}} px="6" pb={{base: "18", lg: "12"}} mx="auto" flexDirection="column">
                    <Box py="8" textAlign={{base: "center", lg: "left"}}>
                        <Heading>{title ? title : ''}</Heading>
                        <Text fontSize="md">
                            {subtitle}
                        </Text>
                    </Box>

                    {children}
                </Flex>

                <Box width="100%" position="fixed" zIndex={99} bottom="0">
                    {
                        scrollPosition > 300 && (
                            <Link href="#home">
                                <IconButton
                                    type="button"
                                    position={"fixed"}
                                    right={"2rem"}
                                    bottom={{base: "5rem", lg: "4rem"}}
                                    bgColor='primary.normal'
                                    color='gray.50'
                                    aria-label='Voltar ao topo'
                                    size='lg'
                                    _hover={{
                                        bgColor: 'primary.hover'
                                    }}
                                    icon={<Icon as={RiArrowUpLine} />}
                                />
                            </Link>
                        )
                    }

                    <Footer />
                </Box>
            </Flex>
        </Box>
    )
} 