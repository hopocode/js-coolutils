export const isScalar = (val: any) => {
  return (
    typeof val === "string" ||
    typeof val === "number" ||
    val === null ||
    typeof val === "undefined"
  );
};
