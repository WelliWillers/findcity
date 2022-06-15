import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardBox } from "../components/Layout/CardBox";
import CommunsParts from "../components/Layout/CommunsParts";
import { useSearch } from "../contexts/SearchContext";

import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";

interface ContinentProps {
  id: number;
  name: string;
  vatin: string;
}

export default function Home() {

  const [ continents, setContinents ] = useState<ContinentProps[]>([])
  const { search } = useSearch()

  async function loadCompanies() {
    await axios.get('/continents')
      .then((response) => {
        if(search.length >= 3){
          const responseFiltered = response.data.filter((continent: ContinentProps) => {
            return continent.name.toLowerCase().includes(search.toLowerCase());
          })
          setContinents(responseFiltered)
        } else {
          setContinents(response.data)
        }
      })
      .catch(function (error) {
        toast.error('Continente não encontrado!');
      })
  }

  useEffect(() => {
    loadCompanies();
  }, [search]);

  return (
    <CommunsParts title="Continentes" subtitle="Selecione um continente para ver mais sobre">
      <Box width="100%" minHeight="40vh" mb="12">
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
              modules={[EffectFade, Autoplay, Navigation, Pagination]}
          >
              <SwiperSlide>
                <Box borderRadius={30} minHeight="60vh" height="100%" backgroundSize="cover" backgroundImage={"/images/banner_01.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Box borderRadius={30} minHeight="60vh" height="100%" backgroundSize="cover" backgroundImage={"/images/banner_02.jpg"} />
              </SwiperSlide>
              <SwiperSlide>
                <Box borderRadius={30} minHeight="60vh" height="100%" backgroundSize="cover" backgroundImage={"/images/banner_03.jpg"} />
              </SwiperSlide>
          </Swiper>
      </Box>
      <SimpleGrid width="100%" columns={{base: 1, md: 2, lg: 3}} spacing={8}>
        {
          continents.length ?
          continents.map((continent) => {
            return (
              <CardBox height="190px" key={continent.id} router={`/continent/${continent.id}`}>
                {/* <Heading color="primary.normal">Image</Heading> */}
                <Heading fontSize="25">
                  {continent.name.toString()}
                </Heading>  
              </CardBox>
            )
          }) : (
            <Text color="primary.normal" textAlign={{base: "center", md: "left"}} fontSize="md">Nenhum continente encontrado</Text>
          )
        }
      </SimpleGrid>
    </CommunsParts>
  )
}
