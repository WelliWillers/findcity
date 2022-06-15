import { Box, Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { Icons } from "./Icons"
import { SearchBox } from "./SearchBox"
import { Logo } from "./Logo"
import Router, { useRouter } from "next/router"
import { RiArrowLeftLine } from "react-icons/ri"
import Link from "next/link"


export function Header() {
    const { asPath } = useRouter()

    const showInLarge = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex as="header" id="home" w="100%" maxWidth={1480} h="auto" alignItems="center" mx="auto" flexDirection={{base:'column', lg:'row'}} justifyContent="space-between" mt="4" px="6" align="center">
            <Flex flexDirection="row" gap="5" alignItems="center">
                {
                    asPath != '/' && (
                        <IconButton
                            variant='outline'
                            color='primary.normal'
                            onClick={() => Router.back()}
                            aria-label='Go back'
                            fontSize='20px'
                            borderColor="primary.normal"
                            icon={<Icon as={RiArrowLeftLine} />}
                        />
                    )
                }
                
                <Link href="/">
                    <Logo cursor="pointer"/>
                </Link>
            </Flex>

            <Flex flexDirection="row" gap="5" alignItems="center">
                {
                    asPath == '/' && (
                        <SearchBox />
                    )
                }

                {
                    showInLarge && (
                        <Flex align={{base: 'center', lg: 'right'}}>
                            <Icons />
                        </Flex>
                    )
                }
            </Flex>

        </Flex>
    )
}