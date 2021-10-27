function getLength(str: string | number): number {
  if ((str as string).length) {
    //   if ((<string>str).length) {
    return (<string>str).length;
  } else {
    return str.toString.length;
  }
}

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

// interface A {
//   msg: string;
// }

// function helper(options: A): A {
//   return options;
// }

// const xxA: A = {};

// interface Window {
//   b: string;
// }

// interface Window {
//   a: number;
// }

// const s: Window = {
//   a: 1,
//   b: "",
// };

// interface 可用于扩展

// declare module "koa-swig";
