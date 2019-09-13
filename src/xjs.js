class DS {
    getScript(scriptProp) {
        var script = document.createElement("script");
        script.src = scriptProp['src'];
        if (scriptProp['integrity'] !== undefined)
            script.integrity = scriptProp['integrity'];
        if (scriptProp['crossorigin'] !== undefined)
            script.setAttribute('crossorigin', scriptProp['crossorigin']);
        document.head.appendChild(script);
    };
    getScripts(scripts) {
        scripts.forEach(element => {
            getScript(element);
        });
    };
    removeScript(scriptList) {
        var allScriptTags = document.querySelectorAll('script');
        scriptList.forEach(ele => {
            allScriptTags.forEach(element => {
                if (ele.src === element.src)
                    element.parentNode.removeChild(element);
            });
        })
    }
}

class xjs {
    constructor(selector) {
        if (typeof (selector) === 'string') {
            this.domnod = document.querySelector(selector);
        }
        else if (typeof (selector) === 'object') {
            this.domnod = selector;
        }
    }
    get() {
        return this.domnod;
    }
    inside(d) {
        this.domnod.innerHTML = d ? d : '';
        return this;
    }
    branch(e, re = 'c') {
        let element = document.createElement(e);
        this.domnod.appendChild(element);
        let exjs = x(element, false);
        if (re[0] === 'c') {
            return exjs;
        } else if (re[0] === 'p') {
            return this;
        }
    }
    fullScreen() {
        if (this.domnod.requestFullscreen)
            this.domnod.requestFullscreen();
        else if (this.domnod.mozRequestFullScreen)
            this.domnod.mozRequestFullScreen();
        else if (this.domnod.webkitRequestFullscreen)
            this.domnod.webkitRequestFullscreen();
        else if (this.domnod.msRequestFullscreen)
            this.domnod.msRequestFullscreen();
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
function x(selector, orphan = true) {
    let xjsobj = new xjs(selector);
    xjsobj.xjs = true;
    return xjsobj;
}


