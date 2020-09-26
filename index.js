//global Variables
let searchTerm="";
let wordMeaning=[];

//DOM elements
const input=document.querySelector(".search-input");
const word__meanings=document.querySelector(".word__meanings");
const button=document.getElementById("button");
const loader=document.getElementById("loader");
const suggestedWord=document.getElementById("suggested-word");

function getWord(){
    wordMeaning.forEach(word=>{
        if(typeof word==="string"){
            suggestedWord.hidden=false;
            meaning=document.createElement("span");
            word__meanings.appendChild(meaning);
            meaning.innerHTML+=word;
        }else{
            suggestedWord.hidden=true;
            meaning=document.createElement("h5");
            word__meanings.appendChild(meaning);
            word.shortdef.forEach(def=>{
                meaning.innerHTML+=def;
            })
        }
    }
    
    )
}
   
        
    



async function getWords(){
    const urlKey="dffcf6c8-e75c-4791-9e3b-bd6b731be177";
    const urlApi=`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=${urlKey}`;
    try {
       const response=await fetch(urlApi);
        wordMeaning=await response.json();
        
        getWord();
       
   
    
    } catch (error) {
        
    }
}
function search(){
        for(var i=0;i<wordMeaning.length;i++){
           word__meanings.querySelectorAll("*").forEach(node=>{
               node.remove();
           });
            
        }
    
        searchTerm=input.value;
        
        getWords();
    
    
}
button.addEventListener("click",search);
getWords();
