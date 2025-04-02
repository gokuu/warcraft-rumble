import { TalentIndex, Troop } from "../types";
import { getMiniDefinition } from "./minis";

export function getTroop(troopId: number, talentIndex?: TalentIndex): Troop {
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
