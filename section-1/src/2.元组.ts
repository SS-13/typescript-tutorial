// 已有数组
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = new Array(4); // 固定数组长度
let arr3 = new Array<number>(4); //
console.log(arr3.length);

interface NumberArray {
  [index: number]: number;
}
let arr4: NumberArray = [1, 2, 3];

// 类数组
function sum() {
  let args: IArguments = arguments;
}

// 元组
let tuple: [number, string, boolean] = [1, "测试", false];

// 区别
function useFetch() {
  const response: string = "res";
  const age: number = 30;
  //   return [response, age] ;
  return tuplify(response, age);
}
const [response] = useFetch();

function tuplify<T extends unknown[]>(...elements: T): T {
  return elements;
}
