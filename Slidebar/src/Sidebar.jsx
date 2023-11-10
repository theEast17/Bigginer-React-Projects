import { links,social } from "./Data"
import {FaTimes} from 'react-icons/fa'
import { AppContext } from './Context'
import { useContext } from 'react'
function Sidebar() {
    const {isSidebarOpen,closeSideBar}=useContext(AppContext)
  return (
    <>
        <aside className={`${isSidebarOpen?'sidebar-container show-sidebar':'sidebar-container'}`}>
            <div className="sidebar">
                <h1>The<span>East</span></h1>
                <button className="sidebarBtn" onClick={closeSideBar}>
                    <FaTimes/>
                </button>
            </div>

            <div className="navigation">
                {links.map((nav)=>{
                    const {id,url,text,icon}=nav
                    return(
                       <ul key={id}>
                        <span>{icon}</span>
                        <li><a href={url}>{text}</a></li>
                       </ul>
                    )
                })}    
            </div>

            <div className="social">
                {social.map((socialIcon)=>{
                    const {id,url,icon}=socialIcon
                    return(
                        <ul key={id}>
                             <li><a href={url}>{icon}</a></li>
                        </ul>
                    )
                })}
            </div>

        </aside>
    </>
  )
}

export default Sidebar
