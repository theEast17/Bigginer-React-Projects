import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";
import sublinks from "./Data";

function Navbar() {
  const { sidebarOpen, subMenuOpen, subMenuClose } = useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent;    //products developer
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 2;
    subMenuOpen(page, { center, bottom });
  };
  function handleSubMenu(e) {
    if (!e.target.classList.contains("link-btn")) {
      subMenuClose();
    }
  }

  return (
    <>
      <nav onMouseOver={handleSubMenu}>
        <div className="nav-center">
          <div className="navToggleContainer">
            <img
              src="https://raw.githubusercontent.com/john-smilga/react-projects/a7607537821a58e3569a4e4d8eb029ae63fe405d/13-stripe-submenus/final/src/images/logo.svg"
              alt="logo"
            />

            <button className="toggle-btn" onClick={sidebarOpen}>
              <FaBars />
            </button>
          </div>

          <ul className="navigationTags">
            {sublinks.map((links, index) => {
              const { page } = links;
              return (
                <li key={index}>
                  <button className="link-btn" onMouseOver={displaySubMenu}>
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="signUp">
            <button>Sign in</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
