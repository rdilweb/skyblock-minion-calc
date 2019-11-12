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

import { isFunction } from "underscore"

/**
 * @function
 * @description Check if the parameter is a function or JSX component
 * @returns The boolean value of if the passed item is a function or JSX
 * @param pushable The object to check
 */
export let isJsxOrFunc = (pushable: Object | Function | null | undefined) => {
    // eslint-disable-next-line
    if (pushable == null || pushable == undefined) {
        return false
    }
    return isFunction(pushable)
}

/**
 * @readonly
 * @static
 * @constant
 * @field
 * @kind String
 * @type String
 * @description Link to the GitHub repository
 */
export const github: String = "https://github.com/RDIL/skyblock-minion-calc"
