import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

  const [tarea, nueva] = useState([]);

  function putApi() {
	var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(tarea);

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://assets.breatheco.de/apis/fake/todos/user/lulukkks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  }
  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/lulukkks")
      .then((response) => response.json())
      .then((data) => nueva(data));
  }, []);
  
 useEffect(()=>{
	putApi();
  }, [tarea]);

  return (

    <div className="text-center">
      <h1>Lista de Tareas </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          nueva([...tarea, { label: event.target[0].value, done: false }]);
          putApi();
        }}
      >
        <input type="text" placeholder="¿cual es tu tarea?"></input>
        <button> Ingresar </button>
      </form>
      {tarea.map((value, index) => {
        return (
          <li key={index}>
            {value.label}
            <button onClick={() => nueva(tarea.filter((value, i) => index != i))
            }
            > X </button>
          </li>
        );
      })}
      <p>Cantidad de tareas {tarea.length}</p>
    </div>
  );

}
export default Home;

