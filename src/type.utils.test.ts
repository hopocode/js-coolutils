import { isScalar } from "./type.utils";

test("Check if value is scalar", () => {
  const v1 = "aaa";
  const v2 = 20;
  const v3 = { a: "xx" };
  expect(isScalar(v1)).toBe(true);
  expect(isScalar(v2)).toBe(true);
  expect(isScalar(v3)).toBe(false);
});
