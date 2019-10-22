import Minions from "./Minions"
import RomanNumeral from "js-roman-numerals"

let woodMinions = {
    I: 80
}

let machineMinionType = minionName => {
    switch (minionName) {
        case Minions.birch.toString():
        case Minions.oak.toString():
        case Minions.darkoak.toString():
        case Minions.jungle.toString():
        case Minions.savannah.toString():
            return 2
        default:
            return null
    }
}

export default (tier, minion) => {
    let minionAsInt = machineMinionType(minion)
    if (minionAsInt === 2) {
        return woodMinions[new RomanNumeral(tier).toString()]
    }
    return ""
}
