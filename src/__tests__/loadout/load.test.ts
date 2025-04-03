import { parseLoadoutCode } from "../../loadout";

const loadoutCode =
  "rumblo:CFIQAhoECCsQABoECEQQARoECBwQAhoECDIQABoECFkQAhoECDEQAg==";
const loadoutCodeWithoutPrefix =
  "CFIQAhoECCsQABoECEQQARoECBwQAhoECDIQABoECFkQAhoECDEQAg==";
const loadoutCodeWithPriestess =
  "rumblo:CEMQABoECCYQAhoECBUQABoECF0QARoECAkQABoECB4QABoECFYQAQ==";

const loadoutCodeWithoutTalent =
  "rumblo:CFIQABoECAQQABoECAUQARoECAcQARoECAgQABoCCFEaBAgsEAA=";

const loadoutCodeWithArthas =
  "rumblo:CF4QARoECEwQAhoECDEQABoECEYQARoECFoQARoECFkQAhoECCYQAQ==";

const invalidLoadoutCodeBase64 =
  "rumblo:XCFIQAhoECCsQABoECEQQARoECBwQAhoECDIQABoECFkQAhoECDEQAg==";
const invalidLoadoutCodeProtobuf = "rumblo:SW52YWxpZCBwcm90b2J1ZiBtZXNzYWdl";

describe("parseLoadoutCode()", () => {
  describe("correctly loads", () => {
    test("a valid loadout code", () => {
      const army = parseLoadoutCode(loadoutCode);

      expect(army.leader.name).toBe("Sylvanas Windrunner");
      expect(army.leader.talent?.name).toBe("Wail of the Banshee");

      expect(army.troops[0].name).toBe("Gargoyle");
      expect(army.troops[0].talent?.name).toBe("Wing Buffet");

      expect(army.troops[1].name).toBe("Plague Farmer");
      expect(army.troops[1].talent?.name).toBe("Virulence");

      expect(army.troops[2].name).toBe("Darkspear Troll");
      expect(army.troops[2].talent?.name).toBe("Serpent Sting");

      expect(army.troops[3].name).toBe("Harpies");
      expect(army.troops[3].talent?.name).toBe("Infectious Swipes");

      expect(army.troops[4].name).toBe("Witch Doctor");
      expect(army.troops[4].talent?.name).toBe("Spirit Ward");

      expect(army.troops[5].name).toBe("Gryphon Rider");
      expect(army.troops[5].talent?.name).toBe("Mighty Throw");
    });

    test("a valid loadout code without a prefix", () => {
      const army = parseLoadoutCode(loadoutCode);

      expect(army.leader.name).toBe("Sylvanas Windrunner");
      expect(army.leader.talent?.name).toBe("Wail of the Banshee");

      expect(army.troops[0].name).toBe("Gargoyle");
      expect(army.troops[0].talent?.name).toBe("Wing Buffet");

      expect(army.troops[1].name).toBe("Plague Farmer");
      expect(army.troops[1].talent?.name).toBe("Virulence");

      expect(army.troops[2].name).toBe("Darkspear Troll");
      expect(army.troops[2].talent?.name).toBe("Serpent Sting");

      expect(army.troops[3].name).toBe("Harpies");
      expect(army.troops[3].talent?.name).toBe("Infectious Swipes");

      expect(army.troops[4].name).toBe("Witch Doctor");
      expect(army.troops[4].talent?.name).toBe("Spirit Ward");

      expect(army.troops[5].name).toBe("Gryphon Rider");
      expect(army.troops[5].talent?.name).toBe("Mighty Throw");
    });

    test("correctly decodes a loadout code with Priestess", () => {
      const army = parseLoadoutCode(loadoutCodeWithPriestess);

      expect(army.leader.name).toBe("Onu, Ancient of Lore");
      expect(army.leader.talent?.name).toBe("Barkskin");

      expect(army.troops[0].name).toBe("Faerie Dragon");
      expect(army.troops[0].talent?.name).toBe("Fae Blessing");

      expect(army.troops[1].name).toBe("Bog Beast");
      expect(army.troops[1].talent?.name).toBe("Flourish");

      expect(army.troops[2].name).toBe("Priestess");
      expect(army.troops[2].talent?.name).toBe("Empowered Renew");

      expect(army.troops[3].name).toBe("Execute");
      expect(army.troops[3].talent?.name).toBe("Blodthirsty");

      expect(army.troops[4].name).toBe("Dire Batlings");
      expect(army.troops[4].talent?.name).toBe("Midnight's Call");

      expect(army.troops[5].name).toBe("Warsong Grunts");
      expect(army.troops[5].talent?.name).toBe("Guard Duty");
    });

    test("correctly decodes a loadout code with a mini having no talent selected", () => {
      const army = parseLoadoutCode(loadoutCodeWithoutTalent);

      expect(army.leader.name).toBe("Sylvanas Windrunner");
      expect(army.leader.talent?.name).toBe("Black Arrow");

      expect(army.troops[0].name).toBe("Chain Lightning");
      expect(army.troops[0].talent?.name).toBe("Brilliant Flash");

      expect(army.troops[1].name).toBe("Cheat Death");
      expect(army.troops[1].talent?.name).toBe("Vampirism");

      expect(army.troops[2].name).toBe("Earth And Moon");
      expect(army.troops[2].talent?.name).toBe("Nature's Grace");

      expect(army.troops[3].name).toBe("Eclipse");
      expect(army.troops[3].talent?.name).toBe("Solar Flare");

      expect(army.troops[4].name).toBe("Swole Troll");
      expect(army.troops[4].talent?.name).toBeUndefined();

      expect(army.troops[5].name).toBe("Ghoul");
      expect(army.troops[5].talent?.name).toBe("Taste For Blood");
    });

    test("correctly decodes a loadout code with Arthas", () => {
      const army = parseLoadoutCode(loadoutCodeWithArthas);

      expect(army.leader.name).toBe("Arthas Menethil");
      expect(army.leader.talent?.name).toBe("Necrotic Plague");

      expect(army.troops[0].name).toBe("Skeleton Party");
      expect(army.troops[0].talent?.name).toBe("Ritual of Rime");

      expect(army.troops[1].name).toBe("Gryphon Rider");
      expect(army.troops[1].talent?.name).toBe("Air Drop");

      expect(army.troops[2].name).toBe("Pyromancer");
      expect(army.troops[2].talent?.name).toBe("Conflagrate");

      expect(army.troops[3].name).toBe("Worgen");
      expect(army.troops[3].talent?.name).toBe("Premeditation");

      expect(army.troops[4].name).toBe("Witch Doctor");
      expect(army.troops[4].talent?.name).toBe("Spirit Ward");

      expect(army.troops[5].name).toBe("Faerie Dragon");
      expect(army.troops[5].talent?.name).toBe("Invisibility");
    });
  });

  describe("raises an error", () => {
    test("when provided a code with invalid base64", () => {
      expect(() => parseLoadoutCode(invalidLoadoutCodeBase64)).toThrow(
        "Invalid base64 string"
      );
    });

    test("when provided a code with invalid protobuf definition", () => {
      expect(() => parseLoadoutCode(invalidLoadoutCodeProtobuf)).toThrow(
        "Invalid loadout message"
      );
    });
  });
});
