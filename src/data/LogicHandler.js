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

import React from "react"
import Minions from "./Minions"
import RomanNumeral from "js-roman-numerals"
import ErrorHolder from "../components/holders/ErrorHolder"
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
    carrotProgression,
    cowProgression,
    beanProgression,
    lapisProgression,
    iceProgression,
    combat2
} from "./Store"
import { isJsxOrFunc } from "./Common"

/**
 * @function
 * @param tier The tier (in roman numeral form) to use
 * @param minion The minion name to use
 * @todo Finish putting all minions in
 * @returns either the ErrorHolder or the cost data
 */
let cost = (tier, minion) => {
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
        case Minions.mushroom:
            return woodMinions[e]
        case Minions.cactus:
        case Minions.desertcane:
        case Minions.potato:
        case Minions.redstone:
        case Minions.glowstone:
            return farmCommon[e]
        case Minions.emerald:
        case Minions.diamond:
        case Minions.netherquartz:
        case Minions.iron:
        case Minions.gold:
        case Minions.coal:
        case Minions.slime:
        case Minions.blaze:
            return oresCommon[e]
        case Minions.creeper:
        case Minions.cavespider:
            return combat2[e]
        case Minions.chicken:
        case Minions.netherwart:
            return almostWoodButNotQuite[e]
        case Minions.pig:
        case Minions.sheep:
            return pigProgression[e]
        case Minions.enderman:
            return endermanProgression[e]
        case Minions.ghast:
            return ghastProgression[e]
        case Minions.melon:
            return melonProgression[e]
        case Minions.wheat:
            return wheatProgression[e]
        case Minions.carrot:
            return carrotProgression[e]
        case Minions.cow:
            return (
                // eslint-disable-next-line
                e != "XI" ? (
                    cowProgression[e]
                ) : (
                    <ErrorHolder message="Cows need leather for tier 11, and this calculator can't handle two items right now" />
                )
            )
        case Minions.bean:
            return beanProgression[e]
        case Minions.lapislazuli:
            return lapisProgression[e]
        //case Minions.ice:
        //    return iceProgression[e]
        default:
            return (
                <ErrorHolder
                    message="We don't have the data for this minion yet, but don't worry, we will soon"
                    showReportButton={true}
                />
            )
    }
}

/**
 * @function
 * @default
 * @description Get the array of data for the result
 * @param tier The tier
 * @param minion The minion's name
 * @param totalForSelectedTier The total raw items required for the tier
 * @see ResultHolder
 * @returns an array with the metadata
 * @todo handle bundled items
 *
 * Returned data:
 * - Index 0: Raw items per enchanted item
 * - Index 1: Different cost then most other enchanted items? (typically false)
 * - Index 2: Tier requires enchanted items (for ResultHolder component)
 * - Index 3: Show previous tiers
 * - Index 4: Current tier data (nullable!)
 * - Index 5: Cost (either JSX component or int)
 */
let metaArray = (tier, minion) => {
    // it seems eslint thinks of this as a shitshow
    // so outta here eslint
    /* eslint-disable */
    const x = cost(tier, minion)
    const tierInt = new RomanNumeral(tier).toInt()
    let l = [
        // raw items per enchanted item
        0,
        // different cost then normal enchanted items?
        true,
        // show enchanted item cost?
        tierInt >= 4,
        // show previous tier data?
        tierInt < 2 && !isJsxOrFunc(x),
        // previous tier data
        null,
        // raw item cost
        x
    ]

    if (minion == Minions.enderman) {
        l[0] = 20
    } else if (minion == Minions.ghast) {
        l[0] = 5
    } else if (minion == Minions.spider || minion == Minions.cavespider) {
        l[0] = 192
    } else if (minion == Minions.ice || minion == Minions.wheat) {
        l[2] = false
    } else if (
        (minion == Minions.creeper || minion == Minions.cavespider) &&
        tierInt == 11
    ) {
        l[2] = false
    } else {
        l[0] = 160
        l[1] = false
    }

    // previous tier data is...
    // todo: make into mini version of existing result holder
    if (l[3]) {
        let z = 0
        for (let p = 0; p < tierInt - 1; p++) {
            z += x
        }
        l[3] = z
    }

    return l
    /* eslint-enable */
}

export default metaArray
