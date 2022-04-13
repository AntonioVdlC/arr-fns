import { describe, it, expect } from "vitest";

import { map, reduce, sort } from "../src";

describe("map", () => {
  it("exports pick, select", () => {
    const keys = Object.keys(map).sort();
    expect(keys).toEqual(["pick", "select"]);
  });
});

describe("reduce", () => {
  it("exports sum, average, groupBy", () => {
    const keys = Object.keys(reduce).sort();
    expect(keys).toEqual(["average", "groupBy", "sum"]);
  });
});

describe("sort", () => {
  it("exports alphabetically, alphabeticallyBase, numerically, chronologically, combine, createCompareFunction", () => {
    const keys = Object.keys(sort).sort();
    expect(keys).toEqual([
      "alphabetically",
      "alphabeticallyBase",
      "chronologically",
      "combine",
      "createCompareFunction",
      "numerically",
    ]);
  });
});
