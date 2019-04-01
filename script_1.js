let price = prompt('Ваш бюджет?', '200 dollar');
let	nameMag = prompt('Название вашего магазина?', 'Pechka');
let shopGoods = ['frukti', 'ovoshi', 'm9so'];
let employers = {
	directorName: 'Andey',
	kassirName: 'Vika',
	securityName: 'Viktor'
}


var mainList = {
	price,
	nameMag,
	shopGoods,
	employers,
	open: false,
}; 


console.log(mainList.employers['open']);