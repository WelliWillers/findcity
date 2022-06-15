import { Box, Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { RiArrowUpLine } from "react-icons/ri"
import { Footer } from "../Footer"
import { Header } from "../Header"


interface CommunsPartsProps {
    title?: string
    subtitle?: string
    children: ReactNode
}

export default function CommunsParts({title, subtitle, children}: CommunsPartsProps){
    return (
        <Box height="100vh" minHeight="100%">
            <Flex direction="column" h={{base: "auto"}}>
                <Header/> 

                <Flex w="100%" h="100%" minHeight="65vh" maxWidth={1480} my="6" px="6" pb="16" mx="auto" flexDirection="column">
                    <Box py="8" textAlign={{base: "center", lg: "left"}}>
                        <Heading>{title ? title : ''}</Heading>
                        <Text fontSize="md">
                            {subtitle}
                        </Text>
                    </Box>

                    {children}
                </Flex>

                <Box width="100%" position="fixed" bottom="0">

                    <IconButton
                        type="button"
                        position={"fixed"}
                        right={"2rem"}
                        bottom={"4rem"}
                        bgColor='primary.normal'
                        color='gray.50'
                        aria-label='Voltar ao topo'
                        size='lg'
                        _hover={{
                            bgColor: 'primary.hover'
                        }}
                        icon={<Icon as={RiArrowUpLine} />}
                    />
                    <Footer />
                </Box>
            </Flex>
        </Box>
    )
} 