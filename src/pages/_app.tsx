import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout/Layout'
import '../theme/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
  
  
 
  <Component {...pageProps} />
  )
}
