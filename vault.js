'use strict';
module.exports = function () {
    const val = {};

    return {
        setValue: setValue,
        getValue: getValue
    }

    function setValue(key, value) {

        if (key !== null) {
            val[key] = value;
        } else {
            return null;
        }
    }

    function getValue(key) {

        if (val[key]) {
            return val[key];
        } else {
            return null;
        }
    }

};