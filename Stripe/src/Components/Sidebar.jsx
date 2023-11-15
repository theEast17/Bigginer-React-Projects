import { useGlobalContext } from "./Context";
import sublinks from "./Data";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  const { isSideBarOpen, sidebarClose } = useGlobalContext();
  return (
    <>
      <aside
        className={`${
          isSideBarOpen ? "sidebar-wrapper showSidebar" : "sidebar-wrapper"
        }`} 
      >
        <div className="sidebar">
            <button className="close-btn" onClick={sidebarClose}>
                <FaTimes/>
            </button>

            <div className="sidebar-links">
                {sublinks.map((link,index)=>{
                    const {page,links}=link
                    return(
                        <article key={index}>
                            <h4>{page}</h4>
                            <ul className="sidebar-subLinks">
                            {links.map((subLink,index)=>{
                                const {label,icon,url}=subLink
                                return(
                                    <li key={index}>
                                        <span>{icon}</span>
                                        <a href={url}>{label}</a>
                                    </li>
                                )
                            })}
                            </ul>
                        </article>
                    )
                })}
            </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
