// Por David Ramirez
// davidsrnfire@gmail.com
var gramatica={};
var key;
var separa = function(gram){
  for (var i=0; i<gram.length;i++){
    if(i===0){
      inicial=gram[i].charAt(0);
    }
    key=gram[i].charAt(0);
    gram[i]=gram[i].split(" ");
    gram[i].splice(0,1);
    // console.log(gram[i]);
    aux={key: gram[i]};
    gramatica.key = gram[i];
    gramatica[key]=aux["key"];
    delete quesesto["key"];
  }
}

var term = function(letra, gram) {
  var resultado = [];
  for (var r in gram) {
    for (var i in gram[r]) {
      if (gram[r][i] === letra) {
        resultado.push(r);
      }
    }
  }
  return resultado;
};


var encuentraTerm = function(tab1, tab2, gram) {
  var resultado = [];
  for (var r in gram) {
    for (var i in gram[r]) {
      if (tab1.indexOf(gram[r][i].charAt(0)) >= 0 && tab2.indexOf(gram[r][i].charAt(1)) >= 0) {
        resultado.push(r);
      }
    }
  }
  return resultado;
};

var cyk = function(word, gram) {
  var len = word.length;
  var tab = new Array(len);
  for (var t = 0; t < len; t++) {
    tab[t] = new Array(0);
  }
  for (var z = 0; z <= len - 1; z++) {
    tab[0][z] = term(w.charAt(z), gram);
  }
  for (var j = 1; j <= len - 1; j++) {
    for (var i = 0; i <= len - j - 1; i++) {
      tab[j][i] = [];
      for (var k = 0; k < j; k++) {
        var a = j - k - 1;
        var b = i + k + 1;
        tab[j][i] = tab[j][i].concat(encuentraTerm(tab[k][i], tab[a][b], gram));
      }
    }
  }
  for (var m in tab[len - 1][0]) {
    if (tab[len - 1][0][m] === inicial) {
      return true;
    }
  }
  return false;
};
var inicial;
var gram=[];
var line="";
var test = function(w) {
    if(cyk(w, quesesto)) {
      console.log('Accepted');
    } else {
      console.log('Rejected');
    }
}
// Para inputs por consola
var readline = require('readline');
var input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
var flag=false;
input.on('line', function(line){
  if(line.charAt(0)===line.charAt(0).toUpperCase()&&!flag){
    gram.push(line);
  }else{
    if(!flag){
      separa(gram);
    }
    flag=true;
    w=line;
    test(w);
  }
});
// Para inputs por prompts
// while(line.charAt(0)===line.charAt(0).toUpperCase()){
//   line = prompt();
//   if(line.charAt(0)===line.charAt(0).toUpperCase()){
//     gram.push(line);
//   }
// }
//   separa(gram);
//   for(var i=0;i<6;i++){
//   w=prompt();
//   test(w);
// }





//console.log(last);
