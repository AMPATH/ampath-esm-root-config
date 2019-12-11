import { start } from "single-spa";
import "./register-shared-deps";
import { registerAllCoreApplications } from "@openmrs/esm-root-config";
import { registerAmpathApplications } from "./ampath-root-config";

registerAllCoreApplications();
registerAmpathApplications();

start();
