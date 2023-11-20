import { useGlobalContext } from "../Context/Context";
import { SlHandbag } from "react-icons/sl";

function Navbar() {
    const {amount}=useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h1>use reducer</h1>

        <div className="nav-container">
          <div className="nav-icon">
            <p><SlHandbag /></p>
          </div>

          <div className="nav-quantity">
            <p className="total-quantity"><span>{amount}</span></p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
