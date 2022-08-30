import { showUser, showUsers } from "../components/add-div.js";
import { validateId } from "../utils/validate.js";

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
export const getUser = (id) => {
	var userId = validateId(id);
	if (userId) {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				}
        else
        {
            return false;
        }
			})
			.catch((err) => console.error(err))
			.then((user) => showUser(user))		
	};

}
