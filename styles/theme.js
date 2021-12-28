import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: props => ({
        html: {
            'scrollBehavior': 'smooth'
        },

        body: {
            bg: mode('#f4f4f4', '#1a202b')(props),
        }
    }),
}

const theme = extendTheme({
    config, styles
})

export default theme