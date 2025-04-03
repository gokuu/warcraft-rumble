export class LoadoutError extends Error {}

/** Defines a mini structure */
export interface Mini {
  id: number;
  name: string;
  type?: "leader";
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

export type MiniId =
  | "AngryChickens"
  | "ArcaneBlast"
  | "Blizzard"
  | "ChainLightning"
  | "CheatDeath"
  | "DeepBreath"
  | "EarthAndMoon"
  | "Eclipse"
  | "Execute"
  | "HolyNova"
  | "LivingBomb"
  | "Polymorph"
  | "SmokeBomb"
  | "Abomination"
  | "AncientOfWar"
  | "AnubArak"
  | "Banshee"
  | "BaronRivendare"
  | "BatRider"
  | "BloodmageThalnos"
  | "BogBeast"
  | "CairneBloodhoof"
  | "Cenarius"
  | "CharlgaRazorflank"
  | "Chimaera"
  | "CoreHounds"
  | "DarkIronMiner"
  | "DarkspearTroll"
  | "DefiasBandits"
  | "DireBatlings"
  | "OrgrimDoomhammer"
  | "Drake"
  | "GeneralDrakkisath"
  | "DruidOfTheClaw"
  | "Dryad"
  | "EarthElemental"
  | "EmperorThaurissan"
  | "FaerieDragon"
  | "FireElemental"
  | "Firehammer"
  | "Flamewaker"
  | "FrostwolfShaman"
  | "GnollBrute"
  | "GrommashHellscream"
  | "Harpies"
  | "Footmen"
  | "Gargoyle"
  | "Ghoul"
  | "SafePilot"
  | "GoblinSappers"
  | "GryphonRider"
  | "HarvestGolem"
  | "HeadlessHorseman"
  | "Hogger"
  | "Huntress"
  | "JainaProudmoore"
  | "MaievShadowsong"
  | "MalfurionStormrage"
  | "MeatWagon"
  | "MoltenGiant"
  | "Moonkin"
  | "Mountaineer"
  | "MurlocTidehunters"
  | "Necromancer"
  | "OgreMage"
  | "OldMurkEye"
  | "OnuAncientOfLore"
  | "PlagueFarmer"
  | "Prowler"
  | "Pyromancer"
  | "Quillboar"
  | "Ragnaros"
  | "Raptors"
  | "RendBlackhand"
  | "SkeletonParty"
  | "Skeletons"
  | "Sneed"
  | "Spiderlings"
  | "StonehoofTauren"
  | "SwoleTroll"
  | "SylvanasWindrunner"
  | "TirionFordring"
  | "Treant"
  | "Vultures"
  | "WarsongGrunts"
  | "WarsongRaider"
  | "WhelpEggs"
  | "WitchDoctor"
  | "Worgen"
  | "YseraTheDreamer"
  | "Priestess"
  | "ArthasMenethil";
