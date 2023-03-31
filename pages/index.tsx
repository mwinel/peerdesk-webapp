import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Welcome to PeerDesk! We are dedicated to creating a safe and supportive environment where early career UX professionals can enhance their skills and achieve their career goals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className={styles.main}>
        <Navbar/> {/*for testing*/}
        <Button/>
      </main>
    </>
  )
}
