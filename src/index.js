'use strict';

import REGEXES from '../data/regexes.json';

const CATCH_ALL_REGEX = /(?:)/;

export default class Regex {
    
    static getRegex(type, iso, modifiers) {
        var collection = REGEXES[iso],
            regexString = collection[type];
        return regexString ? new RegExp(regexString, modifiers) : CATCH_ALL_REGEX;
    }
    
}