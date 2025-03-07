import React from 'react'
import { NavbarMenu } from '../../mockData/data'
import { MdComputer, MdMenu } from 'react-icons/md'
import { motion} from 'framer-motion'

const Navbar = () => {
  return (
    <nav>
      <div className='container flex justify-between items-center py-6'>
        {/* Logo Section */}
        <div className='text-1xl flex items-center gap-2 font-blod'>
          <MdComputer className='text-2xl text-secondary' />
          <p>An MA Academy</p>
        </div>
        {/* Menu  Section */}
        <div className='hidden lg:block'>
          <ul>
            {
              NavbarMenu.map((item) => {
                return (
                  <li key={item.id} >
                    <a href={item.link}
                    className='inline-block text-black
                    >{item.title}</a>
                  </li>
                );
              })
            }
          </ul>

        </div>
        {/* CTA Button Section */}
      
      </div>
    </nav>
  )
}

export default Navbar