import { getUser, getUsers } from "../handlers/handler.js";

export const getAllListener = (element) => {
	element.addEventListener('click', getUsers);
};

export const getUserListener = (element) => {
	element.addEventListener('click', getUser);
};