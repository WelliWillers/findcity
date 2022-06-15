import { Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface CardBoxProps {
    router?: string
    height?: string
    children: ReactNode
    notLink?: boolean
}

export function CardBox({children, notLink = false, height = "180px", router}:CardBoxProps){

    const CardBoxBackgroundColorTheme = useColorModeValue("gray.100", "gray.700")
    const CardBoxTextColorTheme = useColorModeValue("gray.900", "gray.50")

    const route = useRouter()

    function handleGoToUrl (){
        if(!notLink){
            route.push(`${router}`)
        }
    }

    return (
            <Button
                as={notLink ? 'div' : 'button'}
                cursor={notLink ? 'auto' : 'pointer'}
                w="100%"
                onClick={handleGoToUrl}
                bg={CardBoxBackgroundColorTheme}
                color={CardBoxTextColorTheme}
                minHeight={height}
                borderRadius={30}
                boxShadow="2xl"
                padding={5}       
                transition="border 200ms"
                _hover={{
                    border: "5px solid",
                    borderColor:"primary.normal"
                }}
            >
                <Stack 
                    spacing={4}
                    display="flex"
                    textAlign="center"  
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column" 
                >
                   {children}
                </Stack>
            </Button>
    )
}