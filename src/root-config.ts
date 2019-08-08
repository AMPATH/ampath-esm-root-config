import { registerApplication, start } from "single-spa";
import * as activityFunctions from "./routes";
import "./register-shared-deps";

export const coreApps = {
  "@ampath/poc": activityFunctions.isPocActive,
  "@openmrs/devtools": activityFunctions.isDevtoolsActive
};

export function registerAllCoreApplications() {
  Object.keys(coreApps).forEach(coreAppName => {
    registerApplication(
      coreAppName,
      () => System.import(coreAppName),
      coreApps[coreAppName]
    );
  });
}

registerAllCoreApplications();

start();
