import {VERSION_CHANGE} from "./types";

export default {
    changeVersion({commit}, version){
        //some async
        commit(VERSION_CHANGE, version)
    }
}