const integration = "slack";
const name = "Slack";

const fs = require("fs");
const path = require("path");

const version = "v0";

const transformer = require(`../${version}/destinations/${integration}/transform`);
// const { compareJSON } = require("./util");

const inputDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_input.json`)
);
const outputDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_output.json`)
);
const inputData = JSON.parse(inputDataFile);
const expectedData = JSON.parse(outputDataFile);

// Router Test Data
const inputRouterDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_router_input.json`)
);
const outputRouterDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_router_output.json`)
);
const inputRouterData = JSON.parse(inputRouterDataFile);
const expectedRouterData = JSON.parse(outputRouterDataFile);

inputData.forEach((input, index) => {
  test(`${name} Tests - payload: %{index}`, () => {
    if (input.message.type == "page") {
      expect(() => transformer.process(input)).toThrow(
        new Error("Message type not supported")
      );
    } else {
      const output = transformer.process(input);
      expect(output).toEqual([expectedData[index]]);
    }
  });
});
describe(`${name} Tests`, () => {
describe("Router Tests", () => {
  it("Payload", async () => {
    const routerOutput = await transformer.processRouterDest(inputRouterData);
    expect(routerOutput).toEqual(expectedRouterData);
  });
});

});

