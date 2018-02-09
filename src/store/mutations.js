/***
 * mutations是改变state的唯一方式
 */
import {VERSION_CHANGE} from "./types";


export default {
    [VERSION_CHANGE](state, version){
        state.version = version
    }
}