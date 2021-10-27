import "reflect-metadata";

function inject(serviceIdentifier: string) {
  return function (target: Object, targetKey: string, index: number) {
    Reflect.defineMetadata(serviceIdentifier, "测试666", target);
  };
}

class IndexController {
  public indexService;
  constructor(@inject("xxx") indexService: string) {
    this.indexService = indexService;
  }
}

// IOC注入
const indexController = new IndexController("测试1");
console.log(indexController.indexService);
// js 元编程
console.log(Reflect.getMetadata("xxx", IndexController));
