// 构造参数类型
class User {
  constructor(public name: string, public email: string) {}
}

interface IConstruct<T extends new (...arg: any) => any> {
  // 核心
  // IOC 装载到容器中 校验
  type: new (...arg: ConstructorParameters<T>) => InstanceType<T>;
}

type UserConstruct = IConstruct<typeof User>;
const constr: UserConstruct = {
  type: User,
};

// constr.type ==> new (name: string, email: string) => User
const userInstance = new constr.type("页均", "sam@163.com");
console.log(userInstance.name);
