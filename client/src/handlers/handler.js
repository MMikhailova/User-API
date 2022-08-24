import { showUsers } from "../components/add-div.js";
import { findUser } from "../utils/filter.js";


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


