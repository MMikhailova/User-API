
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
function showUsers(data) {
const result = document.getElementById('result');
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

export const getUser = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => {
			if (res.status === 200) {
				return res.json();
			}
		})
		.then((data) => showUsers(data))
		.catch((err) => console.error(err));
};