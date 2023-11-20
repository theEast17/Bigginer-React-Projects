import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";
import { useGlobalContext } from "./Context/Context";


function App() {
  const {loading}=useGlobalContext();

  if(loading){
    return(
      <div className="loading">
        <h2 style={{textAlign:'center',marginTop:'2rem',letterSpacing:'1px'}}>Loading...</h2>
      </div>
    )
  }
  return (
    <>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </>
  );
}

export default App;
