import Minions from "./Minions"
import RomanNumeral from "js-roman-numerals"

let woodMinions = {
    I: 80,
    II: 160,
    III: 320,
    IV: 512,
    V: 1280,
    VI: 2560,
    VII: 5120,
    VIII: 10240,
    IX: 20480,
    X: 40960,
    XI: 81920
}

let combatCommon = {
    I: 80,
    II: 160,
    III: 320,
    IV: 512,
    V: 1280,
    VI: 2560,
    VII: 5120,
    VIII: 10240,
    IX: 20480,
    X: 40960,
    XI: 81920
}

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
        default:
            return ""
    }
}
