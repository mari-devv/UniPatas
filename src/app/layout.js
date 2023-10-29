import { Lato } from 'next/font/google'
import './globals.css'
import { DestaqueAdocao } from '@/components/DestaqueAdocao'
import { DestaqueOngs } from '@/components/DestaqueOngs'

const lato = Lato({
   subsets: ['latin'], 
  weight: ['300', '400', '700']
  })

export const metadata = {
  title: 'UniPatas',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <DestaqueAdocao />
        <DestaqueOngs />
        {children}
        </body>
    </html>
  )
}
