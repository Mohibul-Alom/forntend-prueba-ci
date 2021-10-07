import { Flex, Spacer } from "@chakra-ui/react";
import {Efectividad, Estadisticas, Objetivo, Prueba, Resultado} from '../sections'
export default function HomeLayout() {
    return (
        <Flex direction="column">
            <Prueba/>
            <Objetivo/>
            <Efectividad/>
            <Resultado/>
            <Estadisticas/>
        </Flex>
    )
}
