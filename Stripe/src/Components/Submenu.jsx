import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./Context";
function Submenu() {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [column,setColumn]=useState('col-2')
  useEffect(() => {
    setColumn('col-2')
    const subMenu = container.current;
    const { center, bottom } = location;
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;

    if(links.length===3){
        setColumn('col-3')
    }
    if(links.length>3){
        setColumn('col-4')
    }
  }, [location,links]);
  return (
    <>
      <aside
        className={`${isSubMenuOpen ? "subMenu showSubmenu" : "subMenu"}`}
        ref={container}
      >
        <h4>{page}</h4>
        <div className={`submenu-center ${column}`}>
          {links.map((link,index) => {
            const { label, icon, url } = link;
            return (
              <li key={index}>
                <span>{icon}</span>
                <a href={url}>{label}</a>
              </li>
            );
          })}
        </div>
      </aside>
    </>
  );
}

export default Submenu;
