module.exports = function check(str, bracketsConfig) {
  let result = false;
  str = "*" + str + "+";
      for (let i=1;(str.charAt(i)!="+");i++) {
        for (let j=0;j<bracketsConfig.length;j++) {
          if ((str.charAt(i) === bracketsConfig[j][0]) && (str.charAt(i+1) === bracketsConfig[j][1])) {
            str = str.slice(0,i) + str.slice(i+2);
            i = 0;
            break;
          }
        }
     }
   if (str.localeCompare("*+") == 0) {
    result = true;
   }
   return(result);
  }