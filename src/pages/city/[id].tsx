import { Button, Heading, Icon, Text, Link } from "@chakra-ui/react";
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine, RiErrorWarningFill, RiPhoneLine, RiSmartphoneLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { CardBox } from "../../components/Layout/CardBox";
import CommunsParts from "../../components/Layout/CommunsParts"

interface NumbersProps {
    id: string;
    type: string;
    company_id: number;
}

export default function Number(){

    const router = useRouter()
    const [ selectedNumber, setSelectedNumber ] = useState<NumbersProps>({
        id: '',
        type: '',
        company_id: 0
    })

    const { numberId } = router.query

    async function loadNumbersOfCompany() {
        await axios.get(`/phone_numbers?id=${numberId}`)
            .then((response) => {
                const data = response.data
                setSelectedNumber(data[0])
            })
            .catch(function (error) {
                toast.warning('Numbers not found!');
            })
    }

    useEffect(() => {
        loadNumbersOfCompany();
    }, [numberId]);

    if(selectedNumber){
        return (
            <CommunsParts title={`Number ${selectedNumber.id}`} subtitle={`Type of number contact: ${selectedNumber.type && selectedNumber.type.toLocaleUpperCase()}`}>
                <CardBox notLink key={selectedNumber.id} height="280px" >
                    <Icon color="primary.normal" as={selectedNumber.type == "mobile" ? RiSmartphoneLine : RiPhoneLine} fontSize="50"/>
                    <Heading fontSize="25">
                        {selectedNumber.id}
                    </Heading>  
                    <Text fontSize="md" color="gray.400">Type of number:  {selectedNumber.type.toLocaleUpperCase()}</Text>
                    <Link as="a" href={`tel:${selectedNumber.id}`}>
                        <Button as="div" variant="outline" borderColor="primary.normal" color="primary.normal"  size="lg">Call to this number <Icon ml="4" fontSize={20} as={RiArrowRightLine} /></Button>
                    </Link>
                </CardBox>
            </CommunsParts>
        )
    } else {
        return (
            <CommunsParts title={`Number not found`} subtitle={``}>
                <CardBox notLink height="280px" >
                    <Icon color="primary.normal" as={RiErrorWarningFill} fontSize="50"/>
                    <Heading fontSize="25">
                        This number not exists!
                    </Heading>  
                    <Text fontSize="md" color="gray.400">Go back to home</Text>
                    <Link as="a" href="/">
                        <Button as="div" variant="outline" borderColor="primary.normal" color="primary.normal"  size="lg"> <Icon mr="4" fontSize={20} as={RiArrowLeftLine} />Home</Button>
                    </Link>
                </CardBox>
            </CommunsParts>
        )
    }
}