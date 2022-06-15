import { Button, HStack, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookBoxLine, RiInstagramLine, RiMoonLine, RiSunLine } from "react-icons/ri";

export function Icons() {

    const { toggleColorMode, colorMode } = useColorMode()

    const IconTextColorTheme = useColorModeValue("gray.900", "gray.50")

    return (
        <HStack 
            spacing={["6", "8"]}
            // mx={["6", "8"]}
            // pr={["6", "8"]}
            py="1"
            color="gray.300"
        > 
            <Button bg="transparent" onClick={toggleColorMode}>
                {
                    colorMode == 'light' ? (<Icon cursor="pointer" color={IconTextColorTheme} as={RiSunLine} fontSize="20"/>) : (<Icon cursor="pointer" color="gray.200" as={RiMoonLine} fontSize="20"/>)
                }
            </Button>
        </HStack>
    )
}