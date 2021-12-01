import consolev from "consolev";
import { format } from "date-fns";
import preval from "preval.macro";

consolev(
  `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
  format(preval`module.exports = Date.now()`, "yyyy-MM-dd HH:mm:ss")
);
