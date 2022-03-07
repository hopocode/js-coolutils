import { startTimer } from "./timer";

const { sleep } = require("./main.utils");
const { endTimer } = require("./timer");

test("Timer shod be bigger than 2 sec and lower than 4", async () => {
  expect.assertions(3);
  startTimer("a");
  await sleep(3000);
  const t = endTimer("a", false);
  expect(t).toBeGreaterThan(2000);
  expect(t).toBeLessThan(4000);
  expect(t < 1000).toBeFalsy();
});
