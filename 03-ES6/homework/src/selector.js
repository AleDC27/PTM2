var traverseDomAndCollectElements = function(matchFunc, startEl=document.body) {
  var resultSet = [];

  // if (typeof startEl === "undefined") {
  //   startEl = document.body;
  // }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl))resultSet.push(startEl);
  for (let i = 0; i <startEl.children.length; i++){
   let result = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
   resultSet=resultSet.concat(result)
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==="#")return "id";
  if(selector[0]===".")return "class";
  for (let i = 0; i < selector.length; i++) {
    if(selector[i]===".")return "tag.class"
  }
  return "tag";  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction=elem=> "#"+elem.id===selector;;
   
  } else if (selectorType === "class") {
    matchFunction=(elem)=>{
      for (let i = 0; i < elem.classList.length; i++) {
      if("."+elem.classList[i]===selector)return true;
      }return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction=(elem)=>{
      const [t,c]=selector.split(".");

     return matchFunctionMaker(t)(elem) && matchFunctionMaker("."+ c)(elem)
    }
  } else if (selectorType === "tag") {
    matchFunction=(elem)=>
      elem.tagName.toLowerCase()===selector.toLowerCase();
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
