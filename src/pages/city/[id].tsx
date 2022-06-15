import { Button, Heading, Icon, Text, Link, Box } from "@chakra-ui/react";
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { RiArrowLeftLine, RiErrorWarningFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { CardBox } from "../../components/Layout/CardBox";
import CommunsParts from "../../components/Layout/CommunsParts"

import { Navigation, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";

interface ImageProps {
    image: string;
}

interface citysProps {
    id: string;
    name: string;
    continent_id: number;
    description: string;
    images: ImageProps[];
}

export default function City(){

    const router = useRouter()
    const [ selectedCity, setSelectedCity ] = useState<citysProps>({
        id: '',
        name: '',
        description: '',
        images: [],
        continent_id: 0
    })

    const { id } = router.query

    async function loadNumbersOfCompany() {
        await axios.get(`/cities?id=${id}`)
            .then((response) => {
                const data = response.data
                setSelectedCity(data[0])
            })
            .catch(function (error) {
                toast.warning('Cidade não encontrada!');
            })
    }

    useEffect(() => {
        loadNumbersOfCompany();
    }, [id]);

    if(selectedCity){
        return (
            <CommunsParts title={`Cidade ${selectedCity.name}`} subtitle={`Veja algumas imagens desta cidade.`}>
                <CardBox notLink key={selectedCity.id} height="280px" >
                    <Heading fontSize="25">
                        {selectedCity.name}
                    </Heading>  
                    <Text fontSize="md" wordBreak="normal" color="gray.400" width="100%">{String(selectedCity.description)}</Text>
                </CardBox>
                <Box my="8">
                    <Heading>Algumas imagens</Heading>
                </Box>
                <Box width="100%" minHeight="40vh">
                    <Swiper
                        spaceBetween={5}
                        autoplay={{
                            delay: 2500,
                        }}
                        centeredSlides={true}
                        loop={true}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Autoplay, Navigation]}
                    >
                        {
                            selectedCity.images.map((image) => {
                                return (
                                    <SwiperSlide>
                                        <Box borderRadius={30} minHeight="60vh" w={"100%"} height="100%" backgroundSize="cover" backgroundImage={image.image} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Box>
            </CommunsParts>
        )
    } else {
        return (
            <CommunsParts title={`Cidade não encontrada`} subtitle={`Volte e tente outra`}>
                <CardBox notLink height="280px" >
                    <Icon color="primary.normal" as={RiErrorWarningFill} fontSize="50"/>
                    <Heading fontSize="25">
                        Esta cidade não existe!
                    </Heading>  
                    <Text fontSize="md" color="gray.400">Volte para o início</Text>
                    <Link as="a" href="/">
                        <Button as="div" variant="outline" borderColor="primary.normal" color="primary.normal"  size="lg"> <Icon mr="4" fontSize={20} as={RiArrowLeftLine} />Início</Button>
                    </Link>
                </CardBox>
            </CommunsParts>
        )
    }
}