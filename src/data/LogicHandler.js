import Minions from "./Minions"
import RomanNumeral from "js-roman-numerals"
import {
    woodMinions,
    combatCommon,
    farmCommon,
    someMiningStuff,
    endermanProgression,
    oresCommon
} from "./Store"

export default (tier, minion) => {
    let e = new RomanNumeral(tier).toString()

    switch (minion) {
        case Minions.foraging.toString():
            return woodMinions[e]
        case Minions.spider.toString():
        case Minions.undead.toString():
        case Minions.undeadbones.toString():
        case Minions.magmacube.toString():
        case Minions.clay.toString():
            return combatCommon[e]
        case Minions.cactus.toString():
        case Minions.desertcane.toString():
        case Minions.potato.toString():
            return farmCommon[e]
        case Minions.obsidian.toString():
        case Minions.sand.toString():
            return someMiningStuff[e]
        case Minions.enderman.toString():
            return endermanProgression[e]
        case Minions.emerald.toString():
        case Minions.diamond.toString():
        case Minions.netherquartz.toString():
        case Minions.iron.toString():
        case Minions.gold.toString():
        case Minions.coal.toString():
            return oresCommon[e]
        default:
            return ""
    }
}
