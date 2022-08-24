export const findUser = (array) => {
	debugger;
	const newArray = [];
	const id = document.getElementById('id').value;
	const user = array.find((user) => user.id == id);
	newArray.push(user);
	return newArray;
};
