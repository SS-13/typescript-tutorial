/**
 * 1 interface 和 type 区别
 * 相同点
 * a. 都可以描述一个对象或函数
 * b. 都允许扩展
 * 不同点
 * a. type可以声明基本类型别名、联合类型、元组
 * b. typeof获取实例对象
 * c. interface可以被合并
 */

/**
 * 1. 有关于后台的接口愿意去使用 - interface
 * 2. 第三方开发的sdk 比如vue - interface
 * 3. 前端的库 math.min.js math.d.ts - interfafce
 * 4. 正常开发任务可以用type
 */
interface IpriceData {
  id: number;
  m: string;
}

type IPriceDataArray = IpriceData[];

function getPriceData() {
  return new Promise<IPriceDataArray>((resolve, reject) => {
    fetch("url")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const data: IPriceDataArray = [];
        resolve(data);
      });
  });
}

getPriceData().then((data) => {
  console.log(data[0].id);
});

// nodejs  BFF架构
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

class DigitalClock implements ClockInterface {
  public tick(): void {
    console.log("tick");
  }
}

class AnalogClock implements ClockInterface {
  public tick(): void {
    console.log("ding ding");
  }
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

const digitalclock = createClock(DigitalClock, 12, 17);
const analogclock = createClock(AnalogClock, 12, 17);
digitalclock.tick();
analogclock.tick();
