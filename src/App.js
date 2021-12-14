import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Components
import NavBar from "./components/NavBar";
import UserName from "./components/UserName";
import CharacterCard from "./components/CharacterCard";

function App() {
	const [users, setUsers] = useState([]);
	const [characters, setCharacters] = useState([])
	
	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("users.json");
			console.table(response);
			const data = await response.json();
			console.log(data);
			setUsers(data);
		};

		getUsers();
	}, []);

	const usersUI = users.map(({ id, firstName, lastName }) => (
		<UserName key={id} firstName={firstName} lastName={lastName} />
	));
	 useEffect(()=>{
		 const getCharacters = async () =>{
			const response = await fetch ("https://rickandmortyapi.com/api/character");
			
			const preData = await response.json();
			const data = preData.results;
			setCharacters(data)	
			
		 };
		 getCharacters();
	 },[]);
	const CharactersUI = characters.map(({id, name, status, species, image}) => (
		<CharacterCard key={id} name={name} status={status} species={species} image={image}/>
	))
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<NavBar />
				{usersUI}
				{CharactersUI}
			</header>
			
		</div>
	);
}

export default App;