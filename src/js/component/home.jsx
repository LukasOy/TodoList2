import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, nueva] = useState([]);
		
	
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/lulukkks")
		.then((response) => response.json())
		.then((data) => nueva(data));
		}, []);

	return (
		
			<div className="text-center">

				<h1 >Lista de Tareas </h1>

				<form  onSubmit={(event)=>{
					event.preventDefault();
					nueva([...tarea,event.target[0].value]);
				}}>

				<input placeholder="¿cual es tu tarea?"></input>
				<button> Ingresar</button>
				</form >
				{tarea.map((value,index)=>{
					return <li key={index}>{value.label} 
					<button> X </button></li>
			
				})}
				<h6>Cantidad de tareas</h6>
			</div>
	);
};

export default Home;


/*useEffect(() => {
    fetch("http://assets.breatheco.de/apis/fake/todos/user/lulukkks")
    .then((response) => response.json())
    .then((data) => setLista(data.results));
    }, [];
    return (
        <di v>

        </div>
    )

*/