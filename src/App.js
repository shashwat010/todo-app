import React,{useState} from "react";
import Todo from "./Todo";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const listOfItems= ()=>{
    setItems((item)=>{
      return [...item,inputList];
    });
    setInputList("");
  };

  const myStyle = {
    backgroundColor: "#319B9D",
    height: '100vh',
  };

  const deleteItem=(id)=>{    
    setItems((item)=>{
      return item.filter((elem,index)=>{
        return index!==id;
      });
    });
}

  return (
    <>
      <div className="position-relative" style={myStyle}>
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-center"><span className="bg-warning"> ToDo List </span></h5>
              <div className="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="xyz.." value={inputList} onChange={itemEvent}/>
                <label for="floatingInput">Add an Item</label>
              </div>
              <button className="btn btn-success" onClick={listOfItems}><i className="fas fa-plus-circle"/></button>
              <ul className="list-group my-2">
                {
                  items.map((itemVal,index)=>{
                    return <Todo key={index} id={index} text={itemVal} onSelect={deleteItem}/>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
