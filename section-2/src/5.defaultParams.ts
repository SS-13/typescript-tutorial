type coreIconName = "user" | "customer";
const opts: coreIconName = "customer";

// ts世界中 Object == {}
type LiteralUnion<T extends U, U = string> = T; //  | (U & {});

interface GreetSettings {
  greeting: string;
  duration: number;
  color?: false;
}

type Color = LiteralUnion<"red" | "black" | keyof GreetSettings>;
const c: Color = "black";

type TYd = string & {};
type TTest = "foo" | "bar" | TYd;
type TTest2 = ("hello" | "world") | (string & {});
const xx: TTest = "foo";
const xx3: TTest2 = "hello";

export { TTest };
