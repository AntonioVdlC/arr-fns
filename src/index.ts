import { sum, average, groupBy } from "@antoniovdlc/reduce";
import {
  alphabetically,
  alphabeticallyBase,
  numerically,
  chronologically,
  combine,
  createCompareFunction,
} from "@antoniovdlc/sort";

const reduce = { sum, average, groupBy };
const sort = {
  alphabetically,
  alphabeticallyBase,
  numerically,
  chronologically,
  combine,
  createCompareFunction,
};

export { reduce, sort };
