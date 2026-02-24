1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 getElementById:  getElementById returns a single element based on the unique id, if there's none it returns null.
 getElementsByClassName: returns an HTML collection, this returns multiple elements and updates automatically
 querySelector: returns the first element that matches.
querySelectorAll: returns a static nodelist of all the elements that matches.
3. How do you create and insert a new element into the DOM?
   create a new element:
   const div = document.createElement("div");
   insert a new element:
   document.body.appendChild(div);
5. What is Event Bubbling? And how does it work?
   Event Bubbling: Event bubbling is a movement that moves upwards. It traverses through every parentnode of a childnode. so when a childnode is clicked all of its ancestors will be accessed.
   so it works like if we click on a div which is inside another div, that div is inside a section, the section is inside main and so on. so event bubbling will work like this
   div-> div-> section->main-> body->HTML->document.
7. What is Event Delegation in JavaScript? Why is it useful?
   Event delegation is using addEventListener to a parent instead of explicitily using addEventListener for each children. we use event bubbling to detect which childnode was click and peforms the function.
   It is very useful because we don't need to write the same instruction more than once. makes the code scalable. we can perform a task on thousands of childnodes very easily. it works dynamically so
    adding more elements doesn't require more code.
9. What is the difference between preventDefault() and stopPropagation() methods?
    preventDefault() function prevents the default behaviour of browser. browser have some default in built properties, like right clicks and reload. preventDefault() stops this kind of default behaviour.
    and stopPropagation() funcion stop the event from traveling through DOM. event propagation has these phases, Capturing (top → down), Target, Bubbling (bottom → up). stopPropagation() ends this journey of an event
