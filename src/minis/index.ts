import { TalentIndex, Troop } from "../types";
import { Mini, MiniId } from "../types";
import minis from "./minis.json";

const allMinis = minis as Record<MiniId, Mini>;

export function getMiniDefinition(miniIdOrNumber: MiniId | number) {
  if (typeof miniIdOrNumber === "number") {
    return Object.values(allMinis).find(({ id }) => id === miniIdOrNumber);
  }

  return allMinis[miniIdOrNumber as MiniId];
}

export function getAllMiniDefinitions() {
  return Object.values(allMinis);
}

export function getAllMiniIds() {
  return Object.keys(allMinis).sort() as MiniId[];
}

export function getTroop(
  troopId: MiniId | number,
  talentIndex?: TalentIndex
): Troop {
  const miniDefinition = getMiniDefinition(troopId);
  const talent =
    talentIndex !== undefined
      ? miniDefinition.availableTalents[talentIndex]
      : undefined;

  return {
    ...miniDefinition,
    talent,
  };
}
