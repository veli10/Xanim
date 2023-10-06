const allInputs = document.querySelectorAll('input');
const button = document.querySelector('.button ');
const users = JSON.parse(localStorage.getItem('users'));
const alertDiv = document.querySelector('.alert')

button.addEventListener('click', (e) => {
	if (allInputs[1].checkValidity()) {
		e.preventDefault();
		let newUser = {
			name: allInputs[0].value,
			phone: allInputs[1].value,
			password: allInputs[2].value,
			computers: [],
		};

		let userAvaible = users.some(
			(user) =>
				user.name === allInputs[0].value
		);

		if (!userAvaible) {
			users.push(newUser);

			localStorage.setItem('users', JSON.stringify(users));

			location.href = '../login/login.html';
		} else {
            alertDiv.style.display = 'block';
        setTimeout(() => {
            alertDiv.style.display = 'none';
        }, 2000)
		}
	}
});
