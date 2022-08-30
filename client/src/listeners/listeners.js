import { EVENT_ID } from "../../data/constants.js";
import { getUser, getUsers } from "../handlers/handler.js";

const userInput = document.getElementById('id')
export const getAllListener = (element) => {
	element.addEventListener(EVENT_ID, getUsers);
};

export const getUserListener = (element) => {
	element.addEventListener(EVENT_ID, function (e) {
		// e.preventDefault();
		const userId = userInput.value;
		getUser(userId)
	});
};