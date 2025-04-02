import { Talents } from "../types";
import { minis } from "./minis";

const talentMappings: Record<number, Talents> = {
  [minis.Abomination]: [
    { name: "Noxious Presence" },
    { name: "Cannonball" },
    { name: "Fresh Meat" },
  ],
  [minis.AngryChickens]: [
    { name: "Snackrifice" },
    { name: "Walking Crate" },
    { name: "Furious Fowl" },
  ],
  [minis.AncientOfWar]: [
    { name: "Sapling" },
    { name: "Behemoth" },
    { name: "Lightning Rod" },
  ],
  [minis.AnubArak]: [
    { name: "Regenerate" },
    { name: "Explosive Shells" },
    { name: "Trap Door" },
  ],
  [minis.ArcaneBlast]: [
    { name: "Amplification" },
    { name: "Arcane Power" },
    { name: "Torrent" },
  ],
  [minis.ArthasMenethil]: [
    { name: "Death Grip" },
    { name: "Necrotic Plague" },
    { name: "Purgatory" },
  ],
  [minis.Banshee]: [
    { name: "Soul Eruption" },
    { name: "Unholy Frenzy" },
    { name: "Will of the Necropolis" },
  ],
  [minis.BaronRivendare]: [
    { name: "Death Pact" },
    { name: "Skeletal Frenzy" },
    { name: "Chill Of The Grave" },
  ],
  [minis.BatRider]: [
    { name: "Flaming Pitch" },
    { name: "Enchanted Vials" },
    { name: "Fiery Surplus" },
  ],
  [minis.Blizzard]: [
    { name: "Coldsnap" },
    { name: "Icecrown" },
    { name: "Brittle Ice" },
  ],
  [minis.BloodmageThalnos]: [
    { name: "Bane" },
    { name: "Drain Life" },
    { name: "Dominance" },
  ],
  [minis.BogBeast]: [
    { name: "Flourish" },
    { name: "Rampant Growth" },
    { name: "Living Wood" },
  ],
  [minis.CairneBloodhoof]: [
    { name: "Reincarnation" },
    { name: "Plainsrunning" },
    { name: "Aftershock" },
  ],
  [minis.Cenarius]: [
    { name: "Revitalize" },
    { name: "Force of Nature" },
    { name: "Wild Growth" },
  ],
  [minis.ChainLightning]: [
    { name: "Brilliant Flash" },
    { name: "Storm's Reach" },
    { name: "Reverberation" },
  ],
  [minis.CharlgaRazorflank]: [
    { name: "Nature's Grasp" },
    { name: "Cavernous Mist" },
    { name: "Spirit Passage" },
  ],
  [minis.CheatDeath]: [
    { name: "Seal Fate" },
    { name: "Vampirism" },
    { name: "Apocalypse" },
  ],
  [minis.Chimaera]: [
    { name: "Corrosive Breath" },
    { name: "Frost Shock" },
    { name: "Leviathan" },
  ],
  [minis.CoreHounds]: [
    { name: "Fiery Rebirth" },
    { name: "Guard Dog" },
    { name: "Eternal Bond" },
  ],
  [minis.DarkIronMiner]: [
    { name: "Dark Iron Armaments" },
    { name: "Gold Mine" },
    { name: "Dwarven Ambition" },
  ],
  [minis.DarkspearTroll]: [
    { name: "Big Bad Voodoo" },
    { name: "Headhunting" },
    { name: "Serpent Sting" },
  ],
  [minis.DeepBreath]: [
    { name: "Attunement" },
    { name: "Melting Point" },
    { name: "Double Dragon" },
  ],
  [minis.DefiasBandits]: [
    { name: "Deadly Poison" },
    { name: "Pick Lock" },
    { name: "Last Resort" },
  ],
  [minis.DireBatlings]: [
    { name: "Midnight's Call" },
    { name: "Soundbite" },
    { name: "Guano Happens" },
  ],
  [minis.Drake]: [
    { name: "Mother Drake" },
    { name: "Roost" },
    { name: "Engulfing Flames" },
  ],
  [minis.DruidOfTheClaw]: [
    { name: "Regrowth" },
    { name: "Rejuvenation" },
    { name: "Leader of the Pack" },
  ],
  [minis.Dryad]: [
    { name: "Barrage" },
    { name: "Nature's Swiftness" },
    { name: "Thorns" },
  ],
  [minis.EarthAndMoon]: [
    { name: "Moonfury" },
    { name: "Nature's Grace" },
    { name: "Balance" },
  ],
  [minis.EarthElemental]: [
    { name: "Ready to Rumble" },
    { name: "Shrapnel Blast" },
    { name: "Obsidian Shard" },
  ],
  [minis.Eclipse]: [
    { name: "Solar Flare" },
    { name: "Umbral Force" },
    { name: "Celestial Focus" },
  ],
  [minis.EmperorThaurissan]: [
    { name: "Moira's Wit" },
    { name: "Hubris" },
    { name: "Incinerate" },
  ],
  [minis.Execute]: [
    { name: "Blodthirsty" },
    { name: "Killing Spree" },
    { name: "Overpower" },
  ],
  [minis.FaerieDragon]: [
    { name: "Phase Shift" },
    { name: "Invisibility" },
    { name: "Fae Blessing" },
  ],
  [minis.FireElemental]: [
    { name: "Immolation Aura" },
    { name: "Molten Core" },
    { name: "Fan The Flames" },
  ],
  [minis.Firehammer]: [
    { name: "Moultin' Metal" },
    { name: "Blazing Speed" },
    { name: "Heightened Rage" },
  ],
  [minis.Flamewaker]: [
    { name: "Heat Stroke" },
    { name: "Engulf" },
    { name: "Backdraft" },
  ],
  [minis.Footmen]: [
    { name: "Shield Bash" },
    { name: "Fortification" },
    { name: "Last Stand" },
  ],
  [minis.FrostwolfShaman]: [
    { name: "Earthwall Totem" },
    { name: "Lightning Mastery" },
    { name: "Earth Shield" },
  ],
  [minis.Gargoyle]: [
    { name: "Wing Buffet" },
    { name: "Obsidian Statue" },
    { name: "Aerial Superiority" },
  ],
  [minis.GeneralDrakkisath]: [
    { name: "Chromatic Scales" },
    { name: "Piecing Blows" },
    { name: "Lasting Legacy" },
  ],
  [minis.Ghoul]: [
    { name: "Taste For Blood" },
    { name: "Feeding Frenzy" },
    { name: "Unholy Frenzy" },
  ],
  [minis.GnollBrute]: [
    { name: "Rabid" },
    { name: "Pillage" },
    { name: "Thick Hide" },
  ],
  [minis.GoblinSappers]: [
    { name: "Extra BOOM" },
    { name: "Rocket Powered Turbo Boots" },
    { name: "Crude Gunpowder" },
  ],
  [minis.GrommashHellscream]: [
    { name: "Bladestorm" },
    { name: "Mirror Image" },
    { name: "Savage Strikes" },
  ],
  [minis.GryphonRider]: [
    { name: "Air Drop" },
    { name: "Odyn's Fury" },
    { name: "Mighty Throw" },
  ],
  [minis.Harpies]: [
    { name: "Infectious Swipes" },
    { name: "Trinket Collectors" },
    { name: "Talon Dive" },
  ],
  [minis.HarvestGolem]: [
    { name: "Trojan Chickens" },
    { name: "Unstable Core" },
    { name: "Bountiful Harvest" },
  ],
  [minis.HeadlessHorseman]: [
    { name: "Night Watch" },
    { name: "Decapitate" },
    { name: "Neigh Death Experience" },
  ],
  [minis.Hogger]: [
    { name: "Ham Hock" },
    { name: "Spoiled Meat" },
    { name: "Fatal Frenzy" },
  ],
  [minis.HolyNova]: [
    { name: "Inner Fire" },
    { name: "Renew" },
    { name: "Amplify Magic" },
  ],
  [minis.Huntress]: [
    { name: "Darnassian Steel" },
    { name: "Elven Might" },
    { name: "Shadowmeld" },
  ],
  [minis.JainaProudmoore]: [
    { name: "Blink" },
    { name: "Clearcasting" },
    { name: "Flurry" },
  ],
  [minis.LivingBomb]: [
    { name: "Burden Of Fate" },
    { name: "Chain Reaction" },
    { name: "Blast Radius" },
  ],
  [minis.MaievShadowsong]: [
    { name: "EnvelopingShadows" },
    { name: "Shadowstep" },
    { name: "Remoseless" },
  ],
  [minis.MalfurionStormrage]: [
    { name: "Natural Salve" },
    { name: "Deep Slumber" },
    { name: "Germinate" },
  ],
  [minis.MeatWagon]: [
    { name: "Meat And Bones" },
    { name: "Filet Trebuchet" },
    { name: "Greased Gears" },
  ],
  [minis.MoltenGiant]: [
    { name: "Threatening Presence" },
    { name: "Blood Of The Mountain" },
    { name: "Bolster" },
  ],
  [minis.Moonkin]: [
    { name: "Vengeance" },
    { name: "Moonglow" },
    { name: "Typhoon" },
  ],
  [minis.Mountaineer]: [
    { name: "Frenzied Spirit" },
    { name: "Mend Pets" },
    { name: "Intimidation" },
  ],
  [minis.MurlocTidehunters]: [
    { name: "Safety Bubble" },
    { name: "Careful Aim" },
    { name: "Morelocs" },
  ],
  [minis.Necromancer]: [
    { name: "Cult of the Damned" },
    { name: "Jeweled Skulls" },
    { name: "Breath of the Dying" },
  ],
  [minis.OgreMage]: [
    { name: "Frostfire Bolt" },
    { name: "Ignite" },
    { name: "Avarice" },
  ],
  [minis.OldMurkEye]: [
    { name: "Tip of the Spear" },
    { name: "Marathon Of The Murlocs" },
    { name: "Electric Eels" },
  ],
  [minis.OnuAncientOfLore]: [
    { name: "Barkskin" },
    { name: "Petrify" },
    { name: "From the Trees!" },
  ],
  [minis.OrgrimDoomhammer]: [
    { name: "Deathless Rage" },
    { name: "Rally the Clan" },
    { name: "Conqueror's Diplomacy" },
  ],
  [minis.PlagueFarmer]: [
    { name: "Parting Gift" },
    { name: "Virulence" },
    { name: "Splashing Pumpkins" },
  ],
  [minis.Polymorph]: [
    { name: "Golden Fleece" },
    { name: "Exploding Sheep" },
    { name: "Stable Transfiguration" },
  ],
  [minis.Priestess]: [
    { name: "Power Word: Shield" },
    { name: "Empowered Renew" },
    { name: "Spirit of Redemption" },
  ],
  [minis.Prowler]: [
    { name: "On The Prowl" },
    { name: "Pack Leader" },
    { name: "Predatory Instincts" },
  ],
  [minis.Pyromancer]: [
    { name: "Pyroblast" },
    { name: "Conflagrate" },
    { name: "Blaze of Glory" },
  ],
  [minis.Quillboar]: [
    { name: "Bristleback" },
    { name: "Tunnel Vision" },
    { name: "Bramble Burst" },
  ],
  [minis.Ragnaros]: [
    { name: "Concussive Blast" },
    { name: "Radiant Flames" },
    { name: "Sons of Flame" },
  ],
  [minis.RendBlackhand]: [
    { name: "Flaming Soul" },
    { name: "Scale and Steel" },
    { name: "Legionnaire" },
  ],
  [minis.Raptors]: [
    { name: "Strength In Numbers" },
    { name: "Fast Food" },
    { name: "Motivation" },
  ],
  [minis.SafePilot]: [
    { name: "Gnomish Cloaking Device" },
    { name: "Comin' In Hot!" },
    { name: "Gnomish Muttonizer" },
  ],
  [minis.SkeletonParty]: [
    { name: "5-Man" },
    { name: "Corpse Run" },
    { name: "Ritual of Rime" },
  ],
  [minis.Skeletons]: [
    { name: "Questing Buddies" },
    { name: "Cackle" },
    { name: "Exhume" },
  ],
  [minis.SmokeBomb]: [
    { name: "Strangers in the Night" },
    { name: "Band Of Thieves" },
    { name: "Through The Shadows" },
  ],
  [minis.Sneed]: [
    { name: "Mine Is Money, Friend!" },
    { name: "Lead with Greed" },
    { name: "Land Grab" },
  ],
  [minis.Spiderlings]: [
    { name: "Bloated Carapace" },
    { name: "Cave Dwellers" },
    { name: "Envenom" },
  ],
  [minis.StonehoofTauren]: [
    { name: "Pummel" },
    { name: "Momentum" },
    { name: "Provoke" },
  ],
  [minis.SwoleTroll]: [
    { name: "Trollnado" },
    { name: "Troll Train" },
    { name: "Meatier Elbow" },
  ],
  [minis.SylvanasWindrunner]: [
    { name: "Black Arrow" },
    { name: "Mind Control" },
    { name: "Wail of the Banshee" },
  ],
  [minis.TirionFordring]: [
    { name: "Divine Shield" },
    { name: "Consecrate" },
    { name: "By The Light" },
  ],
  [minis.Treant]: [
    { name: "Composting" },
    { name: "Uproot" },
    { name: "Propagation" },
  ],
  [minis.Vultures]: [
    { name: "Tendon Rip" },
    { name: "Feeding Frenzy" },
    { name: "Migration" },
  ],
  [minis.WarsongGrunts]: [
    { name: "Blood Pact" },
    { name: "Guard Duty" },
    { name: "Command" },
  ],
  [minis.WarsongRaider]: [
    { name: "Saboteur" },
    { name: "Razing Focus" },
    { name: "Sunder Armor" },
  ],
  [minis.WhelpEggs]: [
    { name: "Rookery" },
    { name: "Flame Burst" },
    { name: "Chromatic Plating" },
  ],
  [minis.WitchDoctor]: [
    { name: "Alchemist" },
    { name: "Amplify Curse" },
    { name: "Spirit Ward" },
  ],
  [minis.Worgen]: [
    { name: "Lone Wolf" },
    { name: "Premeditation" },
    { name: "Frenzy" },
  ],
  [minis.YseraTheDreamer]: [
    { name: "RecurringDream" },
    { name: "Corrupted Dream" },
    { name: "Shared Dream" },
  ],
};

export function getTalentsForMini(miniId: number) {
  return talentMappings[miniId];
}
