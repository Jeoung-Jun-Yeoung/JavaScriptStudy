class Notebook {
  constructor(name, price, company) {
    this.name = name;
    this.price = price;
    this.company = company;
  }
}

const notebook1 = new Notebook("Macbook", 1000000, "apple");

console.log(notebook1);
console.log(notebook1.name);
console.log(notebook1.price);
console.log(notebook1.company);

// class and method 활용
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  printInfo() {
    console.log(`상품명: ${this.name}, 가격: ${this.price}`);
  }
}

const pr1 = new Product("mac", 1200000);

pr1.printInfo();

// object literal

const computer = {
  name: "MacbookPro",
  pro_price: 2000000,
  printInfo: function () {
    console.log(`name: ${this.name} price: ${this.pro_price}`);
  },
};

computer.printInfo();

class clothe {
  constructor(color, price, size) {
    this.color = color;
    this.price = price;
    this.size = size;
  }

  printInfo() {
    console.log(`color ${this.color}, price ${this.price}, size ${this.size}`);
  }
}
const cap = new clothe("navy", 20000, "L");
const shirt = new clothe("black", 120000, "XL");

cap.printInfo();
shirt.printInfo();
