import Tiers from "./Tiers"
import Minions from "./Minions"
import RomanNumeral from "js-roman-numerals"

let machineMinionType = minionName => {
    switch (minionName) {
        case Minions.birch:
        case Minions.oak:
        case Minions.darkoak:
        case Minions.jungle:
        case Minions.savannah:
            return 2
        default:
            return null
    }
}

function doStuff(p) {
    return p // placeholder for now
}

export default (tier, minion) => {
    let minionAsInt = machineMinionType(minion)
    let tierInt = new RomanNumeral(tier).toInt()
    return ""
}
