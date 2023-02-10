import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/CookieStandAdmin';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, login } = useAuth();
  return (
    <div className='bg-gray-300 h-screen w-screen'>
      <Head/>
      <Header/>
       {user ?
       <>
      <Main />
      <Footer />
      </>
      :
      <>
      <LoginForm onLogin={login} />
      </>
          }
          
    </div>
  )
}
