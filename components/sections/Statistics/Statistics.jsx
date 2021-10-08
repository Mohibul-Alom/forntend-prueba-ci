import { Text,Container,useColorModeValue,Box } from "@chakra-ui/react"
import BarChart from "../../charts/BarChart"
import HorizontalBarChart from "../../charts/HorizontalBarChart"
import PieChart from "../../charts/PieChart"

const barGraph = {
    dataLabels: ['< 18 años', '18-39 años', '40-59 años', '59-79 años', '80 años >'],
    barData: [92, 98, 97, 93, 76],
}

const barGraph2 = {
    dataLabels: ['Diploma de escula secundaria','','','3 años de educacion superior','','','Más de 5 años de educación superior'],
    barData: [90,95,97,99,100,101,99],
}


export default function Statistics() {

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
                <PieChart/>
                <div>
                    <BarChart dataLabels={barGraph.dataLabels} barData={barGraph.barData} />
                </div>
                <div>
                    <BarChart dataLabels={barGraph2.dataLabels} barData={barGraph2.barData} />
                </div>
                <div>
                    <HorizontalBarChart/>
                </div>
                <div>
                    Hola
                </div>
            </div>
        </div>
    )
}
