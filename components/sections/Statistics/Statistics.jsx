import { Text, Container, useColorModeValue, Box } from "@chakra-ui/react"
import BarChart from "../../charts/BarChart"
import HorizontalBarChart from "../../charts/HorizontalBarChart"
import PieChart from "../../charts/PieChart"



import en from "../../../utils/locale/sections/Statistics/en"
import es from "../../../utils/locale/sections/Statistics/es"
import fr from "../../../utils/locale/sections/Statistics/fr"

import { useRouter } from 'next/router';


export default function Statistics() {

    const router = useRouter();
    const { locale } = router;
    let translate = en;

    switch (locale) {
        case "fr":
            translate = en;
            break;
        case "es":
            translate = es;
            break;
        default:
            translate = en;
            break;
    }

    const barGraph = {
        dataLabels: ['< 18 años', '18-39 años', '40-59 años', '59-79 años', '80 años >'],
        barData: [92, 98, 97, 93, 76],
    }

    const barGraph2 = {
        dataLabels: ['Diploma de escula secundaria', '', '', '3 años de educacion superior', '', '', 'Más de 5 años de educación superior'],
        barData: [90, 95, 97, 99, 100, 101, 99],
    }

    return (
        <div>
            <div>
                <Text
                    fontSize="2xl"
                    color={useColorModeValue("gray.700", "white")}
                    fontWeight="700"
                >
                    {translate.title}
                </Text>
                <Container>
                    {translate.firstParagraph}
                </Container>
                <Container mt="2">
                    {translate.secondParagraph}
                </Container>
            </div>

            <div>
                <Box mt="6">
                    <PieChart t={translate.chartGeneralandInter}/>
                </Box>
                <Box  mt="6">
                    <BarChart t={translate.chartAgeGroup} barData={barGraph.barData} />
                </Box>
                <Box mt="6">
                <BarChart t={translate.chartStudyLevel} barData={barGraph2.barData} />
                    {/* <BarChart dataLabels={barGraph2.dataLabels} barData={barGraph2.barData} /> */}
                </Box>
                <Box mt="6">
                    <HorizontalBarChart t={translate.chartStudyField} />
                </Box>
            </div>
        </div>
    )
}
