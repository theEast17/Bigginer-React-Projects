import {FaBars} from 'react-icons/fa'
import { useContext } from 'react'
import { AppContext } from './Context'

function Home() {
    const {openSideBar,openModal}=useContext(AppContext)
  return (
    <>
     <main className='home-container'>
        <button className="sidebar-toggle" onClick={openSideBar}>
            <FaBars/>
        </button>

        <button className='btn' onClick={openModal}>
            Show Modal
        </button>
     </main>
    </>
  )
}

export default Home
