import Minions from "./Minions"
import RomanNumeral from "js-roman-numerals"

let woodMinions = {
    I: 80
}

let machineMinionType = n => {
    switch (n) {
        case Minions.foraging.toString():
            return 2
        default:
            return 1
    }
}

export default (tier, minion) => {
    let minionAsInt = machineMinionType(minion)
    if (minionAsInt === 2) {
        return woodMinions[new RomanNumeral(tier).toString()]
    }
    return ""
}
