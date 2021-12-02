// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Link from 'next/link'
import { ImCart, ImAccessibility } from 'react-icons/im'
import SidebarLink from '../components/SidebarLink'

function Main({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-screen h-16 bg-gray-100 dark:bg-gray-800 shadow-lg flex justify-between px-2 items-center transition-colors">
        <div className="flex items-center">
          <Link href="/">
            <picture className="font-bold block cursor-pointer">
              <img className="w-16" src={"logo_cymit_2.png"} alt="logo" />
            </picture>
          </Link>
        </div>
        <Link href="/login">Login</Link>
      </header>
      <main className="flex w-screen h-full">
        <div className="w-36 bg-gray-300">
          <SidebarLink text="Productos" href="/products" icon={<ImCart />} />
          <SidebarLink text="Login" href="/login" icon={<ImAccessibility />} />
          {/* <div>Link 2</div>
          <div>Link 3</div> */}
        </div>
        <div className="w-screen p-2">
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  )
}

export default Main
