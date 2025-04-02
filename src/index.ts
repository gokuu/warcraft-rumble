import * as protobuf from "protobufjs";
import { getTroop } from "./minis/leaders";

import protobufDefinition from "./deck.json";
import { ArmyMessage, Army } from "./types";

function loadProtobuf() {
  const root = protobuf.Root.fromJSON(protobufDefinition);
  return root.lookupType("Army");
}

function convertArmyMessageToArmy({
  miniId: leaderId,
  talentId: leaderTalentId,
  units,
}: ArmyMessage): Army {
  const leader = getTroop(leaderId, leaderTalentId);
  const troops = units.map((unit) => getTroop(unit.miniId, unit.talentId));

  return { leader, troops };
}

export function loadCode(code: string): Army {
  const base64 = code.replace(/^rumblo:/, "");
  // console.log({ base64 });
  const bytes = atob(base64);
  // console.log({ bytes });
  const buffer = Buffer.from(bytes);

  const message = loadProtobuf();
  const decoded = message.decode(buffer);
  // console.log({ decoded: JSON.stringify(decoded) });

  var decodedObject = message.toObject(decoded) as ArmyMessage;
  const army = convertArmyMessageToArmy(decodedObject);

  return army;
}
