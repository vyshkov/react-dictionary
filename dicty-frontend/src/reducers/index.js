/**
 * Created by Vovan on 18.12.2016.
 */
import {combineReducers} from "redux"

import WordsReducer from "./wordsReducer"

const selectedWordReducer = (state = null, action) => {
    switch (action.type) {
        case 'WORD_CLICKED':
            return action.payload;
        default:
            return state;
    }
};

const translateReducer = (state, action) => {
    switch (action.type) {
        case "WORD_TRANSLATION_FULFILLED" :
            return action.payload.data.text.join("; ");
        default:
            return null;
    }
};

const loadingReducer = (state = false, action) => {
    if (action.type == "LOADING") {
        state = action.payload
    }
    return state;
};

const wordDefinitionReducer = (state = null, action) => {
    if(action.type == "DEFINITION_LOADED"){
        return action.payload
    } else if (action.type == "UNLOAD_DEFINITION"){
        return null;
    }

    return state;
};

export default combineReducers({
    words: WordsReducer,
    selectedWord: selectedWordReducer,
    translatedWord: translateReducer,
    loading: loadingReducer,
    wordDefinition: wordDefinitionReducer
});

