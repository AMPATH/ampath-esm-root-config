import { start } from "single-spa";
import "./register-shared-deps";
import { registerAllCoreApplications } from "@openmrs/esm-root-config";
import { registerAmpathApplications } from "./ampath-root-config";
import { provide } from "@openmrs/esm-module-config";
//@ts-ignore
import ampathModuleConfig from "./ampath-module.config.json";

provide(ampathModuleConfig);
registerAllCoreApplications();
registerAmpathApplications();

start();
