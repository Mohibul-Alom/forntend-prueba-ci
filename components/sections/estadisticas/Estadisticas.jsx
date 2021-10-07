import { Text,Container,useColorModeValue } from "@chakra-ui/react"
import LineCharts from "../../../charts/LineCharts"


export default function Estadisticas() {


    return (
        <div>
            <div>
                <Text
                 fontSize="2xl"
                 color={useColorModeValue("gray.700", "white")}
                 fontWeight="700"
                >
                    Nuestas estadisticas
                </Text>
                <Container>
                    Para cada resultado al pasar nuestra prueba de CI, se agrega información estadística, en la que todos los que son evaluados se clasifican de acuerdo con ciertos indicadores (población, grupo de edad, educación, campo de conocimiento).
                </Container>
                <Container mt="2">
                    Las estadísticas presentadas se forman a partir de la información recopilada a la fecha en todo el mundo. En el futuro continuaremos recibiendo estadísticas sobre cómo las personas deben pasar las pruebas y podremos actualizar los indicadores.
                </Container>
            </div>


            <div>
                <LineCharts/>
            </div>
        </div>
    )
}
