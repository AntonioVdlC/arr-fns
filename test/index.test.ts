import { describe, it, expect } from "vitest";

import { filter, map, reduce, sort } from "../src";

describe("filter", () => {
  it("exports combine, createFilterCompareFunction, equal, greaterThan, greaterThanOrEqual, hasValue, lesserThan, lesserThanOrEqual, match, notNull", () => {
    const keys = Object.keys(filter).sort();
    expect(keys).toEqual([
      "combine",
      "createFilterCompareFunction",
      "equal",
      "greaterThan",
      "greaterThanOrEqual",
      "hasValue",
      "lesserThan",
      "lesserThanOrEqual",
      "match",
      "notNull",
    ]);
  });
});

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
