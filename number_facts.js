let favoriteNumber = 16;
let baseURL = 'http://numbersapi.com';

$.getJSON(`${baseURL}/${favoriteNumber}?json`).then((data) => {
	console.log(data);
});

let favoriteNumbers = [ 3, 16, 22 ];
$.getJSON(`${baseURL}/${favoriteNumbers}?json`).then((data) => {
	console.log(data);
});

Promise.all(
	Array.from({ length: 4 }, () => {
		return $.getJSON(`${baseURL}/${favoriteNumber}?json`);
	})
).then((facts) => {
	facts.forEach((data) => $('#numberList').append(`<li>${data.text}</li>`));
});
