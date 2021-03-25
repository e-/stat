const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("error message", () => {
  const main = spawn("node", ["main.js", "abc"]);
  const outputs = [];
  main.stdout.on("data", (output) => {
    outputs.push(output);
  });

  main.stdout.on("end", () => {
    const output = outputs.join("").trim();
    expect(output).toBe("Wrong command!");
  });
});
