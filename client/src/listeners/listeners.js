import { EVENT_ID } from "../../data/constants.js";
import { getUser, getUsers } from "../handlers/handler.js";

export const getAllListener = (element) => {
	element.addEventListener(EVENT_ID, getUsers);
};

export const getUserListener = (element) => {
	element.addEventListener(EVENT_ID, getUser);
};