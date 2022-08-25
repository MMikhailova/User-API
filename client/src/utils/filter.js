import { ID_NUMBER } from "../../data/constants.js";

/**
 * @param {array} array an array of users
 * @return an array consists of filtered users (one user in this case)
 */

export const findUser = (array) => {
	debugger;
	const newArray = [];
	const id = document.getElementById(ID_NUMBER).value;
	const user = array.find((user) => user.id == id);
	newArray.push(user);
	return newArray;
};
