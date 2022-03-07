import { sleep } from "./main.utils";
import { endTimer, startTimer } from "./timer";

test("Sleep for 3000ms should be between 2000 and 4000ms", async () => {
  startTimer("a");
  await sleep(3000);
  const t = endTimer("a", false);
  expect(t).toBeGreaterThan(2000);
  expect(t).toBeLessThan(4000);
  expect(t < 1000).toBeFalsy();
});

test("Sleep sync for 3000ms should be between 2000 and 4000ms", () => {
  startTimer("b");
  sleep(3000, true);
  const t = endTimer("b", false);
  expect(t).toBeGreaterThan(2000);
  expect(t).toBeLessThan(4000);
  expect(t < 1000).toBeFalsy();
});

// test("normalizeUrl should order params.", () => {
//   const url1 = "http://example.com/?a=5&b=6";
//   const url2 = "http://example.com?b=6&a=5";
//   expect(normalizeUrl(url1)).toBe(normalizeUrl(url2));
// });
