import Minions from "./Minions"
import RomanNumeral from "js-roman-numerals"
import { woodMinions, combatCommon, farmCommon } from "./Store"

export default (tier, minion) => {
    let e = new RomanNumeral(tier).toString()

    switch (minion) {
        case Minions.foraging.toString():
            return woodMinions[e]
        case Minions.spider.toString():
        case Minions.undead.toString():
        case Minions.undeadbones.toString():
        case Minions.magmacube.toString():
            return combatCommon[e]
        case Minions.cactus.toString():
        case Minions.desertcane.toString():
        case Minions.potato.toString():
            return farmCommon[e]
        default:
            return ""
    }
}
