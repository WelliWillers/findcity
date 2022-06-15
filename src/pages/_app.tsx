import axios from 'axios';
import { AppProps } from 'next/app'
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { SearchContextProvider } from '../contexts/SearchContext';
import '../styles/global.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {

  // axios.defaults.baseURL = 'http://seu IPV4 aqui:3000';
  axios.defaults.baseURL = 'http://localhost:3000';

  return (
    <SearchContextProvider>
      <ChakraProvider theme={theme} >
          <ToastContainer 
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover 
          />
        <Component {...pageProps} />
      </ChakraProvider>
    </SearchContextProvider>
  )
}

export default MyApp