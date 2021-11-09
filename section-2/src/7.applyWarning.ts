// apply 调用错误

interface Cat {
  name: string;
}

const bobTheCat: Cat = {
  name: "Bob",
};

function printCatName(cat: Cat) {
  console.log(cat.name);
}

function printCatNameThis(this: Cat) {
  console.log(this.name, ":this");
}
printCatNameThis.apply(bobTheCat)
// printCatNameThis(bobTheCat)