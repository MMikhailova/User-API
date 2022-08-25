import { ALL_ID, USER_ID } from "../data/constants.js";
import { getAllListener, getUserListener } from "./listeners/listeners.js";

getAllListener(document.getElementById(ALL_ID));
getUserListener(document.getElementById(USER_ID));