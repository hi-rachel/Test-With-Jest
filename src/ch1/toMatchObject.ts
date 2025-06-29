class TestObj {
  a: string;
  constructor(str: string) {
    this.a = str;
  }
}

export function testObj(str: string) {
  return new TestObj(str);
}
