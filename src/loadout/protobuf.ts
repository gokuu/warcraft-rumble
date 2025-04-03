import * as protobuf from "protobufjs";
import { TalentIndex } from "../types";

export interface UnitMessage {
  miniId: number;
  talentId?: TalentIndex;
}

export interface ArmyMessage extends UnitMessage {
  // UnitMessage elements at this level represent the leader
  units: UnitMessage[];
}

// export const ArmyMessageStructure =
//   protobuf.Root.fromJSON(protobufDefinition).lookupType("Army");

export const ArmyMessageStructure = protobuf
  .parse(
    `
    syntax = "proto3";
    package warcraftRumble;

    message Army {
      int32 miniId = 1;
      optional int32 talentId = 2;
      repeated Unit units = 3;
    }

    message Unit {
      int32 miniId = 1;
      optional int32 talentId = 2;
    }
  `
  )
  .root.lookupType("Army");
