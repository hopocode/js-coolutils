const { increasePackageVersion } = require("./increasePackageVersion");
const { join } = require("path");
const { existsSync } = require("fs");

const packageFilename = join(__dirname, process.argv[2]);
if (!existsSync(packageFilename)) {
  throw new Error(`Package file "${packageFilename}" does not exists.`);
}
increasePackageVersion(process.argv[2]);
