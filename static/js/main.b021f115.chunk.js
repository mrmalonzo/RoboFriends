(this.webpackJsonprobofriendexer=this.webpackJsonprobofriendexer||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),o=n.n(s),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))}),i=(n(13),n(2)),h=n(3),l=n(5),b=n(4),d=n(0),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(d.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[" ",Object(d.jsx)("img",{alt:"Robot Card",src:"https://robohash.org/"+r+"?200x200"}),Object(d.jsxs)("div",{children:["      ",Object(d.jsx)("h2",{children:t})," ",Object(d.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots,n=t.map((function(e,n){return Object(d.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},e.id)}));return Object(d.jsx)("div",{children:n})},f=function(e){var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},O=(n(15),function(e){return Object(d.jsxs)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"700px"},children:[" ",e.children]})}),g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(r.Component),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(d.jsx)("h1",{className:"tc",children:"Loading"}):(console.log(t),Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(f,{searchChange:this.onSearchChange}),Object(d.jsxs)(O,{children:[" ",Object(d.jsxs)(g,{children:[" ",Object(d.jsx)(j,{robots:t})," "]})]})," "]}))}}]),n}(r.Component);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.b021f115.chunk.js.map