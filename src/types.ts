interface UnitMessage {
  miniId: number;
  talentId: TalentIndex;
}

export interface ArmyMessage extends UnitMessage {
  // UnitMessage elements at this level represent the leader
  units: UnitMessage[];
}

/** Defines a mini structure */
export interface Mini {
  id: number;
  name: string;
  availableTalents: Talents;
}

export interface Army {
  leader: Troop;
  troops: Troop[];
}

/** A Troop is a `Mini` with an optional selected talent */
export interface Troop extends Mini {
  talent?: Talent;
}

export type TalentIndex = 0 | 1 | 2;
export type Talents = [Talent, Talent, Talent];
export interface Talent {
  name: string;
}
