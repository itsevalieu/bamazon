var inquirer = require("inquirer");
var mysql = require("mysql");

function start(){
	inquirer.prompt([
	{
		name: "action",
		message: "What would you like to do?",
		type: "list",
		choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]


	}]).then(function(response){
		switch (response.action){
			case "View Products for Sale":
				viewProducts();
				break;
			case "View Low Inventory":
				viewLowInventory();
				break;
			case "Add to Inventory":
				addInventory();
				break;
			case "Add New Product":
				addNewProducts();
				break;
		}
	});
}
function viewProducts(){
	// the app should list every available item: the item IDs, names, prices, and quantities.
}
function viewLowInventory(){
	// then it should list all items with a inventory count lower than five.	
}
function addInventory(){
	//your app should display a prompt that will let the manager "add more" of any item currently in the store.
}
function addNewProducts(){
	//it should allow the manager to add a completely new product to the store.
}