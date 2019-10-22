import Minions from "./Minions"
import "../js-roman-numerals"
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

let farmCommon = {
    I: 128,
    II: 256,
    III: 512,
    IV: 1280,
    V: 3840,
    VI: 10240,
    VII: 20480,
    VIII: 40960,
    IX: 81920,
    X: 204800,
    XI: 409600
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
        case Minions.cactus.toString():
        case Minions.desertcane.toString():
        case Minions.potato.toString():
            return farmCommon[e]
        default:
            return ""
    }
}
