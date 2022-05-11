import React, { useState, useEffect } from 'react';
import "./style.css";
// get localstorage data
const gateLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
}

export const Todo = () => {
  const [inputdata, SetInputData] = useState("");
  const [items, SetItems] = useState(gateLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  // const arrayItems = items.split(" ")

  // add the items
  const addItem = () => {
    if (!inputdata) {
      alert("Please fill the data");
    } else if (inputdata && toggleButton) {
      SetItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );
      SetInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    }
    else {
      // ... is a sprade operator which stores previous data
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,

      }
      SetItems([...items, myNewInputData]);
      SetInputData("");
    }
  };
  // edit items
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    SetInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  }
  // delete item
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    SetItems(updatedItems);
  };
  // remove all elements
  const removeAll = () => {
    SetItems([]);
  };
  // adding local storage using useEffect hook
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));

    // return () => {
    //   second
    // }
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/task_list.png" alt="todo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input type="text"
              placeholder='Add Items : ✍'
              className='form-control'
              value={inputdata}
              onChange={(event) => SetInputData(event.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit" onClick={addItem}></i>) : (
              <i className="fa fa-plus" onClick={addItem}></i>
            )}


          </div>
          {/* show items */}
          <div className="showItems">
            {/* {console.log("m", typeof (items))} */}
            {items.map((curElem, index) => {
              return (
                <>
                  <div className="eachItem" key={curElem.id}>
                    <h3>{curElem.name}</h3>
                    <div className="todo-btn">
                      <i className="far fa-edit add-btn" onClick={() => editItem(curElem.id)}></i>
                      <i className="fas fa-trash-alt add-btn" onClick={() =>
                        deleteItem(curElem.id)
                      }></i>
                    </div>
                  </div>
                </>
              )
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span>Check List</span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
