# TodoAngular

## [1 commit: initial commit](https://github.com/makstyle119/todo-angular/tree/88ccbd9e70d0ee8aa83fe4c470e33089a52412e8)

- first commit is the fresh install angular project.

## [2 commit: Create a Data model](https://github.com/makstyle119/todo-angular/tree/5ed8e8b45e546cee48835c8788b87b973cd3b8ac)

- create a class inside of `todoItem.ts` file. and add in `app.component.ts` and pass todo list as _**`items`**_.

## [3 commit: Iterating an Array](https://github.com/makstyle119/todo-angular/tree/2300fa9e8fe17bb90746da1ce43ce37b44bef6b4)

- to display our items we use loop and in angular we use `*` to use use or other conditions. and add bootstrap as our styling library.
- loop syntax look like this _**`<div *ngFor="let item of array"></div>`**_.

## [4 commit: binding data to properties and attributes](https://github.com/makstyle119/todo-angular/tree/fe20401b959899df230273e82c6fe2a5f1ee1071)

- bind attribute to a variable is pretty easy. you just have to warp the attribute inside the large bracket `[id]` and then the value is the variable `[id]="ii"`.
- if you want to do it with a custom attribute you can do this with attribute start with `attr.`

  eg: _**`<div [attr.data-index]="ii"></div>`**_

## [5 commit: binding events](https://github.com/makstyle119/todo-angular/tree/f962a13f9479f8e57e6e92968500664f387555f5)

- bind event is easy in angular all you have to do is to wrap the event eg: ( click, blue ) with round brackets _**`(click)`**_. and js functions or the statement as value.

  eg: _**`<input (click)="func()" />`**_

## [6 commit: using ngModel to bind values to form controls](https://github.com/makstyle119/todo-angular/tree/e60129c1cb0234cb6a94633596e390ec52a58948)

- so first you have to create a variable in component file and don't forget to import _**`formModule`**_. and add an attribute into input like this:

  eg: _**`<input name="fieldName" [(ngModel)]="variableNameThatYouDeclareInComponentFile" />`**_

- \*it's not mandatory to have field and variable same name

## [7 commit: listing for changes to ngModel values](https://github.com/makstyle119/todo-angular/tree/0c558c8dd135393ed4a1cee0935c675b0f856b3b)

- _**`ngModelChange`**_ is use to get the updated value from a input:

  eg: _**`<select name="fieldName" [(ngModelChange)]="func($event)" />`**_

## [8 commit: using Getting to filter and provide data](https://github.com/makstyle119/todo-angular/tree/b94bfcd9e645d884412b4d66cd94f4012cafd502)

- we don't do much here just use js getter function to update _**`visibleItem`**_ array

## [9 commit: creating custom component](https://github.com/makstyle119/todo-angular/tree/6ee7149b961b6b400322c2ad6b61220099dcb261)

- we just break component into a child component, the important thing is here that we use input decorator for input in function ( just like props in js ) and component name is define in component file

## [10 commit: outputting information from a component](https://github.com/makstyle119/todo-angular/tree/54dad9fbcdecf63b9af3c8eae7ae98305bb0a746)

- we break our form component into another component and the new thing we know in this step is output and EventEmitter attribute ( output is use to output a value, and EventEmitter is use with output to handle event on a instance)

## [11 commit: initialize component functionality](https://github.com/makstyle119/todo-angular/tree/94884a9d9daad0c5a8f4c0f2e2eb2bb37dbbac4d)

- in this step we do the same thing and move filter into child component. ( nothing special to mention here ).

## [12 commit: setting up two-way binding](https://github.com/makstyle119/todo-angular/tree/2f86a33370b0dfd11f527734d9269c11a187c746)

- in this section we learn two way binding and a important thing is that if our input and output value is same we will add change in the last to make it identified for angular. ( eg: _**`item`**_ => _**`itemChange`**_ )

## [13 commit: practice up two-way binding](https://github.com/makstyle119/todo-angular/tree/f59a9422d59d6f7690f2f935a8d72f0f813a10bf)

- nothing much just do same as last commit and break list component into child component.

## [14 commit: styling component](https://github.com/makstyle119/todo-angular/tree/b79fe80bfd3962b02f418f29407db9f7a3df08d0)

- we use _**`ngClass`**_ to do conditional rendering and we can provide it's value as _**`string`**_, _**`array`**_, or _**`object`**_

## [15 commit: using observables to create an event bus](https://github.com/makstyle119/todo-angular/tree/e35ba71c402b2d39b345def498c99f3c113771fe)

- so we learn how to make event bus ( how it's work ? it's simple you create a f event somewhere and then emit it from anywhere just like redux for events ).

## [16 commit: refactoring the listing component]()

- we add remove item functionality using event bus
