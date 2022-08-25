import { OUTPUT_ID } from "../../data/constants.js";

//Function creates a 'div' with user information
export function showUsers(data) {
	//clean previous result
	const result = document.getElementById(OUTPUT_ID);
	while (result.firstChild) {
		result.firstChild.remove();
    }
    //iterate users and create new DOM elements to display them
	data.forEach((user) => {
		const container = document.createElement('div');
		container.classList.add('user');
		const hEl = document.createElement('h2');
		hEl.innerHTML = `${user.id}: ${user.name}`;
		const pEl = document.createElement('p');
		pEl.innerHTML = `Username:${user.username}<br>Email: ${user.email}<br>Phone: ${user.phone}
        <br>Company: ${user.company.name}<br>Website: <a href="url">${user.website}</a><br>City: ${user.address.city}<br>Zipcode: ${user.address.zipcode}`;
		container.append(hEl, pEl);
		result.append(container);
	});
}
