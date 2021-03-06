import { types } from "../../constants/types";
import { common } from "../common";

/**
* Convert illustration to its coresponding type
* @param val Object contains illustration information from Pixiv responses
* @returns Illustration object
*/
export function main(val: any): types.illustration {
    return new types.illustration(
        val.id,
        val.title,
        val.type,
        val.caption,
        val.restrict,
        new types.userInformation(
            val.user.id,
            val.user.name,
            val.user.account
        ),
        (() => {
            let rt = new Array<types.tag>();
            for (let value of val.tags) {
                rt.push(common.tagToTypes(value));
            }
            return rt;
        })(),
        val.create_date,
        val.page_count,
        val.sanity_level,
        val.x_restrict,
        val.is_bookmarked,
        val.total_bookmarks,
        val.total_view,
        {
            large: val.image_urls.large,
            medium: val.image_urls.medium,
            square_medium: val.image_urls.square_medium
        },
        {
            original_image_url: val.meta_single_page.original_image_url
        }
    );
}