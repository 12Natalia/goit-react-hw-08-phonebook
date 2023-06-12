"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[329],{8329:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var a=r(9439),t=r(168),i=r(3517),s=r(1891),o=r(7309),c=r(6908),l=r(9214),d=r(7462),u=r(2791),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},m=r(4291),p=function(e,n){return u.createElement(m.Z,(0,d.Z)({},e,{ref:n,icon:h}))};var f,x,Z,g,w,v,j,P,b,z,y,k,V=u.forwardRef(p),E=r(8999),M=r(1087),F=(0,i.ZP)(s.Z.Item)(f||(f=(0,t.Z)(["\n  label {\n    width: 150px;\n    padding-top: 8px;\n  }\n"]))),C=i.ZP.div(x||(x=(0,t.Z)(["\n  padding-top: 10%;\n  display: flex;\n  padding-left: 20%;\n"]))),H=(0,i.ZP)(s.Z)(Z||(Z=(0,t.Z)(["\n  width: 500px;\n"]))),R=(0,i.ZP)(o.ZP)(g||(g=(0,t.Z)(["\n  width: 100px;\n  height: 40px;\n  margin-left: 30%;\n  display: block;\n  font-size: 18px;\n"]))),S=(0,i.ZP)(c.Z)(w||(w=(0,t.Z)(["\n  height: 40px;\n  font-size: 18px;\n"]))),q=(0,i.ZP)(c.Z.Password)(v||(v=(0,t.Z)(["\n  height: 40px;\n  font-size: 18px;\n"]))),T=(0,i.ZP)(l.Z)(j||(j=(0,t.Z)(["\n  color: #c7c6c6;\n"]))),_=(0,i.ZP)(V)(P||(P=(0,t.Z)(["\n  color: #c7c6c6;\n"]))),B=(0,i.ZP)(E.Z)(b||(b=(0,t.Z)(["\n  color: #c7c6c6;\n"]))),L=(0,i.ZP)(M.rU)(z||(z=(0,t.Z)(["\n  font-size: 18px;\n  margin: 0 4px;\n"]))),A=i.ZP.div(y||(y=(0,t.Z)(["\n  font-size: 18px;\n  line-height: 1.11;\n  position: absolute;\n  top: -1%;\n  left: 50%;\n  margin-left: 60px;\n"]))),I=i.ZP.h2(k||(k=(0,t.Z)(["\n  margin-left: 30%;\n  margin-bottom: 15px;\n  color: #2e2d2dbc;\n"]))),N=r(7889),U=r(9434),W=r(184);function D(){var e=H.useForm(),n=(0,a.Z)(e,1)[0],r=(0,U.I0)(),t=(0,U.v9)((function(e){return e.auth})),i=t.isLoading,s=t.error;return(0,W.jsx)("section",{children:(0,W.jsx)(C,{children:(0,W.jsxs)(H,{form:n,name:"register",onFinish:function(e){var a=e.name,t=e.email,o=e.password;o===e.confirm&&(r((0,N.z2)({name:a,email:t,password:o})),!i&&!s&&n.resetFields())},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0,children:[(0,W.jsx)(I,{children:"Register new user"}),(0,W.jsx)(F,{name:"name",label:"Name",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your name!",whitespace:!0}],children:(0,W.jsx)(S,{prefix:(0,W.jsx)(_,{})})}),(0,W.jsx)(F,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,W.jsx)(S,{prefix:(0,W.jsx)(T,{})})}),(0,W.jsx)(F,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,W.jsx)(q,{prefix:(0,W.jsx)(B,{}),pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{7,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters"})}),(0,W.jsx)(F,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var n=e.getFieldValue;return{validator:function(e,r){return r&&n("password")!==r?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:(0,W.jsx)(q,{prefix:(0,W.jsx)(B,{})})}),(0,W.jsxs)(F,{children:[" ",(0,W.jsx)(R,{type:"primary",htmlType:"submit",children:"Register"})," ",(0,W.jsxs)(A,{children:["or ",(0,W.jsx)(L,{to:"/login",children:" log in"}),"if you already have an account"," "]})]})]})})})}},8999:function(e,n,r){r.d(n,{Z:function(){return c}});var a=r(7462),t=r(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},s=r(4291),o=function(e,n){return t.createElement(s.Z,(0,a.Z)({},e,{ref:n,icon:i}))};var c=t.forwardRef(o)},9214:function(e,n,r){r.d(n,{Z:function(){return c}});var a=r(7462),t=r(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},s=r(4291),o=function(e,n){return t.createElement(s.Z,(0,a.Z)({},e,{ref:n,icon:i}))};var c=t.forwardRef(o)}}]);
//# sourceMappingURL=329.f93ecf1a.chunk.js.map