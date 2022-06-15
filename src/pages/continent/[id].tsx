import { Box, Flex, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { RiEyeLine, RiSmartphoneLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { CardBox } from "../../components/Layout/CardBox";
import CommunsParts from "../../components/Layout/CommunsParts"


interface ContinentsProps {
    id: number;
    name: string;
    description: string;
    image_url: string;
}

interface CitiesProps {
    id: number;
    name: string;
    description: string;
    image_url: string;
    continent_id: number;
}

export default function Continent(){

    const router = useRouter()
    const { id } = router.query
    const [ selectedContinent, setSelectedContinent ] = useState<ContinentsProps>({
        id: 0,
        name: '',
        description: '',
        image_url: '',
    })
    const [ cities, setCities ] = useState<CitiesProps[]>([])

    useEffect(() => {
        const { id } = router.query
        async function loadCompany() {
            await axios.get(`/continents/${id}`)
                .then((response) => {
                    const data = response.data
                    setSelectedContinent(data)
                })
                .catch( (error) => {
                    // toast.warning('Buscando continente ')
                })
        }
        
        async function loadNumbersOfCompany() {
            await axios.get(`/cities?continent_id=${id}`)
                .then((response) => {
                    const data = response.data
                    setCities(data)
                })
                .catch((error) => {
                    toast.error('Cidades não encontradas!')
                })
        }

        loadCompany();
        loadNumbersOfCompany();
        
    }, [id != undefined && id]);


    return (
        <CommunsParts title={selectedContinent.name ? selectedContinent.name : "Este continente não existe"} subtitle={selectedContinent.name ? 'Conheça as melhores cidades para se viver neste continente.' : ''}>
            {
                cities.length > 0 && (
                    <Box mb="12" height="40vh" borderRadius={30} position="relative" backgroundPosition={"center"} backgroundImage={selectedContinent.image_url} >
                        <Flex alignItems="center" justifyContent="center" height="100%" flexDirection={"column"}>
                            <Box sx={{ filter: 'blur(8px)' }} bgColor="gray.900" position={"absolute"} width="100%" height="100%" borderRadius={30} zIndex={8} opacity={.8}/>
                            <Heading color="primary.normal" fontSize="30" zIndex={9}>
                                {selectedContinent.name && selectedContinent.name}
                            </Heading>
                            <Text color="gray.50" zIndex={9}>
                                {selectedContinent.description}
                            </Text>
                        </Flex>
                    </Box>
                )
            }

            <SimpleGrid width="100%" columns={{base: 1, md: 2, lg: 3}} spacing={8}>
            {
                cities.length ? cities.map((city) => {
                    return (
                        <CardBox key={city.id} router={`/city/${city.id}`}>
                            <Icon color="primary.normal" as={RiEyeLine} fontSize="50"/>
                            <Heading fontSize="25">
                                {city.name.toString()}
                            </Heading>  
                        </CardBox>
                    )
                }) : (<Text color="primary.normal" textAlign={{base: "center", md: "left"}} fontSize="md">Nenhuma cidade encontrada para este continente.</Text>)
            }
            </SimpleGrid>
        </CommunsParts>
    )
} 