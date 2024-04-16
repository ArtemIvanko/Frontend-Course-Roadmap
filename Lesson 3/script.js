const getTypeFromValue = (value) => {
  if (typeof value === "string") {
    return console.log("string");
  }
  if (typeof value === "number") {
    return console.log("number");
  }
  if (typeof value === "boolean") {
    return console.log("boolean");
  }
  if (typeof value === "object") {
    return console.log("object");
  }
  if (typeof value === "undefined") {
    return console.log("undefined");
  }
  if (typeof value === "function") {
    return console.log("function");
  }
  if (typeof value === "symbol") {
    return console.log("symbol");
  }
  if (typeof value === "bigint") {
    return console.log("bigint");
  }
};