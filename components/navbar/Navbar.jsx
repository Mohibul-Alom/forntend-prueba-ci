import { Flex, Spacer, Box, Link, Heading, Select } from "@chakra-ui/react";

import en from '../../utils/locale/navbar/en';
import es from '../../utils/locale/navbar/es';
import fr from '../../utils/locale/navbar/fr';

import { useRouter } from 'next/router';

export default function Navbar() {

    const router = useRouter();
    const { locale } = router;
    let translate = en;

    switch (locale) {
        case "fr":
            translate = fr;
            break;
        case "es":
            translate = es;
            break;
        default:
            translate = en;
            break;
    }
    console.log(translate);

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push('/','/',{locale});
    }

    return (
        <Flex mt="1">
            <Box p="2">
                <Heading size="md">{translate.webTitle}</Heading>
            </Box>
            <Spacer />
            <Box mt="2" mr="2">
                <Link>{translate.takeTest}</Link>
            </Box>
            <Box mt="2" mr="2">
                <Link>{translate.recoverResult}</Link>
            </Box>
            <Box mr="2">
                <Select placeholder={translate.laguage} onChange={changeLanguage}>
                    <option color="black" value="en">English(US)</option>
                    <option color="black" value="es">Español(ES)</option>
                    <option color="black" value="fr">Français(FR)</option>
                </Select>
            </Box>
        </Flex>
    )
}


