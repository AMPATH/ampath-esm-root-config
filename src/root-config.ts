import { start } from "single-spa";
import "./register-shared-deps";
import { registerAllCoreApplications } from "@openmrs/esm-root-config";
import { registerAmpathApplications } from "./ampath-root-config";
import "./configs/configs";
registerAllCoreApplications();
registerAmpathApplications();

start();
