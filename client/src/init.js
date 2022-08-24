const result = document.getElementById('result')
const getUsers = () => {
    debugger;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
		if ((res.status === 200)) {
			return res.json();
		}
        })
        .then(data => showUsers(data))
    .catch(err=>console.error(err))
};
getUsers()
function showUsers(data) {
    data.forEach(user => {
        const container = document.createElement('div');
        container.classList.add('user');
        const name = document.createElement('h2');
        name.innerHTML = user.name;
        const username = document.createElement('p');
        username.innerHTML = user.username;
        const email = document.createElement('p');
        username.innerHTML = user.email;
        const phone = document.createElement('p');
        phone.innerHTML = user.phone;
        const companyName = document.createElement('p');
        companyName.innerHTML = user.company.name;
        const website = document.createElement('p');
        website.innerHTML = user.website;
        const city = document.createElement('p');
        city.innerHTML = user.address.city;
        const zipcode = document.createElement('p');
        zipcode.innerHTML = user.address.zipcode;
        container.append(name, username, email, phone, companyName, website, city, zipcode);
        result.append(container);
    });
        
    }