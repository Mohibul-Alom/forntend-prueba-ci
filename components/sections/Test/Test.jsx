
import { Heading, Spacer } from "@chakra-ui/react"

import TestQuestion from '../../TestQuestion/TestQuestion'

export default function Test() {

    return (
        <div>
            <Heading as="h4" size="md">Choose the appropriate shape to replace the shape that is missing</Heading>
            <TestQuestion/>
        </div>
    )
}


