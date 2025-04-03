# `warcraft-rumble`

`warcraft-rumble` is a library created with the main goal of working with Warcraft Rumble loadout codes.

Warcraft Rumble loadout codes are protobuf's encoded in base-64 strings. To encode and decode protobufs, we rely on the [`protobufjs` NPM package](https://www.npmjs.com/package/protobufjs).

As a side effect, it also contains a [full JSON 'database'](./src/minis/minis.json) of the (currently) available leaders and minis, as well as their talents, which can be used for building army loadouts.

## Installation

```shell
npm i warcraft-rumble
```

## Usage

### Parsing loadout codes

The library is permissive to the codes it reads, so you can try parsing a code with or without the `rumblo:` prefix:

```typescript
import { parseLoadoutCode } from "warcraft-rumble";

const army = parseLoadoutCode(
  "rumblo:CFIQAhoECCsQABoECEQQARoECBwQAhoECDIQABoECFkQAhoECDEQAg=="
);
const sameArmy = parseLoadoutCode(
  "CFIQAhoECCsQABoECEQQARoECBwQAhoECDIQABoECFkQAhoECDEQAg=="
);

// `army` and `sameArmy` will have:
// Leader: Sylvanas Windrunner (Wail of the Banshee)
// Troops: Gargoyle (Wing Buffet)
//         Plague Farmer (Virulence)
//         Darkspear Troll (Serpent Sting)
//         Harpies (Infectious Swipes)
//         Witch Doctor (Spirit Ward)
//         Gryphon Rider (Mighty Throw)
```

### Generating loadout codes

This library will attempt its best to generate only valid codes, so it does some validations before generating the codes:

- A leader must be present
- The leader unit must be a leader mini
- The number of regular troops must be 6
- None of the units may be a leader mini
- Cannot have duplicate minis

```typescript
import { generateLoadoutCode } from "warcraft-rumble";

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

const loadoutCode = generateLoadoutCode(army);

// rumblo:CFIQAhoECCsQABoECEQQARoECBwQAhoECDIQABoECFkQAhoECDEQAg==
```

### Development

Start by checking out the repo. Run `npm install` to install the dependencies, and then `npm test` to run the test suite.

### Contributing

Feel free to submit bug reports and pull requests on GitHub at https://github.com/gokuu/warcraft-rumble.

### License

This package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

---

Warcraft Rumble © 2025 Blizzard Entertainment, Inc.
