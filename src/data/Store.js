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

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Wood
 * - Magma Cube
 * - Zombie
 * - Skeleton
 * - Spider
 * - Clay
 * - Obsidian
 * - Sand
 * - Cobblestone
 * - Mushroom
 *
 * Total items required: 163632
 */
export const woodMinions = {
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

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Cactus
 * - Potato
 * - Sugarcane
 * - Redstone
 * - Glowstone
 *
 * Total items required: 774016
 */
export const farmCommon = {
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

/**
 * @constant
 * @description Enderman minions have this really strange progresion
 * @returns the object with the tier data
 *
 * Used by minions:
 * - Enderman
 *
 * Total items needed: 125372
 */
export const endermanProgression = {
    I: 64,
    II: 128,
    III: 240,
    IV: 480,
    V: 980,
    VI: 1960,
    VII: 3920,
    VIII: 7840,
    IX: 15680,
    X: 31360,
    XI: 62720
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Coal
 * - Iron
 * - Diamond
 * - Gold
 * - Emerald
 * - Slime
 * - Blaze
 * - Nether Quartz
 *
 * Total items needed: 364592
 */
export const oresCommon = {
    I: 80,
    II: 160,
    III: 320,
    IV: 512,
    V: 1280,
    VI: 3840,
    VII: 10240,
    VIII: 20480,
    IX: 40960,
    X: 81920,
    XI: 204800
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Chicken
 * - Nether Wart
 *
 * Total items required: 163520
 */
export const almostWoodButNotQuite = {
    I: 64,
    II: 128,
    III: 256,
    IV: 512,
    V: 1280,
    VI: 2560,
    VII: 5120,
    VIII: 10240,
    IX: 20480,
    X: 40960,
    XI: 81920
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Pig
 * - Sheep
 * Total items required: 364480
 */
export const pigProgression = {
    I: 64,
    II: 128,
    III: 256,
    IV: 512,
    V: 1280,
    VI: 3840,
    VII: 10240,
    VIII: 20480,
    IX: 40960,
    X: 81920,
    XI: 204800
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Ghast
 *
 * Total items required: 128800
 */
export const ghastProgression = {
    I: 64,
    II: 128,
    III: 256,
    IV: 512,
    V: 1280,
    VI: 2560,
    VII: 4000,
    VIII: 8000,
    IX: 16000,
    X: 32000,
    XI: 64000
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Melon
 *
 * Total items required: 776832
 */
export const melonProgression = {
    I: 256,
    II: 512,
    III: 1152,
    IV: 2304,
    V: 4608,
    VI: 10240,
    VII: 20480,
    VIII: 40960,
    IX: 81920,
    X: 204800,
    XI: 409600
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Wheat
 *
 * Total items required: 92368
 */
export const wheatProgression = {
    I: 80,
    II: 160,
    III: 320,
    IV: 512,
    V: 864,
    VI: 1728,
    VII: 3456,
    VIII: 4608,
    IX: 11520,
    X: 23040,
    XI: 46080
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Carrot
 *
 * Total items required: 651904
 */
export const carrotProgression = {
    I: 128,
    II: 256,
    III: 512,
    IV: 1280,
    V: 3840,
    VI: 10240,
    VII: 20480,
    VIII: 40960,
    IX: 81920,
    X: 164096,
    XI: 328192
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Cow
 *
 * Total items required: 159680
 *
 * @throws Exception because this is the only progression without a XI key!
 * @description Use with caution!
 */
export const cowProgression = {
    I: 64,
    II: 128,
    III: 256,
    IV: 512,
    V: 1280,
    VI: 3840,
    VII: 10240,
    VIII: 20480,
    IX: 40960,
    X: 81920
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Cocoa Bean
 *
 * Total items required: 323632
 */
export const beanProgression = {
    I: 80,
    II: 160,
    III: 320,
    IV: 512,
    V: 1280,
    VI: 3840,
    VII: 10240,
    VIII: 20480,
    IX: 40960,
    X: 81920,
    XI: 163840
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Lapis Lazuli
 *
 * Total items required: 1593088
 */
export const lapisProgression = {
    I: 256,
    II: 512,
    III: 1280,
    IV: 3840,
    V: 10240,
    VI: 20480,
    VII: 40960,
    VIII: 81920,
    IX: 204800,
    X: 409600,
    XI: 819200
}

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Ice
 *
 * Total items required: 162736
 */
export const iceProgression = {
    I: 80,
    II: 160,
    III: 320,
    IV: 512,
    V: 1152,
    VI: 2304,
    VII: 4608,
    VIII: 10240,
    IX: 20480,
    X: 40960,
    XI: 81920
}
