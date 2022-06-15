import { Button, Icon, Link } from "@chakra-ui/react";
import { RiArrowLeftLine } from "react-icons/ri";
import CommunsParts from "../components/Layout/CommunsParts";

export default function Nothing(){
    return (
        <CommunsParts title="Page not found" subtitle="This page not exists in this website, go back to the home page." >
            <Link as="a" href="/" textDecorationLine="none" textDecoration="none">
                <Button w="100%" as="div" variant="outline" borderColor="primary.normal" color="primary.normal"  size="lg"><Icon mr="4" fontSize={20} as={RiArrowLeftLine} /> Home page</Button>
            </Link>
        </CommunsParts>
    )
}