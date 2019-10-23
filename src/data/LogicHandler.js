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
    someMiningStuff,
    endermanProgression,
    oresCommon,
    almostWoodButNotQuite,
    pigProgression,
    ghastProgression,
    melonProgression,
    wheatProgression
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
        case Minions.foraging.toString():
        case Minions.spider.toString():
        case Minions.undead.toString():
        case Minions.undeadbones.toString():
        case Minions.magmacube.toString():
        case Minions.clay.toString():
            return woodMinions[e]
        case Minions.cactus.toString():
        case Minions.desertcane.toString():
        case Minions.potato.toString():
        case Minions.redstone.toString():
        case Minions.glowstone.toString():
            return farmCommon[e]
        case Minions.obsidian.toString():
        case Minions.sand.toString():
        case Minions.cobblestone.toString():
            return someMiningStuff[e]
        case Minions.enderman.toString():
            return endermanProgression[e]
        case Minions.emerald.toString():
        case Minions.diamond.toString():
        case Minions.netherquartz.toString():
        case Minions.iron.toString():
        case Minions.gold.toString():
        case Minions.coal.toString():
        case Minions.slime.toString():
        case Minions.blaze.toString():
            return oresCommon[e]
        case Minions.chicken.toString():
        case Minions.netherwart.toString():
            return almostWoodButNotQuite[e]
        case Minions.pig.toString():
            return pigProgression[e]
        case Minions.ghast.toString():
            return ghastProgression[e]
        case Minions.melon.toString():
            return melonProgression[e]
        case Minions.wheat.toString():
            return wheatProgression[e]
        default:
            return ""
    }
}
