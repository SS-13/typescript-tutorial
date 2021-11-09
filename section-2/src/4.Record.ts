// 将属性K 对应的T 转换为U

interface ProductIncart {
  id: number;
  name: string;
  label?: string;
}

type Product = ProductIncart[];

interface Test {
  [key: string]: ProductIncart;
}

class CarModel {
  products: Record<string, ProductIncart> = {
    sam: {
      id: 13,
      name: "Sam",
    },
  };
}
