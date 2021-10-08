import { Flex, Spacer } from "@chakra-ui/react";
import {Performance, Statistics, Purpose, Test, Result} from '../sections'
export default function HomeLayout() {
    return (
        <Flex direction="column">
            <Test/>
            <Purpose/>
            <Performance/>
            <Result/>
            <Statistics/>
        </Flex>
    )
}
