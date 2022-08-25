import { showUsers } from "../components/add-div.js";
import { findUser } from "../utils/filter.js";


//Async function that fetches all users and send data to component function
export const getUsers = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => {
			if (res.status === 200) {
				return res.json();
			}
		})
		.then((data) => showUsers(data))
		.catch((err) => console.error(err));
};

//Async function that fetches all users first to util function 'filter.js'
//Then selected user is passed as argument to component function in 'add-div.js'
export const getUser = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => {
			if (res.status === 200) {
				return res.json();
			}
		})
		.then((data) => findUser(data))
		.then((user) => showUsers(user))
		.catch((err) => console.error(err));
};


