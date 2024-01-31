// Don't forget to run "npm install" in the terminal before trying to use "readline-sync"
import rs from "readline-sync";

const products = [
    {
      id: 1,
      name: "Cabernet Sauvignon",
      color: "red",
      price: 6.45,
    },
    {
      id: 2,
      name: "Cabernet Frank",
      color: "red",
      price: 5.45,
    },
    {
      id: 3,
      name: "Malbec",
      color: "red",
      price: 4.2,
    },
    {
      id: 4,
      name: "Merlot",
      color: "red",
      price: 8.35,
    },
    {
      id: 5,
      name: "Pinot Noir",
      color: "red",
      price: 5.95,
    },
    {
      id: 6,
      name: "Merlot Select",
      color: "red",
      price: 4.45,
    },
    {
      id: 7,
      name: "Cabernet Reserve",
      color: "red",
      price: 3.99,
    },
    {
      id: 8,
      name: "Oksamyt of Ukraine",
      color: "red",
      price: 9.99,
    },
    {
      id: 9,
      name: "KT",
      color: "red",
      price: 3.55,
    },
    {
      id: 10,
      name: "Aligote",
      color: "white",
      price: 6.45,
    },
    {
      id: 11,
      name: "Merlot",
      color: "white",
      price: 8.45,
    },
    {
      id: 12,
      name: "Riesling",
      color: "white",
      price: 7.45,
    },
    {
      id: 13,
      name: "Cabernet Frenc",
      color: "white",
      price: 9.45,
    },
    {
      id: 14,
      name: "KT",
      color: "white",
      price: 8.99,
    },
    {
      id: 15,
      name: "Chardonnay Reserve",
      color: "white",
      price: 6.45,
    },
    {
      id: 16,
      name: "Perlyna Stepu",
      color: "white",
      price: 10.45,
    },
    {
      id: 17,
      name: "Syran",
      color: "rose",
      price: 7.95,
    },
  ];
  let cart = [];
  let choose;
  const yourName = rs.question(`Please, enter your name! `) || "User";
  console.log(`We are happy to greet you, ${yourName}, in "Lowe Wine"!
  You can see our menu if you are 18 years and above`);
  function menu() {
    return `Menu
  1. Wine assortment
  2. Cart
  3. Checkout
  4. Exit
  `;
  }
  let choice = [1, 2, 3, 4];
  let question;
  function ourWine() {
    console.log(
      products
        .map(
          (wine) => `
  Id: ${wine.id}
  Name: ${wine.name}
  Color: ${wine.color}
  Price: ${wine.price}`
        )
        .join(`\n`)
    );
  }
  question = rs.question(`Are you already 18 years old? Press "y" or "n": `);
  if (question === "n") {
    console.log(`Sorry, you are not able to buy alcohol`);
  } else {
    if (question === "y") {
      console.log(`Thank you, ${yourName}`);
      do {
        console.log(menu());
        question = +rs.question(`Please enter a number of option to continue: `);
        if (question === 4) {
          break;
        }
        selection();
        if (!choice.includes(question)) {
          do {
            question = +rs.question(`Please enter number from 1 to 4 to continue: `);
          } while (!choice.includes(question));
        }
      } while (true);
    }
  }
  function selection() {
    if (question === 1) {
      ourWine();
      do {
        choose = +rs.question(`Please enter id number of your choice to add it in cart. Press "0" to go back to  menu. `);
        let check = products.find((wine) => wine.id === choose);
        if (check === undefined && choose !== 0) {
          console.log(`Sorry, wrong id. Please check`);
        } else {
          if (choose === 0) {
            break;
          } else {
            let chosenProduct = products.find((wine) => wine.id === choose);
            cart.push(chosenProduct);
            console.log(`The product ${chosenProduct.name} ${chosenProduct.color} is added to your cart!`);
          }
        }
      } while (choose !== 0);
    } else if (question === 2) {
      if (cart.length === 0) {
        console.log(`Your cart is empty`);
      } else {
        console.log(cart);
      }
    } else if (question === 3) {
      if (cart.length === 0) {
        console.log(`You have an empty cart`);
      } else {
        let sum = cart.reduce((acc, item) => acc + item.price, 0);
        console.log(`You have ${cart.length} items in your cart with total price ${sum} €`);
        let confirm = +rs.question(`Enter 9 to confirm and pay. Enter 0 to go main menu: `);
        if (confirm === 9) {
          console.log(`Thank you! You have successfully paid for your order (${sum} €)`);
          cart = [];
        } else if (confirm !== 0) {
          do {
            console.log((confirm = +rs.question(`Enter 9 to confirm and pay. Enter 0 to go main menu: `)));
          } while (confirm !== 0);
        }
      }
    }
  }
  console.log("Thank you for visiting our website!");