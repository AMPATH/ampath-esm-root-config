import { registerApplication } from "single-spa";
import * as ampathApps from "./routes";
export function registerAmpathApplications() {
  Object.keys(ampathApps).forEach(ampathAppName => {
    registerApplication(
      ampathAppName,
      () => System.import(ampathAppName),
      ampathApps[ampathAppName]
    );
  });
}
