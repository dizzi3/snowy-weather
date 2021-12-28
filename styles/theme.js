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
            bg: '#1a202b',
        }
    }),
}

const theme = extendTheme({
    breakpoints, config, styles
})

export default theme