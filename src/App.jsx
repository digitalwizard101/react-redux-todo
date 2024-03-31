import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import TodoList from "./components/todoComponents/TodoList";
import AddTodo from "./components/todoComponents/AddTodo";

const App = () => {
  const [myTheme, setMyTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );



 
  const handleThemeChange = (theme) => {
    setMyTheme(() => {
      return theme;
    });
  };


  const [bgImage, setBgImage] = useState("bg-light")
  const [listImage, setListImage] = useState("light-image")





  return (

    <div className={`${bgImage} `}>

      <div className="container main-div" >

        <section className="upper-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Header themeChange={handleThemeChange} setBgImage={setBgImage} setListImage={setListImage} theme={myTheme} />

                <AddTodo />
              </div>
            </div>
          </div>
        </section>


        <section className={`lower-section ${listImage}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <TodoList />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>


  );
};

export default App;
