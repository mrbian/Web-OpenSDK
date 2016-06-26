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
            if(lists[idx].nodeType === 1 ){
                if(idx == 1){
                    lists[idx].setStyle('opacity','1');
                    lists[idx].setStyle('z-index','1')
                }else{
                    lists[idx].setStyle('opacity','0');
                    lists[idx].setStyle('z-index','0');
                }
            }
        }
        var ctrls = document.querySelectorAll('.ctrl');
        ctrls[0].addClass('active');
        for(var i=0 ;i< ctrls.length;i++){
            ctrls[i].index = i;
        }
        document.querySelector('.ad-ctrl').addEventListener('click',function(event){
            if(typeof (event.target.index) !== 'undefined'){
                SliderToIdx(event.target.index);
            }
        });
        document.querySelector('.ad-ctrl').addEventListener('mouseover',function(event){
            if(typeof (event.target.index) !== 'undefined'){
                SliderToIdx(event.target.index);
            }
        });
    }

    function setSliderCtrl(num){
        var ctrls = document.getElementsByClassName('ctrl');
        for(var idx in ctrls){
            var ele = ctrls[idx];
            if(ele.nodeType !== 1)  return;
            if(idx == num) {
                ele.addClass('active');
            }else{
                ele.removeClass('active');
            }
        }
    }
    
    function SliderToIdx(num){
        var lists = document.querySelectorAll('ul#li_cr > li');
        for(var idx in lists){
            if(idx == num) {
                lists[(idx + 2) % lists.length].style.zIndex = 0;
                lists[(idx + 1) % lists.length].style.zIndex = 0;
                lists[idx].style.zIndex = 1;
                startrun(lists[(idx + 2) % lists.length],'opacity','0');
                startrun(lists[(idx + 1) % lists.length],'opacity','0');
                startrun(lists[idx],'opacity','100');
                setSliderCtrl(num);
            }
        }
    }

    function getstyle(obj,name){
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else{
            return getComputedStyle(obj,false)[name];
        }
    }

    function startrun(obj,attr,target,fn){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var cur = 0;
            if(attr == "opacity"){
                cur = Math.round(parseFloat(getstyle(obj,attr))*100);
            }else{
                cur = parseInt(getstyle(obj,attr));
            }
            var speed = (target-cur)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur == target){
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
            }else{
                if(attr == "opacity"){
                    obj.style.filter = "alpha(opacity="+(cur+speed)+")";
                    obj.style.opacity = (cur+speed)/100;
                }else{
                    obj.style[attr] = cur + speed + "px";
                }
            }
        },30)
    }

    SliderInit();
    var count = 0;
    var slider = setInterval(function(){
        SliderToIdx(count);
        count = (count + 1 ) % 3;
    },2000);
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
        elem.className = curValue;
    }
}

function removeClass(value){
    var elem = this;
    var whitespace = /\S+/g, classes = elem.getClass();
    if(typeof(value) === "string" && value){
        if(classes.indexOf(value) === -1) return;
        classes = classes.replace(value,'');
        classes.trim();
        elem.className = classes;
    }
}

function setStyle(property,value){
    var elem = this;
    elem.style[property] = value;
}
