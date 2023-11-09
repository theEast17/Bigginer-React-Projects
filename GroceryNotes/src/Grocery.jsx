import { useState, useEffect } from "react";

function Grocery() {
  // State variables
  const [listItem, setListItem] = useState([]);
  const [alert, setAlert] = useState(false);
  const [variable, setVariable] = useState("Item Added Successfully");
  const [inputValue, setInputValue] = useState("");
  const [bgColor, setBgColor] = useState("rgb(215, 250, 162)");
  const [updateIndex, setUpdateIndex] = useState(null);
  const [history, setHistory] = useState([]);
  const [undo, setUndo] = useState(false);

  // Function to format alert messages
  const alertFunction = (crud) => {
    return crud;
  };

  // Function to display alerts with custom messages and background colors
  const showAlert = (message, bgColor = "rgb(215, 250, 162)") => {
    setVariable(message);
    setBgColor(bgColor);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  // Function to Undo alert
  const undoAlert = () => {
    setUndo(true);

    let undoTimer = setTimeout(() => {
      setUndo(false);
    }, 2000);
    return () => clearTimeout(undoTimer);
  };

  // Function to save the list to local storage
  const saveListToLocalStorage = (items) => {
    localStorage.setItem("groceryList", JSON.stringify(items));
  };

  // Function to load the list from local storage
  const loadListFromLocalStorage = () => {
    const storedList = localStorage.getItem("groceryList");
    if (storedList) {
      setListItem(JSON.parse(storedList));
    }
  };

  // Load the list from local storage when the component mounts
  useEffect(() => {
    loadListFromLocalStorage();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = [...listItem];

    if(inputValue){
      if (updateIndex !== null) {
        updatedList[updateIndex - 1] = inputValue;
        showAlert("Item Updated Successfully");
      } else {
        updatedList.push(inputValue);
        showAlert("Item Added Successfully");
      }
  
      // Update the list, reset form, and clear the updateIndex
      setListItem(updatedList);
      setUpdateIndex(null);
      setInputValue("");
  
      // Save the updated list to local storage
      saveListToLocalStorage(updatedList);
    }else{
      showAlert("Please Fill the Input First","rgb(240, 166, 166)")
    }

    
  };

  // Function to update an item
  const updateItem = (item, index) => {
    setInputValue(item);
    setUpdateIndex(index + 1);
  };

  // Function to delete an item
  const deleteItem = (index) => {
    const updatedList = [...listItem];
    const deletedItem = updatedList.splice(index, 1);
    setListItem(updatedList);

    setHistory(listItem, deletedItem);

    showAlert("Item Deleted Successfully", "rgb(240, 166, 166)");
    setUpdateIndex(null);
    undoAlert();
    // Save the updated list to local storage
    saveListToLocalStorage(updatedList);
  };

  // Function to clear all items
  const clearItems = () => {
    setHistory(listItem); // store whole list into the history variable so we can use whenever we want to undo the items
    setListItem([]);
    showAlert("All items Cleared Now", "rgb(240, 166, 166)");
    setUpdateIndex(null);
    undoAlert();
    // Save the cleared list to local storage
    saveListToLocalStorage([]);
  };

  const undoClear = () => {
    if (history.length >= 0) {
      const prev = history.slice();
      setListItem([...prev]);

      const del = history.splice(history.length);
      setHistory(del);
      showAlert("Undo Successful", "rgb(215, 250, 162)");

      // Save the undone list to local storage
      saveListToLocalStorage(prev);
    }
  };

  return (
    <div className="grocery-container">
      {alert && (
        <p
          style={{
            width: "530px",
            margin: "0 auto",
            marginBottom: "10px",
            textAlign: "center",
            backgroundColor: bgColor,
          }}
        >
          {alertFunction(variable)}
        </p>
      )}
      <header>
        <h3>Grocery Bud</h3>    
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            placeholder="e.g. eggs"
            onChange={(e) => setInputValue(e.target.value)}
            name="input"
            className="inputField"
          />

          <button type="submit" className="btn">
            {updateIndex !== null ? "Update" : "Submit"}
          </button>
        </form>

        <section className="allItems">
          {listItem.map((item, index) => {
            return (
              <article key={index}>
                <p className="itemName">{item}</p>
                <div className="buttons">
                  <button
                    className="btns"
                    onClick={() => updateItem(item, index)}
                  >
                    Update
                  </button>
                  <button className="btns" onClick={() => deleteItem(index)}>
                    Delete
                  </button>
                </div>
              </article>
            );
          })}

          {listItem.length > 1 && (
            <>
              <button className="clrBtn" onClick={clearItems}>
                Clear Items
              </button>
            </>
          )}
          {undo && (
            <button className="clrBtn" onClick={undoClear}>
              Do you Want To{" "}
              <span
                style={{
                  borderBottom: "1px solid red",
                  paddingBottom: "0px",
                  display: "inline-block",
                }}
              >
                undo
              </span>
              ?
            </button>
          )}
        </section>
      </main>
    </div>
  );
}

export default Grocery;
