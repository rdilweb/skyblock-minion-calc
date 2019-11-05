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
 * @description Build a progression data object
 * @returns The built object
 * @function
 * @generator
 *
 * @param t1 The tier 1 data
 * @param t2 The tier 2 data
 * @param t3 The tier 3 data
 * @param t4 The tier 4 data
 * @param t5 The tier 5 data
 * @param t6 The tier 6 data
 * @param t7 The tier 7 data
 * @param t8 The tier 8 data
 * @param t9 The tier 9 data
 * @param t10 The tier 10 data
 * @param t11 The tier 11 data
 *
 * @summary Every object has each tier, the key to access the data a tier would be the roman numeral form of the tier ID
 */
export let buildProgressionData = (
    t1: Number,
    t2: Number,
    t3: Number,
    t4: Number,
    t5: Number,
    t6: Number,
    t7: Number,
    t8: Number,
    t9: Number,
    t10: Number,
    t11: Number | null
) => {
    return {
        I: t1,
        II: t2,
        III: t3,
        IV: t4,
        V: t5,
        VI: t6,
        VII: t7,
        VIII: t8,
        IX: t9,
        X: t10,
        XI: t11
    }
}

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
export const woodMinions = buildProgressionData(
    80,
    160,
    320,
    512,
    1280,
    2560,
    5120,
    10240,
    20480,
    40960,
    81920
)

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
export const farmCommon = buildProgressionData(
    128,
    256,
    512,
    1280,
    3840,
    10240,
    20480,
    40960,
    81920,
    204800,
    409600
)

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
export const endermanProgression = buildProgressionData(
    64,
    128,
    240,
    480,
    980,
    1960,
    3920,
    7840,
    15680,
    31360,
    62720
)

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
export const oresCommon = buildProgressionData(
    80,
    160,
    320,
    512,
    1280,
    3840,
    10240,
    20480,
    40960,
    81920,
    204800
)

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Chicken
 * - Nether Wart
 *
 * Total items required: 163520
 */
export const almostWoodButNotQuite = buildProgressionData(
    64,
    128,
    256,
    512,
    1280,
    2560,
    5120,
    10240,
    20480,
    40960,
    81920
)

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Pig
 * - Sheep
 * Total items required: 364480
 */
export const pigProgression = buildProgressionData(
    64,
    128,
    256,
    512,
    1280,
    3840,
    10240,
    20480,
    40960,
    81920,
    204800
)

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Ghast
 *
 * Total items required: 128800
 */
export const ghastProgression = buildProgressionData(
    64,
    128,
    256,
    512,
    1280,
    2560,
    4000,
    8000,
    16000,
    32000,
    64000
)

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Melon
 *
 * Total items required: 776832
 */
export const melonProgression = buildProgressionData(
    256,
    512,
    1152,
    2304,
    4608,
    10240,
    20480,
    40960,
    81920,
    204800,
    409600
)

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Wheat
 *
 * Total items required: 92368
 */
export const wheatProgression = buildProgressionData(
    80,
    160,
    320,
    512,
    864,
    1728,
    3456,
    4608,
    11520,
    23040,
    46080
)

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Carrot
 *
 * Total items required: 651904
 */
export const carrotProgression = buildProgressionData(
    128,
    256,
    512,
    1280,
    3840,
    10240,
    20480,
    40960,
    81920,
    164096,
    328192
)

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
export const cowProgression = buildProgressionData(
    64,
    128,
    256,
    512,
    1280,
    3840,
    10240,
    20480,
    40960,
    81920,
    null
)

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Cocoa Bean
 *
 * Total items required: 323632
 */
export const beanProgression = buildProgressionData(
    80,
    160,
    320,
    512,
    1280,
    3840,
    10240,
    20480,
    40960,
    81920,
    163840
)

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Lapis Lazuli
 *
 * Total items required: 1593088
 */
export const lapisProgression = buildProgressionData(
    256,
    512,
    1280,
    3840,
    10240,
    20480,
    40960,
    81920,
    204800,
    409600,
    819200
)

/**
 * @constant
 * @returns the object with the tier data
 * Used by minions:
 * - Ice
 *
 * Total items required: 162736
 */
export const iceProgression = buildProgressionData(
    80,
    160,
    320,
    512,
    1152,
    2304,
    4608,
    10240,
    20480,
    40960,
    81920
)

/**
 * @constant
 * @returns the Object with the tier data
 * Used by minions:
 * - Creeper
 * - Cave Spider (Partially)
 *
 * Total items required: 323632
 */
export const combat2 = buildProgressionData(
    80,
    160,
    320,
    512,
    1280,
    3840,
    10240,
    20480,
    40960,
    81920,
    163840
)
