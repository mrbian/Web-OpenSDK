/**
 * Created by oureda on 5/30/16.
 */
(function(root){
    var navbar = window.document.querySelector('ul.list.collapse');
    var trigger = window.document.querySelector('button.navbar-toggle');
    trigger.addEventListener('click',function(){
    },false);
}(this));

function getClass(elem){
    return elem.getAttribute && elem.getAttribute('class') || "";
}

function addClass(value){
    var classes,curValue,cur,
        whitespace = /\S+/g,schar = /[\t]/g,elem = this;
    if(typeof(value) === "string" && value){
        classes = value.match(whitespace) || [];
        curValue = getClass(elem);
        cur = elem.nodeType === 1 &&
            ( " " + curValue + " ").replace(schar," ");
    }
}
