// Read more about "activity functions" at https://single-spa.js.org/docs/configuration.html#activity-function

export function isPocActive(location: Location): boolean {
  // To start out, POC will always be mounted. This will change as more applications
  // are added.
  return true;
}

export function isDevtoolsActive(location: Location): boolean {
  return localStorage.getItem("openmrs:devtools") ? true : false;
}
