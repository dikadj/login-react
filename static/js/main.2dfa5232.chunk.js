(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(27)},27:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(4),o=a(5),c=a(6),i=a(7),l=a(10),m=a(8),p=a(11),h=a(9),d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).validateLogin=function(){return a.state.email.length>0&&a.state.password.length>0},a.handleChange=function(e){a.setState(Object(o.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log("\n      email: ".concat(a.state.email,"\n      password: ").concat(a.state.password,"\n    "))},a.state={email:"",password:"",remember:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(h.Helmet,null,s.a.createElement("title",null,"Login Page"),s.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"})),s.a.createElement("br",null)," ",s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email address",value:this.state.email,onChange:this.handleChange}),s.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group form-check"},s.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"remember"}),s.a.createElement("label",{className:"form-check-label",htmlFor:"remember"},"Remember me")),s.a.createElement("button",{type:"submit",className:"btn btn-warning",disabled:!this.validateLogin()},"Submit")),s.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossOrigin:"anonymous"}),s.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",crossOrigin:"anonymous"}),s.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",crossOrigin:"anonymous"}))}}]),t}(n.Component);Object(r.render)(s.a.createElement(d,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2dfa5232.chunk.js.map