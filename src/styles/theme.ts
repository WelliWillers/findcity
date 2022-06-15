import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        primary: {
            normal: "#0b7ca4",
            hover: "#076789"
        }
    },

    fonts: {
        heading: 'Inter',
        body: 'Inter'
    },

    // styles: {
    //     global: {
    //         body: {
    //             bg: 'gray.900',
    //             color: 'gray.50'
    //         }
    //     }
    // }
})