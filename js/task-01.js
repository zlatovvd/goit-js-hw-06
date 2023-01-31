const categories = document.querySelector("#categories");

console.log('Number of categories:', categories.children.length);

for(let category of categories.children) {

	// Спосіб 1 - без перевірки 
	console.log('Category',category.firstElementChild.textContent);
	console.log('Elements', category.lastElementChild.children.length);

	// Спосіб 2 - з перевіркою 
	// for(let items of category.children) {

	// 	if(items.nodeName==="H2") {
	// 		console.log('Category:',items.textContent);
	// 	} 
	// 	if(items.nodeName==="UL") {
	// 		console.log('Elements:', items.children.length);
	// 	}
	// }
}