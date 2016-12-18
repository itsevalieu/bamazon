var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	//username
	user: "root",
	//password
	password: "codemore1",
	database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
});

setTimeout(start, 1000);
function start(){

	//Query products, id, and prices to display to customer
	connection.query("SELECT item_id, product_name, price FROM products", function(error, data){
		if(error){
			return console.log("Error!");
		}
		for(var i = 0; i < data.length; i++){
			var list = 	"ID. #" + data[i].item_id + " || Item: " + data[i].product_name + ", $" + data[i].price;
			console.log(list);
		}
	});	
	setTimeout(service, 2000);
}

function service(){
	inquirer.prompt([
		{
			name: "id",
			message: "What is the ID of the item you want to buy?",
			type: "input",
			validate: function (input) {
		    	if (input !== 'number') {
		        	console.log("\nYou need to provide a number.");
		        	return;
		      	}
			}
		},
		{
			name: "desiredQuantity",
			message: "How many units would you like to buy of this item?",
			type: "input",
			validate: function (input) {
		    	if (input !== 'number') {
		        	console.log("\nYou need to provide a number.");
		        	return;
		      	}
			}
		}
		]).then(function(response){
			var id = response.id;
			var desiredQuantity = response.desiredQuantity;

			//Check if there is enough in stock of the item using parameters
			check(id, desiredQuantity);
	});
}

function check(id, desiredQuantity){
	connection.query("SELECT stock_quantity, price FROM products WHERE ?", {item_id: id}, function(error, data){
		if(error){
			return console.log("Error!");
		}
		var inStock = parseInt(data[0].stock_quantity);
		var price = parseFloat(data[0].price);

		if(desiredQuantity <= inStock){
			var totalPrice = price*desiredQuantity;
			var inStock = inStock - desiredQuantity;

			connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: inStock},{item_id: id}], function(error, data){
				if(error){
					return console.log("Error!");
				}
				console.log(data);
			});
			return console.log("Purchase successful! Your total price is: $" + totalPrice.toFixed(2));

		} else {
			return console.log("Insufficient quantity!");
		}
	});
}
