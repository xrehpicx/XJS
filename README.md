# XJS
JavaScript framework for simpler syntax

* Easier DOM minipulation
* Dynamic Script Handling

## DOM Minipulation
syntax is similar to jQuery

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

##### more common events

* click() Syntax
```javascript
$(Selector).click(funtion1);
```
* hover() Syntax
```javascript
$(Selector).hover(funtion1);
```
