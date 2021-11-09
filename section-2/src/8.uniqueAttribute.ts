const DEV: unique symbol = Symbol("dev");
const PROD: unique symbol = Symbol("prod");

const obj = {
  [DEV]: 30,
};

function showWarning(message: string, mode: typeof DEV | typeof PROD) {
  console.log(message, mode.description);
}

showWarning("出错啦", PROD);
