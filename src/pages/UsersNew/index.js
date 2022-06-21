import React, { useEffect } from "react";
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
	const [reverseText, setReverseText] = useState("")
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
	useEffect(()=>{
		const arr = firstName.split("")
		console.log(arr)
		const reverseArr = arr.reverse()
		const joinArr = reverseArr.join("")	
		setReverseText(joinArr)
	}, [firstName])


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



			<div>
				<div>
					{firstName}
				</div>
				<div>
					{reverseText}
				</div>
				<div>
					{ocupation}
				</div>
			</div>
		</div>
	);
}