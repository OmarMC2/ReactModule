import React from "react";
import { useState } from "react/cjs/react.development";

// CSS
import "./UsersNew.css";

// Input
import Input from "../../components/Input";

import { createUser } from "../../services/users";

export default function UsersNew() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [ocupation, setOcupation] = useState("");
    const [gender, setGender] = useState("");

    const cleanForm = ()=>{
        setFirstName("");
        setLastName("");
        setBirthday("");
        setOcupation("");
        setGender("");
    }
    
    const handleSubmit = async(event)=>{
    event.preventDefault()
    
    
    try {
    
        const data = {firstName,
            lastName,
            gender,
            ocupation,
            birthday
        };
    
        await createUser(data)
    
        cleanForm()
    
    
    } catch (error) {
        console.error(error.message)
    }
    }


	return (
		<div className="container flex-col">
			<h1>Crea un usuario</h1>
			<form onSubmit={handleSubmit}>
				<Input
					id="firstName"
					label="First Name"
					value={firstName}
					setValue={setFirstName}
				/>
				<Input
					id="lastName"
					label="Last Name"
					value={lastName}
					setValue={setLastName}
				/>
                <Input
					id="Birthday"
					label="Birthday"
					value={birthday}
					setValue={setBirthday}
                    type="date"
				/>
                <Input
					id="Ocupation"
					label="Ocupation"
					value={ocupation}
					setValue={setOcupation}
				/>
                <Input
					id="gender"
					label="Gender"
					value={gender}
					setValue={setGender}
				/>
                <button type="submit">Crear</button>
			</form>
		</div>
	);
}