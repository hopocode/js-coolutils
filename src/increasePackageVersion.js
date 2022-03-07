const { writeFileSync } = require("fs");
const { join } = require("path");

/**
 * Increase path version in package file
 * @returns string version
 */
module.exports.increasePackageVersion = (filename) => {
  const pcg = require(filename);
  let partsVersion = pcg.version.split(".");
  const v = +partsVersion.pop() + 1;
  partsVersion.push(v.toString());
  const stringVersion = partsVersion.join(".");
  console.info("****** RELEASE NEW VERSION: " + stringVersion);
  pcg.version = stringVersion;
  writeFileSync(join(__dirname, filename), JSON.stringify(pcg, null, 2));
  return stringVersion;
};
