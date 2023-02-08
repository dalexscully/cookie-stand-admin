import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head/>
      <Header/>
      <Main />
      <Footer />
    </>
  )
}
