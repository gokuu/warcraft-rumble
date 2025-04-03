import { Army, LoadoutError, TalentIndex } from "../types";
import { getTroop } from "../minis";
import { ArmyMessage, ArmyMessageStructure } from "./protobuf";

function convertArmyMessageToArmy({
  miniId: leaderId,
  talentId: leaderTalentId,
  units,
}: ArmyMessage): Army {
  const leader = getTroop(leaderId, leaderTalentId);
  const troops = units.map((unit) => getTroop(unit.miniId, unit.talentId));

  return { leader, troops };
}
function removePrefix(code: string) {
  return code.replace(/^rumblo:/, "");
}

function decodeBase64(base64: string) {
  try {
    const bytes = atob(base64);
    return Buffer.from(bytes);
  } catch {
    throw new LoadoutError("Invalid base64 string");
  }
}

function decodeProtobuf(buffer: Buffer) {
  try {
    return ArmyMessageStructure.decode(buffer);
  } catch {
    throw new LoadoutError("Invalid loadout message");
  }
}

export function parseLoadoutCode(code: string): Army {
  const base64 = removePrefix(code);
  const buffer = decodeBase64(base64);
  const decoded = decodeProtobuf(buffer);
  const decodedObject = ArmyMessageStructure.toObject(decoded) as ArmyMessage;
  const army = convertArmyMessageToArmy(decodedObject);

  return army;
}
