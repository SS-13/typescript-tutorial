// 不要混淆es6和ts中的 =>
let myNum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// 函数默认参数
function buildName(firstName: string, lastName: string = "Cat"): string {
  return firstName + " " + lastName;
}

// 剩余参数
function push(array: any[], ...items: any[]): void {
  items.forEach((item) => {
    array.push(item);
  });
}

let a = [4];
push(a, 1, 2, 3);
console.log(a);

// 可选参数
function buildName2(lastName: string, firstName?: string): string {
  if (firstName) {
    return firstName + " " + lastName;
  }

  return lastName;
}

const tom = buildName2("Tom", "Cat");

