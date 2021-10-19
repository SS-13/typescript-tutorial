/**
 * 1.抽象类可以具体实现，也可以定义方法
 * 2.方法修饰符
 *   public    共有的，任何地方都可以访问到
 *   private   不能在类的外部使用，只能在内部使用
 *   protected 受保护的方法，只能在类、继承类中使用，无法在实例中使用
 */
abstract class Animal {
  // 子类实现方法
  abstract makeSounds(): void;
  public move(): void {
    console.log("动物移动");
  }
  private privateValue = "animal";
  protected eat(): void {
    console.log("动物进食", this.privateValue);
  }
}

// 类既可以是实体的类，也可以是个类型
class Dog extends Animal {
  #pname: string = "旺财";
  private uname: string = "露娜";
  constructor() {
    super();
    // this.privateValue
    console.log(this.#pname, this.uname);
  }

  makeSounds() {
    console.log("汪汪汪");
  }

  eatFood() {
    this.eat();
  }
}

const dog: Dog = new Dog();
dog.move();
dog.eatFood();
// dog.makeSounds();
console.log((dog as any).uname, (dog as any).pname, 'new');

const dog1: Animal = new Dog();
