import logo from '../assets/logo.svg'
import { Navbar } from './Navbar'



export const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8' >
      <div className='flex items-center h-6 m-auto place-content-between sm:h-14'>
        <img className='w-[124px] h-6 sm:w-[170px] sm:h-[33px]' src={logo} alt="Logo sunnyside" />
        <Navbar/>
      </div>
    </header>
  )
}


