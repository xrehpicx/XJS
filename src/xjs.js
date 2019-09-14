var version = 10.1;
//XJS version Do Not Change This
class DS {
    get(scriptProp) {
        let script = document.createElement("script");
        let source, integrity, crossorigin;
        if (typeof (scriptProp) === 'object') {
            source = scriptProp.src;
            integrity = scriptProp['integrity'] ? scriptProp['integrity'] : null;
            crossorigin = scriptProp['crossorigin'] ? scriptProp['crossorigin'] : null;
        } else if (typeof (scriptProp) === 'string') {
            if (scriptProp.startsWith('./')) {
                source = scriptProp;
                integrity = null;
                crossorigin = null;
            } else {
                source = 'https://cdn.jsdelivr.net/gh/xrehpicx/xjs@v' + version + '/src/js/' + scriptProp + '.min.js';
                integrity = null;
                crossorigin = null;
            }
        }
        script.src = source;
        if (integrity !== null) script.integrity = integrity;
        if (crossorigin !== null) script.setAttribute('crossorigin', scriptProp['crossorigin']);
        document.head.appendChild(script);

    };
    gets(scripts) {
        scripts.forEach(element => {
            get(element);
        });
    };
    remove(scriptList) {
        var allScriptTags = document.querySelectorAll('script');
        scriptList.forEach(ele => {
            allScriptTags.forEach(element => {
                if (ele.src === element.src) element.parentNode.removeChild(element);
            });
        })
    }
}

class xobjs {
    xjselements = [];
    clear(elem) {
        if (!elem) this.xjselements = [];
        else if (elem.xjs) this.xjselements = this.xjselements.filter(item => item.Selector !== elem.Selector);
        else if (typeof (elem) === 'string') this.xjselements = this.xjselements.filter(item => item.Selector !== elem);
    }
    add(ele) {
        this.xjselements.push(ele);
    }
    i(i) {
        return this.xjselements[i - 1] ? this.xjselements[i - 1] : 'DNE';
    }
}
var X = new xobjs();
class xjs {
    constructor(selector, holdvar) {
        if (typeof (selector) === 'string') this.domnod = document.querySelector(selector);
        else if (typeof (selector) === 'object') this.domnod = selector;
        X.add(this);
        this.Selector = holdvar;
    }
    get() {
        return this.domnod;
    }
    name() {
        return this.Selector;
    }
    inside(d) {
        this.domnod.innerHTML = d ? d : '';
        return this;
    }
    branch(e, re = 'c') {
        let element = document.createElement(e);
        this.domnod.appendChild(element);
        let exjs = x(element, false);
        if (re[0] === 'c') return exjs;
        else if (re[0] === 'p') return this;
    }
    fullScreen() {
        if (this.domnod.requestFullscreen) this.domnod.requestFullscreen();
        else if (this.domnod.mozRequestFullScreen) this.domnod.mozRequestFullScreen();
        else if (this.domnod.webkitRequestFullscreen) this.domnod.webkitRequestFullscreen();
        else if (this.domnod.msRequestFullscreen) this.domnod.msRequestFullscreen();
        return this;
    }

    listen(...events) {
        let eventtype = typeof (events[0]);
        if (eventtype === 'string') {
            for (var i = 0; i < events.length; i += 2) {
                this.domnod.addEventListener(events[i], () => events[i + 1](this));
            }
        } else if (eventtype === 'object') {
            events.forEach(event => {
                this.domnod.addEventListener(event.e, () => event.f(this));
            });
        }
        return this;
    }
    click(fun) {
        this.domnod.addEventListener('click', () => fun(this));
        return this;
    }
    hover(fun) {
        this.domnod.addEventListener('mouseover', () => fun(this));
        return this;
    }
    toggle(prop = 'display', val = 'none') {
        let styleobj = this.domnod.style;
        let currentval = {};
        if (prop !== undefined || prop !== 'reset' && val !== undefined) {
            if (this.oldVal === undefined) {
                currentval[prop] = styleobj[prop];
                this.oldVal = currentval[prop];
                this.newVal = val;
                styleobj[prop] = val;
            } else {
                let temp;
                styleobj[prop] = this.oldVal;
                temp = this.oldVal;
                this.oldVal = this.newVal;
                this.newVal = temp;
            }
        }
    }
    style(prop, val) {
        return !prop || !val ? this.domnod.style : (this.domnod.style[prop] = val);
    }

}
function fullScreen(ele) {
    let element;
    if (ele.xjs)
        element = ele.get();
    else
        element = ele;
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen)
        element.msRequestFullscreen();
}

function locate(element) {
    let parsedElement;
    if (element.xjs)
        parsedElement = element.get();
    else
        parsedElement = element;
    let rect = parsedElement.getBoundingClientRect();
    let simpleObj = {
        x: rect.left,
        y: rect.top,
        w: rect.width,
        h: rect.height,
    }
    return simpleObj;
}
function x(selector, holdvar = selector) {
    let xjsobj = new xjs(selector, holdvar);
    xjsobj.xjs = true;
    return xjsobj;
}


