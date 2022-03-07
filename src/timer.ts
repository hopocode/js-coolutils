interface ITimers {
  [key: string]: number;
}

const timers: ITimers = {};

export const startTimer = (name: string = "def") => {
  return (timers[name] = Date.now());
};

export const endTimer = (
  name: string = "def",
  printToLog: boolean = true
): number => {
  if (!timers[name]) {
    throw new Error(`Timer with name '${name}' does not exists.`);
  }
  const t = Math.floor(Date.now() - timers[name]);
  if (printToLog) {
    if (name !== "def") {
      console.log(`Timer result: '${t}'`);
    } else {
      console.log(`Timer '${name}' result '${t}'`);
    }
  }
  return t;
};
