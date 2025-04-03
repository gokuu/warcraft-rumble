import {
  getAllMiniDefinitions,
  getAllMiniIds,
  getMiniDefinition,
  getTroop,
} from "../../minis";

describe("getAllMiniDefinitions()", () => {
  test("returns all the currently existing minis", () => {
    expect(getAllMiniDefinitions().length).toBe(92);
  });
});

describe("getAllMiniIds()", () => {
  test("returns a sorted list of all the currently existing mini ids", () => {
    const miniIds = getAllMiniIds();

    expect(miniIds.length).toBe(92);
    expect(miniIds[0]).toBe("Abomination");
    expect(miniIds[91]).toBe("YseraTheDreamer");
  });
});

describe("getMiniDefinition()", () => {
  test("returns the same instance by either name or id", () => {
    expect(getMiniDefinition("OnuAncientOfLore")).toEqual(
      getMiniDefinition(67)
    );
  });

  describe("when given an inexistent id", () => {
    test("returns nothing", () => {
      expect(getMiniDefinition(0)).toBeUndefined();
    });
  });
});

describe("getTroop()", () => {
  test("returns the mini with no selected talent", () => {
    const troop = getTroop("AngryChickens");
    expect(troop.name).toBe("Angry Chickens");
    expect(troop.talent).toBeUndefined();
  });

  test("returns the mini with the first talent", () => {
    const troop = getTroop("AngryChickens", 0);
    expect(troop.name).toBe("Angry Chickens");
    expect(troop.talent?.name).toBe("Snackrifice");
  });

  test("returns the mini with the second talent", () => {
    const troop = getTroop("AngryChickens", 1);
    expect(troop.name).toBe("Angry Chickens");
    expect(troop.talent?.name).toBe("Walking Crate");
  });

  test("returns the mini with the third talent", () => {
    const troop = getTroop("AngryChickens", 2);
    expect(troop.name).toBe("Angry Chickens");
    expect(troop.talent?.name).toBe("Furious Fowl");
  });
});
