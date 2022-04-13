import { pick, select } from "@antoniovdlc/map";
import { sum, average, groupBy } from "@antoniovdlc/reduce";
import {
  alphabetically,
  alphabeticallyBase,
  numerically,
  chronologically,
  combine,
  createCompareFunction,
} from "@antoniovdlc/sort";

const map = { pick, select };
const reduce = { sum, average, groupBy };
const sort = {
  alphabetically,
  alphabeticallyBase,
  numerically,
  chronologically,
  combine,
  createCompareFunction,
};

export { map, reduce, sort };
