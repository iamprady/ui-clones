import Head from 'next/head'
import Link from 'next/link'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={`py-12`}>
      <Head>
        <title>UI Clones</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className={`mx-auto grid gap-y-8 max-w-screen-md`}>
          <div className={`font-body`}>
            <h1 className={`text-5xl font-bold my-6`}>UI Clones</h1>
            <p className={`text-3xl my-8`}>
              Recreating popular websites with react and tailwind.
            </p>
          </div>
          <Link href='/netflix'>
            <div
              className={`p-16 border-2 border-blue-300 hover:border-blue-500 cursor-pointer rounded-lg`}
            >
              <p className={`text-2xl text-blue-500`}>Netflix</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
