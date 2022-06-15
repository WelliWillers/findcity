import { Box, Flex, Text, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { Icons } from "../Header/Icons";

export function Footer({...rest}){
    const FooterColorTheme = useColorModeValue("gray.100", "gray.700")

    const showInLarge = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex  boxShadow="lg" {...rest} bgColor={FooterColorTheme} as="footer" w="100%" alignItems="center"  flexDirection={{base:'column', lg:'row'}} py="3" px="6">
            <Flex justifyContent="space-between" w="100%" alignItems="center" maxWidth={1480} mx="auto">
                <Box>
                    <Text fontSize="sm">©2022 All rights reserved.</Text>
                </Box>
                {
                    !showInLarge && (
                        <Flex align={{base: 'right'}}>
                            <Icons />
                        </Flex>
                    )
                }
            </Flex>
        </Flex>
    )
}