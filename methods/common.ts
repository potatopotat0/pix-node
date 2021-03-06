import * as CommentToTypes from "./common/commentToTypes";
import * as IllustToTypes from "./common/illustToTypes";
import * as TokenBase64 from "./common/tokenBase64";
import * as TagToTypes from "./common/tagToTypes";
import * as GetDate from './common/getDate'

import { enums } from '../constants/enums'

/**
 * Common items shared between multiple methods
 * `CLIENT_ID`, `CLIENT_SECRET`, etc.
 */
export namespace common {
    export const commentToTypes = CommentToTypes.main;
    export const illustToTypes = IllustToTypes.main;
    export const tokenBase64 = TokenBase64.main;
    export const tagToTypes = TagToTypes.main;
    export const getDate = GetDate.main;

    export function setLanguage(str: "zh-cn" | "zh-tw" | "en-us" | "ja-jp" | "ko-kr"): void {
        enums.ACCEPT_LANGUAGE = str;
    }
}