/**
 * Copyright 2019-present Reece Dunham
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Minions from "./Minions"
import RomanNumeral from "js-roman-numerals"
import {
    woodMinions,
    farmCommon,
    endermanProgression,
    oresCommon,
    almostWoodButNotQuite,
    pigProgression,
    ghastProgression,
    melonProgression,
    wheatProgression,
    carrotProgression
} from "./Store"

/**
 * @default
 * @function
 * @param tier The tier (in roman numeral string form) to use
 * @param minion The minion name to use
 * @todo Finish putting all minions in
 */
export default (tier, minion) => {
    let e = new RomanNumeral(tier).toString()

    switch (minion) {
        case Minions.foraging:
        case Minions.spider:
        case Minions.undead:
        case Minions.undeadbones:
        case Minions.magmacube:
        case Minions.clay:
        case Minions.obsidian:
        case Minions.sand:
        case Minions.cobblestone:
            return woodMinions[e]
        case Minions.cactus:
        case Minions.desertcane:
        case Minions.potato:
        case Minions.redstone:
        case Minions.glowstone:
            return farmCommon[e]
        case Minions.enderman:
            return endermanProgression[e]
        case Minions.emerald:
        case Minions.diamond:
        case Minions.netherquartz:
        case Minions.iron:
        case Minions.gold:
        case Minions.coal:
        case Minions.slime:
        case Minions.blaze:
            return oresCommon[e]
        case Minions.chicken:
        case Minions.netherwart:
            return almostWoodButNotQuite[e]
        case Minions.pig:
        case Minions.sheep:
            return pigProgression[e]
        case Minions.ghast:
            return ghastProgression[e]
        case Minions.melon:
            return melonProgression[e]
        case Minions.wheat:
            return wheatProgression[e]
        case Minions.carrot:
            return carrotProgression[e]
        default:
            return ""
    }
}

/**
 * @description Calculate cost of enchanted item
 * @param tier The tier
 * @param minion The minion's name
 * @param total The total raw items required for the tier
 * @see ResultHolder
 * @returns an array with the metadata
 *
 * Returned data:
 * - Index 0: Raw items per enchanted item
 * - Index 1: Different cost then most other enchanted items? (typically false)
 * - Index 2: Tier requires enchanted items (for ResultHolder component)
 */
export let enchantedItemCost = (tier, minion, total) => {
    /* eslint-disable */
    let l = [0, true, new RomanNumeral(tier).toInt() >= 4 && total % 1 == 0]

    if (minion == Minions.enderman.toString()) {
        l[0] = 20
    } else if (minion == Minions.ghast.toString()) {
        l[0] = 5
    } else if (
        minion == Minions.spider.toString() ||
        minion == Minions.cavespider.toString()
    ) {
        l[0] = 192
    } else {
        l[0] = 160
        l[1] = false
    }

    return l
    /* eslint-enable */
}
