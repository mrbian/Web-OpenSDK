/**
 * Created by oureda on 5/30/16.
 */
(function(root){
    Object.prototype.setStyle = setStyle;
    Object.prototype.getClass = getClass;
    Object.prototype.addClass = addClass;
    Object.prototype.removeClass = removeClass;

    var navbar = window.document.querySelector('ul.list.collapse');
    var trigger = window.document.querySelector('button.navbar-toggle');
    trigger.addEventListener('click',function(){
    },false);

    function SliderInit(){
        var ad_list = document.getElementById('li_cr');
        var lists = ad_list.childNodes;
        for(var idx in lists){
            if(lists[idx].nodeType === 1){
                lists[idx].setStyle('z-index',0);
                lists[idx].setStyle('opacity',0);
            }
        }
    }

    function SliderCtrlInit(){
        var ctrls = document.getElementsByClassName('ctrl');
        for(var idx in ctrls){
            var ele = ctrls[idx];
            if(ele.nodeType !== 1)  return;
        }
    }
    
    function SliderToIdx(){
        
    }

    SliderInit();
    SliderCtrlInit();
}(this));

function getClass(){
    var elem = this;
    return elem.getAttribute && elem.getAttribute('class') || "";
}

function addClass(value){
    var classes,curValue,cur,
        whitespace = /\S+/g,schar = /[\t]/g,elem = this;
    if(typeof(value) === "string" && value){
        curValue = elem.getClass();
        if(curValue.indexOf(value) !== -1) return;
        curValue = curValue + ' ' + value;
        elem.setAttribute('class',curValue);
    }
}

function removeClass(value){
    var elem = this;
    var whitespace = /\S+/g, classes = elem.getClass();
    if(typeof(value) === "string" && value){
        if(classes.indexOf(value) === -1) return;
        classes = classes.replace(value,'');
        classes.trim();
        elem.setAttribute('class',classes);
    }
}

function setStyle(property,value){
    var elem = this;
    elem.style[property] = value;
}
