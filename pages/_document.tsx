import TheHeader from '@/components/TheHeader'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <TheHeader />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
