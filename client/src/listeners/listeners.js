import { getUsers } from "../handlers/handler.js";


export const getAllListener = (element) => {
	element.addEventListener('click', getUsers);
};
