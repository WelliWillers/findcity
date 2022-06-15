import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Logo({...rest}){ 
    const {asPath} = useRouter()
    return (
        <Text {...rest} textAlign={{base: asPath != "/" ? 'right' : 'center', md: 'center', lg: 'left'}} pb={{base: asPath == "/" ? 3 : 0, md: 3, lg: 0}} fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight" w="64">
            Find.
            <Text color="primary.normal" as="span">City</Text>
        </Text>
    )
}