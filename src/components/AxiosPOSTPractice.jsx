import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosPOSTPractice() {
	let userData = { fname: "", lname: "" };
	const [data, setData] = useState(userData);

	// SEND DATA TO SERVER
	function sendData() {
		axios
			.post("https://jsonplaceholder.typicode.com/users", data)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}

	// UPDATE DATA TO SERVER
	function updateData() {
		axios
			.put("https://jsonplaceholder.typicode.com/users/1", data)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}

	// DELETE DATA TO SERVER
	function deleteData() {
		axios
			.delete("https://jsonplaceholder.typicode.com/users/1")
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}

	// UPDATE STATE
	function handleEvent(e) {
		e.preventDefault();
		setData({ ...data, [e.target.name]: e.target.value });
	}
	console.log(data);

	return (cls
		
		<div>
			<label htmlFor="fname">First Name : </label>
			<input
				type="text"
				placeholder="First Name"
				name="fname"
				onInput={(e) => {
					handleEvent(e);
					console.log(e.target.value);
				}}
			/>
			<br />
			<br />

			<label htmlFor="lname">Last Name : </label>
			<input
				type="text"
				placeholder="Last Name"
				name="lname"
				onInput={(e) => handleEvent(e)}
			/>
			<br />
			<br />
			<button onClick={(e) => sendData(e)}>Submit</button>
			<button onClick={(e) => updateData(e)}>Update</button>
			<button onClick={(e) => deleteData(e)}>Delete</button>
		</div>
	);
}

export default AxiosPOSTPractice;
