import {CHANGE_SEARCH_FIELD} from "./constants";

export const setSearchField = (text) => ({          // ({ automatic return =) })
    type: CHANGE_SEARCH_FIELD,
    payload: text
});
