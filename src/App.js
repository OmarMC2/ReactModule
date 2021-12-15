import "./App.css";
import { useEffect, useState } from "react";

// Components
import Character from "./components/Character";

// Services
import { listCharacters } from "./services/characters";

function App() {
	const [characters, setCharacters] = useState([]);
	const [data, setData] = useState({});
	const [buttonState, setButtonState]
	useEffect(() => {
		const list = async () => {
			const { results, info } = await listCharacters();
			setCharacters(results);
			setData(info);
		};
		list();
	}, []);

	const handleClick = async (action) => {
		if (action === "next" && data.next != null) {
			const page = data.next.split("?")[1];
			const { results, info } = await listCharacters(page);
			setCharacters(results);
			setData(info);
		}
		else if(action === "prev" && data.prev != null){
		const page = data.prev.split("?")[1];
		const {results, info } = await listCharacters(page);
		setCharacters(results);
		setData(info);
		}
	};

	console.log(data);

	return (
		<div className="App">
			<div className="fixed-container">
				<button onClick={() => handleClick("prev")} className="btn">
					Prev
				</button>

				<button onClick={() => handleClick("next")} className="btn">
					Next
				</button>

			</div>
			{characters.map(({ id, image, name, species, status }) => (
				<Character
					key={id}
					image={image}
					name={name}
					species={species}
					status={status}
				/>
			))}
		</div>
	);
}

export default App;

