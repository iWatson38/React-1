(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[4],{292:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2kHc4",dialogsItems:"Dialogs_dialogsItems__3occo",active:"Dialogs_active__3SPE_",messages:"Dialogs_messages__1ziFJ",message:"Dialogs_message__2r7mk"}},294:function(e,s,a){e.exports={item:"DialogItem_item__21rQY",avatar:"DialogItem_avatar__uJdiB",nickname:"DialogItem_nickname__ANGky"}},301:function(e,s,a){"use strict";a.r(s);var t=a(126),n=a(0),i=a.n(n),c=a(292),o=a.n(c),r=a(14),j=a(294),d=a.n(j),m=a(1);var l=function(e){var s="/dialogs/"+e.id;return Object(m.jsxs)("div",{className:d.a.item,children:[Object(m.jsx)("img",{className:d.a.avatar,src:"https://yt3.ggpht.com/a/AATXAJzVPI2I0PGAFTwf4qDsA5bpLjyjQ7Ac-kBqMQ=s900-c-k-c0xffffffff-no-rj-mo"}),Object(m.jsx)(r.b,{className:d.a.nickname,to:s,children:e.name})]})};var u=function(e){return Object(m.jsx)("div",{className:o.a.message,children:e.message})},g=a(8),b=a(89),f=a(127),O=a(64),h=a(75),_=Object(h.a)(100),v=Object(f.a)({form:"dialogAddMessageForm"})((function(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(b.a,{component:O.b,validate:[h.b,_],name:"newMessageBody",placeholder:"Enter your message"})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Send"})})]})}));var x=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(m.jsx)(l,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(m.jsx)(u,{message:e.message},e.id)}));return e.isAuth?Object(m.jsxs)("div",{className:o.a.dialogs,children:[Object(m.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(m.jsxs)("div",{className:o.a.messages,children:[Object(m.jsx)("div",{children:t}),Object(m.jsx)(v,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]}):Object(m.jsx)(g.a,{to:"/Login"})},p=a(16),A=a(5),k=a(34),D=a(35),y=a(38),I=a(37),N=function(e){return{isAuth:e.auth.isAuth}},M=a(10);s.default=Object(M.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(t.b)(s))}}})),(function(e){var s=function(s){Object(y.a)(t,s);var a=Object(I.a)(t);function t(){return Object(k.a)(this,t),a.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(m.jsx)(e,Object(A.a)({},this.props)):Object(m.jsx)(g.a,{to:"/login"})}}]),t}(i.a.Component);return Object(p.b)(N)(s)}))(x)}}]);
//# sourceMappingURL=4.2e152e2f.chunk.js.map