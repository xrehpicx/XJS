# XJS
JavaScript framework for simpler syntax

##### currently can help in:
  * Easier DOM event handling
  * Dynamic Script Handling

## DOM Event Handling

  ### Selection Syntax
  ```javascript
  $(Selector);
  //this returns a xjs object xobj
  ```
  ### Event Que

  #### listen() Syntax
  by passing string and function

  each event variable must have name of event like 'click', 'mouseleave' and [others](https://developer.mozilla.org/en-US/docs/Web/Events)

  ```javascript
  $(Selector).listen(event1,function1,event2,funtion2,event3,funtion3...);
  ```
  by passing event objects
  ```javascript
  var eventObject = { e : event, f : function }
  ```
  pass event object to listen()
  ```javascript
  $(Selector).listen(eventObject1, eventObject2,...);
  ```

  ##### avoid using the below syntax as much as possible

  or add .listen(e,f,e2,f2).listen({})...
  ```javascript
  $(Selector).listen(eventObject1, eventObject2,...).listen(event1,function1,event2,funtion2...);
  ```

  ##### more common events

  * click() Syntax
  ```javascript
  $(Selector).click(funtion1);
  ```
  * hover() Syntax
  ```javascript
  $(Selector).hover(funtion1);
  ```

### XJS Object Holder

  Every  `$(selector)` creates an XJS object that is held in an Xholder globally available object.
  `$(selector1)` can be accessed from Xholder object by
  ```javascript
  Xholder[selectorName].hover(funtion1);
  //or
  Xholder.selectorName.hover(funtion1);
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
  var ScriptHandler = new Dys();
  ScriptHandler.removeScript(scripts);
  //when the script is imported it will also run
  ```
  
  
  
