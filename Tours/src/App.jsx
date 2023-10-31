import { useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false); //when it should be shown or not
  const [tour, setTour] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const url = "https://course-api.com/react-tours-project";
      const response = await fetch(url);
      const tours = await response.json();   //whole object(api) is here
      setLoading(false);
      setTour(tours);      //now tour is = tours
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleDelete = (id) => {
    const updatedTours = tour.filter((tour) => tour.id !== id);    // means whenever you click you get that particular id of tour
    setTour(updatedTours);
  };

 /* let arr=[
    {
    id:1
    },
    {
      id:2
    },
    {
      id:3
    }
]

  const ans=arr.filter((arr)=>{
      return arr.id!==3     //[1,2]
  })

  console.log(ans);

  */

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if(tour.length===0){
    return(
      <main className="refreshContainer">
        <h1 style={{textAlign:'center',marginTop:'10px'}}>No tours left</h1>
        <button className="refresh" onClick={fetchTours}>Refresh The Tours</button>
      </main>
    )
  }

  return (
    <>
      <main>
        <Tour tour={tour} onDelete={handleDelete}/>
      </main>
    </>
  );
}

export default App;
