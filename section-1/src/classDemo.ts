class Demo {
  private num: number = 1;

  // WeakMap
  #num2: number = 3;

  getValue(): number {
    return this.num + this.#num2;
  }
}

const demo = new Demo();
demo.getValue();
// console.log(demo.num, demo.#num2);

let demos: Demo[] = [demo];
