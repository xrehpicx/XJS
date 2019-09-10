
//DOM RELATED HANDLERS//
var xjs = class {
    xjs = true;
    hold=(xjsobj)=>{
        if (xjsobj.DOMElement.className !== undefined) {
            this[xjsobj.DOMElement.className.split(' ')[0]] = xjsobj;

        } else if (xjsobj.DOMElement.id !== undefined) {
            this[xjsobj.DOMElement.id] = xjsobj;
        }
    }
}
var Xholder = new xjs();
var xobj = class {
    xobj = true;
    constructor(obj) {
        this.DOMElement = obj;
    }
    set=(ele)=> {
        this.DOMElement = ele;
    }
    get=()=> {
        return this.DOMElement;
    }
    print=()=> {
        console.log(this);
        return this;
    }
    listen=(...events)=> {
        if (typeof (events[0]) === 'string') {
            for (var i = 0; i < events.length; i += 2) {
                this.DOMElement.addEventListener(events[i], events[i + 1]);
            }
        } else {
            events.forEach(event => {
                this.DOMElement.addEventListener(event.e, event.f);
            });
        }
        return this;
    }
    click=(fun)=> {
        this.DOMElement.addEventListener('click', fun);
        return this;
    }
    hover=(fun)=> {
        this.DOMElement.addEventListener('mouseover', fun);
        return this;
    }

}
var getelement = (args, returnObject) => {
    if (typeof (args[0]) === 'string') {
        returnObject.set(document.querySelector(args[0]));
        Xholder.hold(returnObject);
    }
    else if (typeof (args[0]) === 'object' && !args[0].xobj) {
        returnObject.set(args[0]);
        Xholder.hold(returnObject);
    } else if (xobj) {

    }
    return returnObject;
};

var $ = (...args) => {
    var returnObject = new xobj();
    if (args.length === 1) {

        returnObject = getelement(args, returnObject)

    }


    return returnObject;
};
//DOM RELATED HANDLERS//

//DYNAMIC SCRIPT HANDLING//

var Dys = class {
    mainscripts = [];
    xjsScripts=[];
    constructor(listOfscriptObjects) {
        this.mainscripts = listOfscriptObjects;
    }
    showAllxjs=()=>{

    }
    getScript = (scriptProp) => {
        var script = document.createElement("script");
        script.src = scriptProp['src'];
        if (scriptProp['integrity'] !== undefined)
            script.integrity = scriptProp['integrity'];
        if (scriptProp['crossorigin'] !== undefined)
            script.setAttribute('crossorigin', scriptProp['crossorigin']);
        document.head.appendChild(script);
    };
    getScripts = (scripts) => {
        scripts.forEach(element => {
            getScript(element);
        });
    };
    removeScript = (scriptList) => {
        var allScriptTags = document.querySelectorAll('script');
        scriptList.forEach(ele => {
            allScriptTags.forEach(element => {
                if (ele.src === element.src)
                    element.parentNode.removeChild(element);
            });
        })
        console.log('removed', scriptList);
    }
}
