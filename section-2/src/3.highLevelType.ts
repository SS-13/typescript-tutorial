interface User {
  id: number;
  age: number;
  name: string;
}

// 必须的字段变成可选
type PartialUser = Partial<User>;
// 去掉问号可选
type PullDownRefresh = Required<PartialUser>;
// 选择一些字段
type PickUser = Pick<User, "id" | "age">;
// 排除一些字段
type OmitUser = Omit<User, "id">;
// 排除存在第二个的类型
type A = Exclude<"x" | "a", "x" | "y" | "z">;

type Select = "id" | "age";
type PartialSelect = Partial<Pick<User, Select>>;
type OmitSelect = Omit<User, Select>;

type Final = PartialSelect & OmitSelect;
// const s: Final = {
//   age: 32,
//   name: "Sam",
// };

// 让部分可选，部分不可选
type SelectPartial<T, V extends keyof T> = Partial<Pick<T, V>> & Omit<T, V>;
type Final1 = SelectPartial<User, "id" | "age">;

interface FirstType {
  id: number;
  firstName: string;
  lastName: string;
}

interface SecondType {
  id: number;
  address: string;
  city: string;
}

// Extract
type ExtractType = Extract<keyof FirstType, keyof SecondType>;
// Exclude
type ExcludeType = Exclude<keyof FirstType, keyof SecondType>;
