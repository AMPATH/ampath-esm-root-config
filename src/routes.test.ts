import * as activityFunctions from "./routes";

describe("routes", () => {
  it(`returns correct values for @ampath/poc routes`, () => {
    expect(activityFunctions.isPocActive(mockLocation("#/login"))).toBe(true);
    expect(
      activityFunctions.isPocActive(mockLocation("/something-random"))
    ).toBe(true);
    expect(
      activityFunctions.isPocActive(mockLocation("/amrs/spa/something-random"))
    ).toBe(true);
  });
});

function mockLocation(url: string): any {
  return {
    pathname: url
  };
}
