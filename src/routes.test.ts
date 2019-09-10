import * as activityFunctions from "./routes";

describe("routes", () => {
  it(`returns correct values for @ampath/poc routes`, () => {
    expect(
      activityFunctions.ampathApps["@ampath/poc"](mockLocation("#/login"))
    ).toBe(true);
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
});

function mockLocation(url: string): any {
  return {
    pathname: url
  };
}
