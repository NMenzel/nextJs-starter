import '@/styles/global.css'
// import '@/styles/global.less' for production
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
