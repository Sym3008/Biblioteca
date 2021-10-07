// console.log("ciaodsaf")
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var mostra = urlParams.get('id')
console.log(mostra);

// function getQSParam(ParamName){
//     qs=window.location.toString();
//     var indSta=QS.indexOf(ParamName);
//     if(indSta==-1 || ParamName=="") return null;
//     var indEnd=QS.indexOf('&amp;',indSta)
//     if (indEnd==-1) indEnd=QS.length;
//     var valore= unescape(QS.substring(indSta+ParamName.length+1,indEnd));
//     return valore
// }
