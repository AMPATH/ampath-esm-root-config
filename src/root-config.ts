import { registerApplication, start } from "single-spa";
import { registerAllCoreApplications } from "joeldenning-root-config/dist/root-config-lib";
import * as activityFunctions from "./routes";
import "./register-shared-deps";

registerAllCoreApplications();

registerApplication(
  "@ampath/poc",
  () => System.import("@ampath/poc"),
  activityFunctions.isPocActive
);

start();
