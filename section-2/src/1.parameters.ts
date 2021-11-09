const func = (name: string, user: number) => {};
type f = Parameters<typeof func>;
const func2 = (...data: f) => {
  const [name, user] = data;
  console.log(name, user);
};

func2("sam", 1);
