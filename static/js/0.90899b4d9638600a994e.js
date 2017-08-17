webpackJsonp([0,5],{1004:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Todo",props:["todo"],data:function(){return{editing:!1}},directives:{focus:function(o,t,e){var n=t.value,i=e.context;n&&i.$nextTick(function(){o.focus()})}},methods:{deleteTodo:function(o){this.$emit("deleteTodo",o)},editTodo:function(o){var t=o.todo,e=o.value;this.$emit("editTodo",{todo:t,value:e})},toggleTodo:function(o){this.$emit("toggleTodo",o)},doneEdit:function(o){var t=o.target.value.trim(),e=this.todo;t?this.editing&&(this.editTodo({todo:e,value:t}),this.editing=!1):this.deleteTodo({todo:e})},cancelEdit:function(o){o.target.value=this.todo.text,this.editing=!1}}}},1005:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("li",{staticClass:"todo",class:{completed:o.todo.done,editing:o.editing}},[e("div",{staticClass:"view"},[e("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:o.todo.done},on:{change:function(t){o.toggleTodo(o.todo)}}}),o._v(" "),e("label",{domProps:{textContent:o._s(o.todo.text)},on:{dblclick:function(t){o.editing=!0}}}),o._v(" "),e("button",{staticClass:"destroy",on:{click:function(t){o.deleteTodo(o.todo)}}})]),o._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:o.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:o.editing,expression:"editing"}],staticClass:"edit",domProps:{value:o.todo.text},on:{keyup:[function(t){if(!("button"in t)&&o._k(t.keyCode,"enter",13))return null;o.doneEdit(t)},function(t){if(!("button"in t)&&o._k(t.keyCode,"esc",27))return null;o.cancelEdit(t)}],blur:o.doneEdit}})])},staticRenderFns:[]}},1006:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(53),i=e.n(n),A=e(997),a=e.n(A),p={all:function(o){return o},active:function(o){return o.filter(function(o){return!o.done})},completed:function(o){return o.filter(function(o){return o.done})}},d=[{text:"star this repository",done:!1},{text:"fork this repository",done:!1},{text:"follow author",done:!1}];t.default={components:{Todo:a.a},data:function(){return{visibility:"all",filters:p,todos:JSON.parse(window.localStorage.getItem("todos"))||d}},computed:{allChecked:function(){return this.todos.every(function(o){return o.done})},filteredTodos:function(){return p[this.visibility](this.todos)},remaining:function(){return this.todos.filter(function(o){return!o.done}).length}},methods:{setLocalStorgae:function(){window.localStorage.setItem("todos",i()(this.todos))},addTodo:function(o){var t=o.target.value;t.trim()&&(this.todos.push({text:t,done:!1}),this.setLocalStorgae()),o.target.value=""},toggleTodo:function(o){o.done=!o.done,this.setLocalStorgae()},deleteTodo:function(o){console.log(o),this.todos.splice(this.todos.indexOf(o),1),this.setLocalStorgae()},editTodo:function(o){var t=o.todo,e=o.value;console.log(t,e),t.text=e,this.setLocalStorgae()},clearCompleted:function(){this.todos=this.todos.filter(function(o){return!o.done}),this.setLocalStorgae()},toggleAll:function(o){var t=this,e=o.done;this.todos.forEach(function(o){o.done=e,t.setLocalStorgae()})}},filters:{pluralize:function(o,t){return 1===o?t:t+"s"},capitalize:function(o){return o.charAt(0).toUpperCase()+o.slice(1)}}}},1015:function(o,t,e){t=o.exports=e(995)(!0),t.push([o.i,'.todoapp{font:14px Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.4em;color:#4d4d4d;min-width:230px;max-width:550px;margin:40px auto 0;font-weight:300}.todoapp,.todoapp button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.todoapp button{margin:0;padding:0;border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.todoapp :focus{outline:0}.todoapp .hidden{display:none}.todoapp .todoapp{background:#fff;margin:130px 0 40px;position:relative;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.todoapp .todoapp input::-webkit-input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp .todoapp input::-moz-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp .todoapp input::input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp .todoapp h1{position:absolute;top:-155px;width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15);-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.todoapp .edit,.todoapp .new-todo{position:relative;margin:0;width:100%;font-size:18px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;-webkit-box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.todoapp .new-todo{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,.03);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.todoapp .main{position:relative;z-index:2;border-top:1px solid #e6e6e6}.todoapp .toggle-all{text-align:center;border:none;opacity:0;position:absolute}.todoapp .toggle-all+label{width:60px;height:34px;font-size:0;position:absolute;top:-52px;left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.todoapp .toggle-all+label:before{content:"\\276F";font-size:22px;color:#e6e6e6;padding:10px 27px}.todoapp .toggle-all:checked+label:before{color:#737373}.todoapp .todo-list{margin:0;padding:0;list-style:none}.todoapp .todo-list li{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todoapp .todo-list li:last-child{border-bottom:none}.todoapp .todo-list li.editing{border-bottom:none;padding:0}.todoapp .todo-list li.editing .edit{display:block;width:506px;padding:12px 16px;margin:0 0 0 43px}.todoapp .todo-list li.editing .view{display:none}.todoapp .todo-list li .toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0}.todoapp .todo-list li .toggle+label{background-image:url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:0;background-size:36px}.todoapp .todo-list li .toggle:checked+label{background-size:36px;background-image:url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E")}.todoapp .todo-list li label{word-break:break-all;padding:15px 15px 15px 50px;display:block;line-height:1;font-size:14px;-webkit-transition:color .4s;transition:color .4s}.todoapp .todo-list li.completed label{color:#d9d9d9;text-decoration:line-through}.todoapp .todo-list li .destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;-webkit-transition:color .2s ease-out;transition:color .2s ease-out}.todoapp .todo-list li .destroy:hover{color:#af5b5e}.todoapp .todo-list li .destroy:after{content:"\\D7"}.todoapp .todo-list li:hover .destroy{display:block}.todoapp .todo-list li .edit{display:none}.todoapp .todo-list li.editing:last-child{margin-bottom:-1px}.todoapp .footer{color:#777;position:relative;padding:10px 15px;height:40px;text-align:center;border-top:1px solid #e6e6e6}.todoapp .footer:before{content:"";position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.todoapp .todo-count{float:left;text-align:left}.todoapp .todo-count strong{font-weight:300}.todoapp .filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:-20px}.todoapp .filters li{display:inline}.todoapp .filters li a{color:inherit;margin:3px;font-size:12px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}.todoapp .filters li a:hover{border-color:rgba(175,47,47,.1)}.todoapp .filters li a.selected{border-color:rgba(175,47,47,.2)}.todoapp .clear-completed,.todoapp html .clear-completed:active{float:right;position:relative;line-height:20px;text-decoration:none;cursor:pointer}.todoapp .clear-completed:hover{text-decoration:underline}.todoapp .info{margin:65px auto 0;color:#bfbfbf;font-size:10px;text-shadow:0 1px 0 hsla(0,0%,100%,.5);text-align:center}.todoapp .info p{line-height:1}.todoapp .info a{color:inherit;text-decoration:none;font-weight:400}.todoapp .info a:hover{text-decoration:underline}@media screen and (-webkit-min-device-pixel-ratio:0){.todoapp .todo-list li .toggle,.todoapp .toggle-all{background:none}.todoapp .todo-list li .toggle{height:40px}}@media (max-width:430px){.todoapp .footer{height:50px}.todoapp .filters{bottom:10px}}',"",{version:3,sources:["/Users/herozhou/Documents/github完整代码/git/vue-framework-wz/src/views/TodoList/index.vue"],names:[],mappings:"AAEA,SACE,oDAA0D,AAC1D,kBAAmB,AACnB,cAAe,AACf,gBAAiB,AACjB,gBAAiB,AACjB,mBAAoB,AAGpB,eAAiB,CAKlB,AACD,yBARE,mCAAoC,AACpC,iCAAmC,CAsBpC,AAfD,gBACI,SAAU,AACV,UAAW,AACX,SAAU,AACV,gBAAiB,AACjB,eAAgB,AAChB,wBAAyB,AACzB,oBAAqB,AACrB,oBAAqB,AACrB,cAAe,AACf,wBAAyB,AACzB,qBAAsB,AACjB,eAAiB,CAGzB,AACD,gBACI,SAAW,CACd,AACD,iBACI,YAAc,CACjB,AACD,kBACI,gBAAiB,AACjB,oBAAuB,AACvB,kBAAmB,AACnB,2EAAqF,AAC7E,kEAA6E,CACxF,AACD,mDACI,kBAAmB,AACnB,gBAAiB,AACjB,aAAe,CAClB,AACD,0CACI,kBAAmB,AACnB,gBAAiB,AACjB,aAAe,CAClB,AACD,2CACI,kBAAmB,AACnB,gBAAiB,AACjB,aAAe,CAClB,AACD,qBACI,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,0BAA+B,AAC/B,0CAA2C,AAC3C,uCAAwC,AACxC,iCAAmC,CACtC,AACD,kCAEI,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,eAAgB,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,kBAAmB,AACnB,SAAU,AACV,cAAe,AACf,YAAa,AACb,sBAAuB,AACvB,qDAA0D,AAClD,6CAAkD,AAC1D,8BAA+B,AACvB,sBAAuB,AAC/B,mCAAoC,AACpC,iCAAmC,CACtC,AACD,mBACI,4BAA6B,AAC7B,YAAa,AACb,4BAAiC,AACjC,oDAAyD,AACjD,2CAAiD,CAC5D,AACD,eACI,kBAAmB,AACnB,UAAW,AACX,4BAA8B,CACjC,AACD,qBACI,kBAAmB,AACnB,YAAa,AAEb,UAAW,AACX,iBAAmB,CACtB,AACD,2BACI,WAAY,AACZ,YAAa,AACb,YAAa,AACb,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,gCAAiC,AACjC,uBAAyB,CAC5B,AACD,kCACI,gBAAa,AACb,eAAgB,AAChB,cAAe,AACf,iBAA6B,CAChC,AACD,0CACI,aAAe,CAClB,AACD,oBACI,SAAU,AACV,UAAW,AACX,eAAiB,CACpB,AACD,uBACI,kBAAmB,AACnB,eAAgB,AAChB,+BAAiC,CACpC,AACD,kCACI,kBAAoB,CACvB,AACD,+BACI,mBAAoB,AACpB,SAAW,CACd,AACD,qCACI,cAAe,AACf,YAAa,AACb,kBAAmB,AACnB,iBAAmB,CACtB,AACD,qCACI,YAAc,CACjB,AACD,+BACI,kBAAmB,AACnB,WAAY,AAEZ,YAAa,AACb,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,cAAe,AACf,YAAa,AAEb,wBAAyB,AACzB,qBAAsB,AACjB,gBAAiB,AAGtB,SAAW,CAFd,AAID,qCAKI,oUAAqU,AACrU,4BAA6B,AAC7B,sBAAiC,AACjC,oBAAsB,CACzB,AACD,6CACI,qBAAsB,AACtB,waAA0a,CAC7a,AACD,6BACI,qBAAsB,AACtB,4BAA6B,AAC7B,cAAe,AACf,cAAiB,AACjB,eAAgB,AAChB,6BAA+B,AAC/B,oBAAuB,CAC1B,AACD,uCACI,cAAe,AACf,4BAA8B,CACjC,AACD,gCACI,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,WAAY,AACZ,SAAU,AACV,WAAY,AACZ,YAAa,AACb,cAAe,AACf,eAAgB,AAChB,cAAe,AACf,sCAAwC,AACxC,6BAAgC,CACnC,AACD,sCACI,aAAe,CAClB,AACD,sCACI,aAAa,CAChB,AACD,sCACI,aAAe,CAClB,AACD,6BACI,YAAc,CACjB,AACD,0CACI,kBAAoB,CACvB,AACD,iBACI,WAAY,AACZ,kBAAmB,AACnB,kBAAmB,AACnB,YAAa,AACb,kBAAmB,AACnB,4BAA8B,CACjC,AACD,wBACI,WAAY,AACZ,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,OAAQ,AACR,YAAa,AACb,gBAAiB,AACjB,oJAAqK,AAC7J,2IAA6J,CACxK,AACD,qBACI,WAAY,AACZ,eAAiB,CACpB,AACD,4BACI,eAAiB,CACpB,AACD,kBACI,SAAU,AACV,UAAW,AACX,gBAAiB,AACjB,kBAAmB,AACnB,QAAS,AACT,UAAY,CACf,AACD,qBACI,cAAgB,CACnB,AACD,uBACI,cAAe,AACf,WAAY,AACZ,eAAgB,AAChB,gBAAiB,AACjB,qBAAsB,AACtB,6BAA8B,AAC9B,iBAAmB,CACtB,AACD,6BACI,+BAAqC,CACxC,AACD,gCACI,+BAAqC,CACxC,AACD,gEAEI,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,qBAAsB,AACtB,cAAgB,CACnB,AACD,gCACI,yBAA2B,CAC9B,AACD,eACI,mBAAoB,AACpB,cAAe,AACf,eAAgB,AAChB,uCAA8C,AAC9C,iBAAmB,CACtB,AACD,iBACI,aAAe,CAClB,AACD,iBACI,cAAe,AACf,qBAAsB,AACtB,eAAiB,CACpB,AACD,uBACI,yBAA2B,CAC9B,AACD,qDACA,oDAEM,eAAiB,CACtB,AACD,+BACM,WAAa,CAClB,CACA,AACD,yBACA,iBACM,WAAa,CAClB,AACD,kBACM,WAAa,CAClB,CACA",file:"index.vue",sourcesContent:["\n@charset \"UTF-8\";\n.todoapp {\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 40PX auto 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n  /*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n}\n.todoapp button {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: none;\n    font-size: 100%;\n    vertical-align: baseline;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n         appearance: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.todoapp :focus {\n    outline: 0;\n}\n.todoapp .hidden {\n    display: none;\n}\n.todoapp .todoapp {\n    background: #fff;\n    margin: 130px 0 40px 0;\n    position: relative;\n    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.todoapp .todoapp input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: #e6e6e6;\n}\n.todoapp .todoapp input::-moz-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: #e6e6e6;\n}\n.todoapp .todoapp input::input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: #e6e6e6;\n}\n.todoapp .todoapp h1 {\n    position: absolute;\n    top: -155px;\n    width: 100%;\n    font-size: 100px;\n    font-weight: 100;\n    text-align: center;\n    color: rgba(175, 47, 47, 0.15);\n    -webkit-text-rendering: optimizeLegibility;\n    -moz-text-rendering: optimizeLegibility;\n    text-rendering: optimizeLegibility;\n}\n.todoapp .new-todo,\n  .todoapp .edit {\n    position: relative;\n    margin: 0;\n    width: 100%;\n    font-size: 18px;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: 1.4em;\n    border: 0;\n    color: inherit;\n    padding: 6px;\n    border: 1px solid #999;\n    -webkit-box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n            box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.todoapp .new-todo {\n    padding: 16px 16px 16px 60px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    -webkit-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n            box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n.todoapp .main {\n    position: relative;\n    z-index: 2;\n    border-top: 1px solid #e6e6e6;\n}\n.todoapp .toggle-all {\n    text-align: center;\n    border: none;\n    /* Mobile Safari */\n    opacity: 0;\n    position: absolute;\n}\n.todoapp .toggle-all + label {\n    width: 60px;\n    height: 34px;\n    font-size: 0;\n    position: absolute;\n    top: -52px;\n    left: -13px;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n.todoapp .toggle-all + label:before {\n    content: '❯';\n    font-size: 22px;\n    color: #e6e6e6;\n    padding: 10px 27px 10px 27px;\n}\n.todoapp .toggle-all:checked + label:before {\n    color: #737373;\n}\n.todoapp .todo-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.todoapp .todo-list li {\n    position: relative;\n    font-size: 24px;\n    border-bottom: 1px solid #ededed;\n}\n.todoapp .todo-list li:last-child {\n    border-bottom: none;\n}\n.todoapp .todo-list li.editing {\n    border-bottom: none;\n    padding: 0;\n}\n.todoapp .todo-list li.editing .edit {\n    display: block;\n    width: 506px;\n    padding: 12px 16px;\n    margin: 0 0 0 43px;\n}\n.todoapp .todo-list li.editing .view {\n    display: none;\n}\n.todoapp .todo-list li .toggle {\n    text-align: center;\n    width: 40px;\n    /* auto, since non-WebKit browsers doesn't support input styling */\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    border: none;\n    /* Mobile Safari */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n         appearance: none;\n}\n.todoapp .todo-list li .toggle {\n    opacity: 0;\n}\n.todoapp .todo-list li .toggle + label {\n    /*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n    background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: center left;\n    background-size: 36px;\n}\n.todoapp .todo-list li .toggle:checked + label {\n    background-size: 36px;\n    background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\");\n}\n.todoapp .todo-list li label {\n    word-break: break-all;\n    padding: 15px 15px 15px 50px;\n    display: block;\n    line-height: 1.0;\n    font-size: 14px;\n    -webkit-transition: color 0.4s;\n    transition: color 0.4s;\n}\n.todoapp .todo-list li.completed label {\n    color: #d9d9d9;\n    text-decoration: line-through;\n}\n.todoapp .todo-list li .destroy {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 10px;\n    bottom: 0;\n    width: 40px;\n    height: 40px;\n    margin: auto 0;\n    font-size: 30px;\n    color: #cc9a9a;\n    -webkit-transition: color 0.2s ease-out;\n    transition: color 0.2s ease-out;\n}\n.todoapp .todo-list li .destroy:hover {\n    color: #af5b5e;\n}\n.todoapp .todo-list li .destroy:after {\n    content: '×';\n}\n.todoapp .todo-list li:hover .destroy {\n    display: block;\n}\n.todoapp .todo-list li .edit {\n    display: none;\n}\n.todoapp .todo-list li.editing:last-child {\n    margin-bottom: -1px;\n}\n.todoapp .footer {\n    color: #777;\n    position: relative;\n    padding: 10px 15px;\n    height: 40px;\n    text-align: center;\n    border-top: 1px solid #e6e6e6;\n}\n.todoapp .footer:before {\n    content: '';\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 50px;\n    overflow: hidden;\n    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.todoapp .todo-count {\n    float: left;\n    text-align: left;\n}\n.todoapp .todo-count strong {\n    font-weight: 300;\n}\n.todoapp .filters {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: absolute;\n    right: 0;\n    left: -20px;\n}\n.todoapp .filters li {\n    display: inline;\n}\n.todoapp .filters li a {\n    color: inherit;\n    margin: 3px;\n    font-size: 12px;\n    padding: 3px 7px;\n    text-decoration: none;\n    border: 1px solid transparent;\n    border-radius: 3px;\n}\n.todoapp .filters li a:hover {\n    border-color: rgba(175, 47, 47, 0.1);\n}\n.todoapp .filters li a.selected {\n    border-color: rgba(175, 47, 47, 0.2);\n}\n.todoapp .clear-completed,\n  .todoapp html .clear-completed:active {\n    float: right;\n    position: relative;\n    line-height: 20px;\n    text-decoration: none;\n    cursor: pointer;\n}\n.todoapp .clear-completed:hover {\n    text-decoration: underline;\n}\n.todoapp .info {\n    margin: 65px auto 0;\n    color: #bfbfbf;\n    font-size: 10px;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    text-align: center;\n}\n.todoapp .info p {\n    line-height: 1;\n}\n.todoapp .info a {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 400;\n}\n.todoapp .info a:hover {\n    text-decoration: underline;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n.todoapp .toggle-all,\n    .todoapp .todo-list li .toggle {\n      background: none;\n}\n.todoapp .todo-list li .toggle {\n      height: 40px;\n}\n}\n@media (max-width: 430px) {\n.todoapp .footer {\n      height: 50px;\n}\n.todoapp .filters {\n      bottom: 10px;\n}\n}\n"],sourceRoot:""}])},1019:function(o,t,e){var n=e(1015);"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);e(996)("18ce7bb1",n,!0)},1024:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("section",{staticClass:"todoapp"},[e("header",{staticClass:"header"},[e("input",{staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:"TODO LIST?"},on:{keyup:function(t){if(!("button"in t)&&o._k(t.keyCode,"enter",13))return null;o.addTodo(t)}}})]),o._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:o.todos.length,expression:"todos.length"}],staticClass:"main"},[e("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:o.allChecked},on:{change:function(t){o.toggleAll({done:!o.allChecked})}}}),o._v(" "),e("label",{attrs:{for:"toggle-all"}}),o._v(" "),e("ul",{staticClass:"todo-list"},o._l(o.filteredTodos,function(t,n){return e("todo",{key:n,attrs:{todo:t},on:{toggleTodo:o.toggleTodo,editTodo:o.editTodo,deleteTodo:o.deleteTodo}})}))]),o._v(" "),e("footer",{directives:[{name:"show",rawName:"v-show",value:o.todos.length,expression:"todos.length"}],staticClass:"footer"},[e("span",{staticClass:"todo-count"},[e("strong",[o._v(o._s(o.remaining))]),o._v("\n      "+o._s(o._f("pluralize")(o.remaining,"item"))+" left\n    ")]),o._v(" "),e("ul",{staticClass:"filters"},o._l(o.filters,function(t,n){return e("li",{key:n},[e("a",{class:{selected:o.visibility===n},on:{click:function(t){t.preventDefault(),o.visibility=n}}},[o._v(o._s(o._f("capitalize")(n)))])])})),o._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:o.todos.length>o.remaining,expression:"todos.length > remaining"}],staticClass:"clear-completed",on:{click:o.clearCompleted}},[o._v("\n      Clear completed\n    ")])])])},staticRenderFns:[]}},997:function(o,t,e){var n=e(1)(e(1004),e(1005),null,null,null);o.exports=n.exports},998:function(o,t,e){function n(o){e(1019)}var i=e(1)(e(1006),e(1024),n,null,null);o.exports=i.exports}});
//# sourceMappingURL=0.90899b4d9638600a994e.js.map