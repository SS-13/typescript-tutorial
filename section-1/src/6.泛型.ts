interface LengthWise {
  length: number;
}

function identity(arg: string | any[]) {
  console.log(arg.length);
  // return arg.length
}

function identity2<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const result = identity2<string>("测试");
console.log(result);

// 类型 实体类
class GenericNumber<T> {
  zeroValue: T | undefined;
  add: ((x: T, y: T) => T) | undefined;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x: number, y: number) {
  return x + y;
};
console.log(myGenericNumber.add(1, 2));

// 函数重载
function add(...rest: number[]): number;
function add(...rest: string[]): string;
function add(...rest: any[]) {
  let first = rest.shift();
  if (typeof first === "string") {
    return rest.join("");
  }
  if (typeof first === "number") {
    return rest.reduce((a, b) => a + b);
  }
}

function getData<T>(value: T): T {
  return value;
}

getData<number>(123);
getData<string>("666");

// 泛型接口
interface ConfigFN {
  <T>(value: T): void;
}

const getData2: ConfigFN = function <T>(value: T): void {
  console.log(value);
};
getData2<number>(133);

//  泛型动态数据
interface Bookmark {
  msg: string;
}
class BookmarkService<T extends Bookmark> {
  items: T[] = [];
}
class BookmarkService2<T extends Bookmark = Bookmark> {
  items: T[] = [];
}
const s = new BookmarkService2();

// 小彩蛋
let err1: readonly Set<number>;
let err2: readonly Array<number>;

let ok1: readonly boolean[];
let ok2: readonly [number,string];