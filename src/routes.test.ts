import * as activityFunctions from "./routes";

describe("routes", () => {
  it(`returns correct values for @ampath/poc routes`, () => {
    expect(
      activityFunctions.ampathApps["@ampath/poc"](mockLocation("#/login"))
    ).toBe(false);
    expect(
      activityFunctions.ampathApps["@ampath/poc"](
        mockLocation("/amrs/spa/patient")
      )
    ).toBe(false);
    expect(
      activityFunctions.ampathApps["@ampath/poc"](
        mockLocation("/amrs/spa/home")
      )
    ).toBe(false);
    expect(
      activityFunctions.ampathApps["@ampath/poc"](
        mockLocation("/something-random")
      )
    ).toBe(true);
    expect(
      activityFunctions.ampathApps["@ampath/poc"](
        mockLocation("/amrs/spa/something-random")
      )
    ).toBe(true);
  });
  it(`returns correct values for @ampath/esm-form-entry routes`, () => {
    expect(
      activityFunctions.ampathApps["@ampath/esm-angular-form-entry"](
        mockLocation("#/login")
      )
    ).toBe(false);
    expect(
      activityFunctions.ampathApps["@ampath/esm-angular-form-entry"](
        mockLocation("/something-random")
      )
    ).toBe(false);
    expect(
      activityFunctions.ampathApps["@ampath/esm-angular-form-entry"](
        mockLocation("/chart/formentry")
      )
    ).toBe(true);
    expect(
      activityFunctions.ampathApps["@ampath/esm-angular-form-entry"](
        mockLocation("patient/some-long-uuid/chart/formentry")
      )
    ).toBe(true);
  });
});

function mockLocation(url: string): any {
  return {
    pathname: url
  };
}
