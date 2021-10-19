// 一个变量有固定的值可以反推变量类型，不需要主动去定义

let num: number = 0;
let isDone: boolean = false;
let hexLiteral: number = 0xf00d;
const str: string = "Sam";
console.log(str);

function alertName(name: string): void {
  console.log(name);
}

console.log(alertName(str));

let unusable: void = undefined;

// 类型推断
function getString(something: string | number): string {
  return something.toString();
}

getString(0);
getString("文本");

// 枚举 一些固定参数集合
enum Days {
  Sun = 7,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log("🐻", Days["Sun"], Days[10]);


interface Person {
  readonly id: number;
  name?: string;
  age: number;
  [propName: string]: any;
}

const shen: Person = {
  id: 30,
  age: 32,
};
shen["xx"] = "test";
// shen.id = 90;
// type
