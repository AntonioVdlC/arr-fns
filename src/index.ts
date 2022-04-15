import {
  notNull,
  hasValue,
  equal,
  lesserThan,
  lesserThanOrEqual,
  greaterThan,
  greaterThanOrEqual,
  match,
  combine as combineFilter,
  createFilterFunction,
} from "@antoniovdlc/filter";
import { pick, select } from "@antoniovdlc/map";
import { sum, average, groupBy } from "@antoniovdlc/reduce";
import {
  alphabetically,
  alphabeticallyBase,
  numerically,
  chronologically,
  combine as combineSort,
  createCompareFunction,
} from "@antoniovdlc/sort";

const filter = {
  notNull,
  hasValue,
  equal,
  lesserThan,
  lesserThanOrEqual,
  greaterThan,
  greaterThanOrEqual,
  match,
  combine: combineFilter,
  createFilterFunction,
};
const map = { pick, select };
const reduce = { sum, average, groupBy };
const sort = {
  alphabetically,
  alphabeticallyBase,
  numerically,
  chronologically,
  combine: combineSort,
  createCompareFunction,
};

export { filter, map, reduce, sort };
