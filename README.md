# XJS
JavaScript framework for simpler syntax

embed: `<script src="https://cdn.jsdelivr.net/gh/xrehpicx/XJS@v1/scr/xjs.js"></script>`

##### currently can help in:
  * Easier DOM event handling
  * Dynamic Script Handling without type='module'

## DOM Event Handling

  ### Selection Syntax
  This x() function will return a xjs object
  ```javascript
  x(Selector);
  ```
  ### Event Que
  All listeners pass the parent xjs object into their call back functions

  #### .listen() Syntax
  by passing string and function

  each event variable must have name of event like 'click', 'mouseleave' and [others](https://developer.mozilla.org/en-US/docs/Web/Events)

  ```javascript
  x(Selector).listen(event1,function1,event2,funtion2,event3,funtion3...);
  ```
  by passing event objects
  ```javascript
  var eventObject = { e : event, f : function }
  ```
  pass event object to listen()
  ```javascript
  x(Selector).listen(eventObject1, eventObject2,...);
  ```

  ##### avoid using the below syntax as much as possible

  or add .listen(e,f,e2,f2).listen({})...
  ```javascript
  x(Selector).listen(eventObject1, eventObject2,...).listen(event1,function1,event2,funtion2...);
  ```

  ##### more common events

  * .click() Syntax
  ```javascript
  x(Selector).click(funtion1);
  ```
  * .hover() Syntax
  ```javascript
  x(Selector).hover(funtion1);
  ```
  ##### other DOM related funtions
  
  * .get() 
  Returns the DOM tree node
  Syntax:
  ```javascript
  x(Selector).get();
  ```
  
  * .inside(text)
  Changes the text inside the html tag
  Syntax:
  ```javascript
  x(Selector).inside(text);
  ```
  
  * .branch(elemen_tag , return_element)
  Creates an element specified `element_tag` and adds it into the x(Selector) element
  `return_element` can have value of `'parent'` or can be left empty
  `'parent'` parameter will return the parent xjs object or will return the new childs xjs object otherwise
  Syntax:
  ```javascript
  x(Selector).inside(text);
  ```
  
  * locate(element)
  Returns an object with the current height, width, x and y coordinates of the element in the screen
  x = distance from the left of the window to the element
  y = distance from the top of the window to the element
  Syntax:
  ```javascript
  let element = x(Selector);
  locate(element);
  ```
  * fullScreen()
  Makes the element take full screen
  this element can be any xjs object
  Syntax 1:
  ```javascript
  x('#some-video').fullScreen()
  ```
  Syntax 2:
  ```javascript
  fullScreen(x('#some-video'));
  //Here DOM nodes can also be passed
  ```
  
  Example:
    ```javascript
  x('#video').click(obj => obj.fullScreen());
  ```
  

## Dynamic Script Handling
  Scripts can be added or removed Dynamically with Dys class and script objects
  
  ##### Script Objects

    var scriptObj = { 
                     scr: './path/to/script', //required, duh
                     integrity: 'sfglavhfbvalfskbvfsfksjabvfsjkb', //optional
                     crossorigin: 'something' //optional
                    }
                    
  ##### getScript()  
  ```javascript
  var ScriptHandler = new Dys();
  ScriptHandler.getScript(scriptObj);
  //when the script is imported it will also run
  ```
  to get multiple scripts
  ##### getScripts()  
  ```javascript
  var scripts =[ scriptObj1, scriptObj2, scriptObj3,...];
  var ScriptHandler = new Dys();
  ScriptHandler.getScripts(scripts);
  //when the scripts is imported they will run in the order they are in the scripts list
  ```
  ##### removeScript()  
  ###### accepts only list of script Objects to remove
  ```javascript
  var ScriptHandler = new DS();
  ScriptHandler.removeScript(scripts);
  //when the script is imported it will also run
  ```
  
  
  
