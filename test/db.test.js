describe("Tests for db.js", () => {
  const db = require("../db/db");

  it("integration", () => {
    let val = {
      id: "1",
      userId: "1",
      type: "coffee",
      description: "my cool description",
      created: "2011-10-05T14:48:00.000Z",
      mass: 2.7,
      expiry: "2011-10-05T14:48:00.000Z",
      cupping: 42,
      treeVariety: "Robusto"
    };

    expect(db.getById("1")).toEqual(val);
  });

  it("filter", () => {
    expect(db.getFiltered({})).toBeTruthy();
  });
});

describe("Validation", () => {
  let validate = require("../validation/validate");

  it("Base values", () => {
    let val = {
      id: "1",
      userId: "1",
      type: "coffee",
      description: "my cool description",
      created: "2011-10-05T14:48:00.000Z",
      mass: 2.7,
      expiry: "2011-10-05T14:48:00.000Z",
      yo: "me"
    };
    let schema = { id: "/Base", type: "object", properties: {}, required: [] };
    let result = validate(val, schema);

    expect(result.valid).toBeTruthy();
  });

  it("Base missing value should be invalid", () => {
    let val = {
      id: "1",
      userId: "1",
      type: "coffee",
      description: "my cool description",
      created: "2011-10-05T14:48:00.000Z",
      mass: 2.7
    };
    let schema = { id: "/Base", type: "object", properties: {}, required: [] };
    let result = validate(val, schema);

    expect(result.valid).toBeFalsy();
  });

  it("Bad date fails", () => {
    let val = {
      id: "1",
      userId: "1",
      type: "coffee",
      description: "my cool description",
      created: "20-10-05T14:48:00.000Z",
      mass: 2.7,
      expiry: "2011-10-05T14:48:00.000Z",
      yo: "me"
    };
    let schema = { id: "/Base", type: "object", properties: {}, required: [] };
    let result = validate(val, schema);

    expect(result.valid).toBeFalsy();
    expect(result.errors[0].message).toContain("date-time");
  });

  it("Child schema", () => {
    let val = {
      id: "1",
      userId: "1",
      type: "coffee",
      description: "my cool description",
      created: "2011-10-05T14:48:00.000Z",
      expiry: "2011-10-05T14:48:00.000Z",
      mass: 2.544,
      hello: "world"
    };

    let sch = {
      id: "/Schema",
      type: "object",
      properties: {
        hello: { type: "string" }
      },
      required: ["hello"]
    };

    let result = validate(val, sch);
    expect(result.valid).toBeTruthy();
  });

  it("Child schema should fail", () => {
    let val = {
      id: "1",
      userId: "1",
      type: "coffee",
      description: "my cool description",
      created: "2011-10-05T14:48:00.000Z",
      expiry: "2011-10-05T14:48:00.000Z",
      badval: 2.7,
      hello: "world"
    };

    let sch = {
      id: "/Schema",
      type: "object",
      properties: {
        hello: { type: "string" }
      },
      required: ["hello"]
    };

    let result = validate(val, sch);
    expect(result.valid).toBeFalsy();
  });
});
