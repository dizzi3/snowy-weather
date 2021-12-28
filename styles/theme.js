import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '0px',
    md: '1250px',
})

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
    breakpoints, config, styles
})

export default theme