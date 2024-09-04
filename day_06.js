class Students {
  constructor(name, email, dateYear, score) {
    this.name = name;
    this.email = email;
    this.dateYear = dateYear;
    this.score = score;
    this.age = this.calcAge();
  }

  calcAge() {
    let date = new Date();
    let ageMs = new Date(this.dateYear);

    return ((date - ageMs) / (1000 * 60 * 60 * 24 * 365)).toFixed();
  }
}

const listStudent = [
  new Students(
    "Farel Darari Deksano",
    "farledeksano000@gmail.com",
    "05-20-2000",
    85
  ),
  new Students(
    "Farel Darari Deksano",
    "farledeksano000@gmail.com",
    "11-15-1998",
    90
  ),
  new Students(
    "Farel Darari Deksano",
    "farledeksano000@gmail.com",
    "01-30-2002",
    78
  ),
];

function reportStudents(listStudent) {
  const calcScore = getNumber(listStudent, "score");
  const calcAge = getNumber(listStudent, "age");

  return { ...calcScore, ...calcAge };
}

function getNumber(arrStudents, typeCalc) {
  const resultReport = {};
  resultReport[typeCalc] = {
    highest: arrStudents[0][typeCalc],
    lowest: arrStudents[0][typeCalc],
    average: 0,
  };

  // console.log(arrStudents[0][typeCalc]);
  // //const resultReport = {
  //   score: {
  //     highest: arrStudents[0].score,
  //     lowest: arrStudents[0].score,
  //     average: 0,
  //   },
  //   age: {
  //     highest: arrStudents[0].age,
  //     lowest: arrStudents[0].age,
  //     average: 0,
  //   },
  // };

  console.log(arrStudents.length);

  for (let i = 0; i < arrStudents.length; i++) {
    //console.log(typeCalc, ":", arrStudents[i][typeCalc]);
    // GET LOWEST NUMBER
    if (arrStudents[i][typeCalc] < resultReport[typeCalc].lowest) {
      resultReport[typeCalc].lowest = arrStudents[i][typeCalc];
    }

    // GET HIGHEST NUMBER
    if (arrStudents[i][typeCalc] > resultReport[typeCalc].highest) {
      resultReport[typeCalc].highest = arrStudents[i][typeCalc];
    }

    // GET AVERAGE NUMBER
    resultReport[typeCalc].average +=
      arrStudents[i][typeCalc] / arrStudents.length;
  }
  return resultReport;
}

console.log(reportStudents(listStudent));

// KAK BAGAS SOLUTION

// ----------------------------------------------------------------

// PRODUCT CLASS

class Product {
  constructor(productName, productPrice) {
    this.productName = productName;
    this.productPrice = productPrice;
  }
}

const listProduct = [
  new Product("Baju Nike", 1000),
  new Product("Baju Puma", 2000),
  new Product("Mobil Tesla", 3000),
];

class Transaction {
  constructor() {
    this.totalPrice = 0;
    this.listProduct = [];
    this.qty = 0;
  }

  addToCart(product, qty) {
    if (this.listProduct.length == 0) {
      this.listProduct.push(product);
      this.totalPrice += product.productPrice;

      console.log(product.productName, "Product added to cart");
    } else {
      for (let i = 0; i < this.listProduct.length; i++) {
        if (product.productName == this.listProduct[i].productName) {
          console.log(product.productName, "Product already added to cart");
          return;
        }
      }

      // Apakah ada cara lain agar tidak terduplikat
      this.listProduct.push(product);
      this.totalPrice += product.productPrice;
      console.log(product.productName, "Product added to cart");
    }
  }

  showTotal() {
    const product = [];
    for (let i = 0; i < this.listProduct.length; i++) {
      product.push(this.listProduct[i].productName);
    }
    console.log(
      `Your cart :${product.join(", ")}. The total of your cart is ${
        this.totalPrice
      }`
    );
  }
  checkout() {
    console.log("Yeyyy, successfully checkout your cart");
    this.listProduct = [];
    this.totalPrice = 0;
  }
}

const firstOrder = new Transaction();
firstOrder.addToCart(listProduct[0]);
firstOrder.addToCart(listProduct[0]);
firstOrder.addToCart(listProduct[2]);
firstOrder.addToCart(listProduct[2]);

console.log(firstOrder.listProduct);

firstOrder.showTotal();
firstOrder.checkout();
console.log(firstOrder.listProduct);

// KAK BAGAS SOLULTION

class Product_2 {
  constructor(productName, productPrice) {
    this.productName = productName;
    this.productPrice = productPrice;
  }
}

class Transaction_2 {
  constructor() {
    this.listProduct = [];
    this.qty = [];
    this.totalPrice = 0;
  }

  addTocart(product, qty) {
    this.listProduct.push(product);
    this.qty.push(qty);
    this.totalPrice += product.productPrice * qty;
  }

  showTotal() {
    console.log(`Your total price is ${this.totalPrice}`);
  }

  checkout() {
    let transactionData = [];
    for (let i = 0; i < this.listProduct.length; i++) {
      transactionData.push({
        productName: this.listProduct[i].productName,
        quantity: this.qty[i],
        subTotal: this.listProduct[i].productPrice * this.qty[i],
      });
    }
    transactionData.push({ totalPrice: this.totalPrice });
    return transactionData;
  }
}

const product_1 = new Product_2("Indomie", 3000);
const product_2 = new Product_2("Es Podeng", 12000);
const product_3 = new Product_2("Pizza Slice", 25000);

console.log("product 1 : " + product_1);

const transaction_1 = new Transaction_2();

transaction_1.addTocart(product_1, 2);
transaction_1.addTocart(product_2, 1);

transaction_1.showTotal(); //

console.log(transaction_1.checkout()); //
