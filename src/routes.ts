export const ampathApps = {
  "@ampath/poc": isPocActive
};
// Read more about "activity functions" at https://single-spa.js.org/docs/configuration.html#activity-function
function isPocActive(location: Location): boolean {
  // To start out, POC will always be mounted. This will change as more applications
  // are added.
  return !location.pathname.includes("login");
}
