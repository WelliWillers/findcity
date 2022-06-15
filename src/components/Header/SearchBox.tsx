import { Flex, Icon, Input, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { useSearch } from "../../contexts/SearchContext";

export function SearchBox() {

    const { handleGetSearchText } = useSearch()
    const SearchBackgroundColorTheme = useColorModeValue("gray.100", "gray.700")
    const SearchTextColorTheme = useColorModeValue("gray.900", "gray.50")

    return (
        <Flex as="label" flex="1" py="4" px="8" ml={{base: "0", lg:"6"}} maxWidth={400} alignSelf="center" color={SearchTextColorTheme} position="relative" bg={SearchBackgroundColorTheme} borderRadius="full">
            <Input px="2" mr="4" color={SearchTextColorTheme} variant="unstyled" onChange={(e) => handleGetSearchText(e.target.value)} placeholder="Buscar pelo nome do continente" _placeholder={{ color: 'gray.400' }} />
            <Icon as={RiSearchLine} fontSize="20" />
        </Flex>
    )
}