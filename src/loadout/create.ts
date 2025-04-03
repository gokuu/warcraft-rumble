import { Army, LoadoutError, TalentIndex } from "../types";
import { ArmyMessage, ArmyMessageStructure, UnitMessage } from "./protobuf";

function _arrayBufferToBase64(buffer: Uint8Array) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// Obtained from https://gist.github.com/jonleighton/958841
function base64ArrayBuffer(arrayBuffer: Uint8Array) {
  var base64 = "";
  var encodings =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  var bytes = new Uint8Array(arrayBuffer);
  var byteLength = bytes.byteLength;
  var byteRemainder = byteLength % 3;
  var mainLength = byteLength - byteRemainder;

  var a, b, c, d;
  var chunk;

  // Main loop deals with bytes in chunks of 3
  for (var i = 0; i < mainLength; i = i + 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
    d = chunk & 63; // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder == 1) {
    chunk = bytes[mainLength];

    a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3) << 4; // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + "==";
  } else if (byteRemainder == 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

    a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15) << 2; // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + "=";
  }

  return base64;
}

function convertArmyToArmyMessage({ leader, troops }: Army): ArmyMessage {
  const leaderMessage: UnitMessage = { miniId: leader.id };
  if (leader.talent) {
    leaderMessage.talentId = leader.availableTalents.indexOf(
      leader.talent
    ) as TalentIndex;
  }

  const units: UnitMessage[] = troops.map((troop) => {
    const unitMessage: UnitMessage = { miniId: troop.id };

    if (troop.talent) {
      unitMessage.talentId = troop.availableTalents.indexOf(
        troop.talent
      ) as TalentIndex;
    }

    return unitMessage;
  });

  const message: ArmyMessage = {
    ...leaderMessage,
    units,
  };

  return message;
}

export function generateLoadoutCode(army: Army): string {
  if (!army.leader) {
    throw new LoadoutError("Cannot generate code for an army without a leader");
  }

  if (army.leader.type !== "leader") {
    throw new LoadoutError(
      "Cannot generate code for an army with a regular mini as leader"
    );
  }

  if (army.troops.length !== 6) {
    throw new LoadoutError(
      `Unexpected number of toops. Expected 6, got ${army.troops.length}`
    );
  }

  if (army.troops.some(({ type }) => type === "leader")) {
    throw new LoadoutError(
      "Cannot generate code for an army with a leader as a regular troop"
    );
  }

  if ([...new Set(army.troops.map(({ id }) => id))].length < 6) {
    throw new LoadoutError(
      "Cannot generate code for an army containing duplicate troops"
    );
  }

  const armyMessage = convertArmyToArmyMessage(army);
  const message = ArmyMessageStructure.create(armyMessage);
  const buffer = ArmyMessageStructure.encode(message).finish();
  const base64 = base64ArrayBuffer(buffer);

  return `rumblo:${base64}`;
}
