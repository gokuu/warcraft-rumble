import { generateLoadoutCode } from "../../loadout";
import { getTroop } from "../../minis";
import { Army } from "../../types";

const loadoutCode =
  "rumblo:CFIQAhoECCsQABoECEQQARoECBwQAhoECDIQABoECFkQAhoECDEQAg==";
const loadoutCodeWithPriestess =
  "rumblo:CEMQABoECCYQAhoECBUQABoECF0QARoECAkQABoECB4QABoECFYQAQ==";
const loadoutCodeWithoutTalent =
  "rumblo:CFIQABoECAQQABoECAUQARoECAcQARoECAgQABoCCFEaBAgsEAA=";
const loadoutCodeWithArthas =
  "rumblo:CF4QARoECEwQAhoECDEQABoECEYQARoECFoQARoECFkQAhoECCYQAQ==";

describe("generateLoadoutCode()", () => {
  describe("with a valid army", () => {
    test("generates a valid loadout code", () => {
      const army: Army = {
        leader: getTroop("SylvanasWindrunner", 2),
        troops: [
          getTroop("Gargoyle", 0),
          getTroop("PlagueFarmer", 1),
          getTroop("DarkspearTroll", 2),
          getTroop("Harpies", 0),
          getTroop("WitchDoctor", 2),
          getTroop("GryphonRider", 2),
        ],
      };

      expect(generateLoadoutCode(army)).toBe(loadoutCode);
    });

    describe("containing Priestess", () => {
      test("generates a valid loadout code", () => {
        const army: Army = {
          leader: getTroop("OnuAncientOfLore", 0),
          troops: [
            getTroop("FaerieDragon", 2),
            getTroop("BogBeast", 0),
            getTroop("Priestess", 1),
            getTroop("Execute", 0),
            getTroop("DireBatlings", 0),
            getTroop("WarsongGrunts", 1),
          ],
        };

        expect(generateLoadoutCode(army)).toBe(loadoutCodeWithPriestess);
      });
    });

    describe("containing a mini with no talent selected", () => {
      test("generates a valid loadout code", () => {
        const army: Army = {
          leader: getTroop("SylvanasWindrunner", 0),
          troops: [
            getTroop("ChainLightning", 0),
            getTroop("CheatDeath", 1),
            getTroop("EarthAndMoon", 1),
            getTroop("Eclipse", 0),
            getTroop("SwoleTroll"),
            getTroop("Ghoul", 0),
          ],
        };

        expect(generateLoadoutCode(army)).toBe(loadoutCodeWithoutTalent);
      });
    });

    describe("containing Arthas", () => {
      test("generates a valid loadout code", () => {
        const army: Army = {
          leader: getTroop("ArthasMenethil", 1),
          troops: [
            getTroop("SkeletonParty", 2),
            getTroop("GryphonRider", 0),
            getTroop("Pyromancer", 1),
            getTroop("Worgen", 1),
            getTroop("WitchDoctor", 2),
            getTroop("FaerieDragon", 1),
          ],
        };

        expect(generateLoadoutCode(army)).toBe(loadoutCodeWithArthas);
      });
    });
  });

  describe("with an invalid army", () => {
    describe("containing no leader", () => {
      test("raises an error", () => {
        const army = {
          troops: [
            getTroop("SkeletonParty", 2),
            getTroop("GryphonRider", 0),
            getTroop("Pyromancer", 1),
            getTroop("Worgen", 1),
            getTroop("WitchDoctor", 2),
            getTroop("FaerieDragon", 1),
          ],
        };

        expect(() => generateLoadoutCode(army as unknown as Army)).toThrow(
          "Cannot generate code for an army without a leader"
        );
      });
    });

    describe("containing a leader mini in the troop list", () => {
      test("raises an error", () => {
        const army: Army = {
          leader: getTroop("OldMurkEye"),
          troops: [
            getTroop("YseraTheDreamer"),
            getTroop("GryphonRider"),
            getTroop("Pyromancer"),
            getTroop("Worgen"),
            getTroop("WitchDoctor"),
            getTroop("FaerieDragon"),
          ],
        };

        expect(() => generateLoadoutCode(army as unknown as Army)).toThrow(
          "Cannot generate code for an army with a leader as a regular troop"
        );
      });
    });

    describe("containing a regular mini as the leader", () => {
      test("raises an error", () => {
        const army: Army = {
          leader: getTroop("AncientOfWar"),
          troops: [
            getTroop("SkeletonParty"),
            getTroop("GryphonRider"),
            getTroop("Pyromancer"),
            getTroop("Worgen"),
            getTroop("WitchDoctor"),
            getTroop("FaerieDragon"),
          ],
        };

        expect(() => generateLoadoutCode(army as unknown as Army)).toThrow(
          "Cannot generate code for an army with a regular mini as leader"
        );
      });
    });

    describe("containing no troops", () => {
      test("raises an error", () => {
        const army: Army = {
          leader: getTroop("BaronRivendare"),
          troops: [],
        };

        expect(() => generateLoadoutCode(army)).toThrow(
          "Unexpected number of toops. Expected 6, got 0"
        );
      });
    });

    describe("containing too few troops", () => {
      test("raises an error", () => {
        const army: Army = {
          leader: getTroop("BaronRivendare"),
          troops: [
            getTroop("SkeletonParty", 2),
            getTroop("GryphonRider", 0),
            getTroop("Pyromancer", 1),
            getTroop("Worgen", 1),
            getTroop("WitchDoctor", 2),
          ],
        };

        expect(() => generateLoadoutCode(army)).toThrow(
          "Unexpected number of toops. Expected 6, got 5"
        );
      });
    });

    describe("containing too many troops", () => {
      test("raises an error", () => {
        const army: Army = {
          leader: getTroop("BaronRivendare"),
          troops: [
            getTroop("SkeletonParty"),
            getTroop("GryphonRider"),
            getTroop("Pyromancer"),
            getTroop("Worgen"),
            getTroop("WitchDoctor"),
            getTroop("Abomination"),
            getTroop("DireBatlings"),
          ],
        };

        expect(() => generateLoadoutCode(army)).toThrow(
          "Unexpected number of toops. Expected 6, got 7"
        );
      });
    });

    describe("containing duplicate troops", () => {
      test("raises an error", () => {
        const army: Army = {
          leader: getTroop("BaronRivendare"),
          troops: [
            getTroop("SkeletonParty"),
            getTroop("GryphonRider"),
            getTroop("Pyromancer"),
            getTroop("Worgen"),
            getTroop("Abomination"),
            getTroop("Abomination"),
          ],
        };

        expect(() => generateLoadoutCode(army)).toThrow(
          "Cannot generate code for an army containing duplicate troops"
        );
      });
    });
  });
});
