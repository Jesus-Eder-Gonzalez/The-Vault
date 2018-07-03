'use strict';
module.exports = function() {
  var val = {};
  
  return {
      setValue: setValue,
      getValue: getValue
  }

  function setValue(key, value){
    console.log('value: '+value+' key: '+key+'\n');
    if (key !== null) {
        val[key] = value;
        console.log(val);
    } else {
        return null;
    }
  }

  function getValue(key){

      if(Object.keys(val).length > 0){
        var keys = Object.keys(val);
        
        for (var i = 0; i < keys.length; i++) {

            if (keys[i] === key) {
                return val[keys[i]];
            }

        }

      } else {
        return null;
      }
  }

};