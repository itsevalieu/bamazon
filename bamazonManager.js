var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "codemore1",
	database: "bamazonDB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected as id " + connection.threadId);
});

setTimeout(start, 1000);
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
	connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(error, data){
		if(error){
			return console.log("Error!");
		}
		for(var i = 0; i < data.length; i++){
			var list = 	"ID. #" + data[i].item_id + " || Item: " + data[i].product_name + ", $" + data[i].price + ", In Stock: " + data[i].stock_quantity;
			console.log(list);
		}
	});
}
function viewLowInventory(){
	// then it should list all items with a inventory count lower than five.	
	connection.query("SELECT item_id, product_name, stock_quantity FROM products WHERE stock_quantity < 5", function(error, data){
		console.log("Products in need of restocking:");
		for(var i = 0; i < data.length; i++){
			var list = 	"ID. #" + data[i].item_id + " || Item: " + data[i].product_name + ", In Stock: " + data[i].stock_quantity;
			console.log(list);
		}
	});
}
function addInventory(){
	//your app should display a prompt that will let the manager "add more" of any item currently in the store.
}
function addNewProducts(){
	//it should allow the manager to add a completely new product to the store.
}