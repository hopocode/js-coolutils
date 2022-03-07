export const sleep = async (ms: number, sync: boolean = false) => {
  if (sync) {
    syncSleep(ms);
  } else {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
};

export const syncSleep = (ms: number): number => {
  const start = Date.now();
  let c = 0;
  while (Date.now() - start < ms) {
    c++;
  }
  return c;
};
