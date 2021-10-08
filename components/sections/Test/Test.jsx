import Image from 'next/image'
import { Heading, Spacer } from "@chakra-ui/react"
import { Flex, Box, Button,chakra,Text   } from "@chakra-ui/react";

import IQ__pregunta_01 from '../../../public/assets/SVG/IQ__pregunta_01.svg';
import IQ__pregunta_01_respuesta_01 from '../../../public/assets/SVG/IQ__pregunta_01_respuesta_01.svg';
import IQ__pregunta_01_respuesta_02 from '../../../public/assets/SVG/IQ__pregunta_01_respuesta_02.svg';
import IQ__pregunta_01_respuesta_03 from '../../../public/assets/SVG/IQ__pregunta_01_respuesta_03.svg';
import IQ__pregunta_01_respuesta_04 from '../../../public/assets/SVG/IQ__pregunta_01_respuesta_04.svg';

export default function Test() {

    const answers = (e)=> {
        console.log("he sido clickado-->",e.target.id)
    }

    return (
        <div>
            <Heading as="h4" size="md">Choose the appropriate shape to replace the shape that is missing</Heading>

            <Flex mt="6" justify="center" direction="column">

                <Image
                    alt="Question 1"
                    src={IQ__pregunta_01}
                    height={300}
                    width={300}
                />

                <Box mt="6">
                    <Flex justify="space-between">

                        <Box>
                            <Flex align="center">

                            <Text mr="2">a</Text>
                            <Image
                                id='IQ__pregunta_01_respuesta_01'
                                onClick={e=>answers(e)}
                                alt="Question 1"
                                src={IQ__pregunta_01_respuesta_01}
                                height={100}
                                width={100}
                            />
                            </Flex>
                        </Box>


                        <Box>
                            <Flex align="center">

                            <Text mr="2">b</Text>
                            <Image
                                id='IQ__pregunta_01_respuesta_02'
                                alt="Question 1"
                                onClick={e=>answers(e)}
                                src={IQ__pregunta_01_respuesta_02}
                                height={100}
                                width={100}
                            />
                            </Flex>
                        </Box>


                        <Box>
                            <Flex align="center">

                            <Text mr="2">c</Text>
                            <Image
                                id='IQ__pregunta_01_respuesta_03'
                                alt="Question 1"
                                onClick={e=>answers(e)}
                                src={IQ__pregunta_01_respuesta_03}
                                height={100}
                                width={100}
                            />
                            </Flex>
                        </Box>

                        <Box>
                            <Flex align="center">

                            <Text mr="2">d</Text>
                            <Image
                                id='IQ__pregunta_01_respuesta_04'
                                alt="Question 1"
                                onClick={e=>answers(e)}
                                src={IQ__pregunta_01_respuesta_04}
                                height={100}
                                width={100}
                            />
                            </Flex>
                        </Box>


                    </Flex>
                </Box>

            </Flex>


        </div>
    )
}


