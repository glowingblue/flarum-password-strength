module.exports=function(l){var n={};function t(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return l[e].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=l,t.c=n,t.d=function(l,n,e){t.o(l,n)||Object.defineProperty(l,n,{enumerable:!0,get:e})},t.r=function(l){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},t.t=function(l,n){if(1&n&&(l=t(l)),8&n)return l;if(4&n&&"object"==typeof l&&l&&l.__esModule)return l;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:l}),2&n&&"string"!=typeof l)for(var s in l)t.d(e,s,function(n){return l[n]}.bind(null,s));return e},t.n=function(l){var n=l&&l.__esModule?function(){return l.default}:function(){return l};return t.d(n,"a",n),n},t.o=function(l,n){return Object.prototype.hasOwnProperty.call(l,n)},t.p="",t(t.s=9)}([function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));var e="glowingblue-password-strength"},function(l,n){l.exports=flarum.core.compat["common/Component"]},function(l,n){l.exports=flarum.core.compat["common/app"]},function(l,n){l.exports=flarum.core.compat["common/utils/Stream"]},function(l,n){l.exports=flarum.core.compat["common/helpers/icon"]},function(l,n){l.exports=flarum.core.compat["common/extend"]},function(l,n){l.exports=flarum.core.compat["common/utils/extractText"]},function(l,n){l.exports=flarum.core.compat["forum/components/LogInModal"]},function(l,n){l.exports=flarum.core.compat["forum/components/SignUpModal"]},function(l,n,t){"use strict";t.r(n);var e=t(2),s=t.n(e),u=t(5),r=t(7),a=t.n(r),o=t(8),i=t.n(o),c=t(3),h=t.n(c),d=t(0);function p(l,n){return(p=Object.setPrototypeOf||function(l,n){return l.__proto__=n,l})(l,n)}function g(l,n){l.prototype=Object.create(n.prototype),l.prototype.constructor=l,p(l,n)}var f=t(1),b=t.n(f),y=t(6),w=t.n(y),k=t(4),v=t.n(k),x=function(l){function n(){return l.apply(this,arguments)||this}g(n,l);var t=n.prototype;return t.oninit=function(n){l.prototype.oninit.call(this,n)},t.view=function(){var l=this.attrs.showing;return m("span",{className:"EyeButton",onclick:function(){return l(!l())}},v()("fas fa-eye"+(l()?"-slash":"")))},n}(b.a),j=app.translator.trans.bind(app.translator),M=function(l){function n(){return l.apply(this,arguments)||this}g(n,l);var t=n.prototype;return t.oninit=function(n){l.prototype.oninit.call(this,n)},t.view=function(){var l=this.attrs,n=l.parent_this,t=l.showingPassword;return m("div",{className:"Form-group PasswordField"},m("input",{className:"FormControl togglable",name:"password",type:t()?"text":"password",placeholder:w()(j("core.forum.log_in.password_placeholder")),bidi:n.password,disabled:n.loading}),m(x,{showing:t}))},n}(b.a);const T=(l,n)=>l.push.apply(l,n),S=(l,n)=>l.split("").map(l=>n[l]||l).join(""),I=l=>l.sort((l,n)=>l.i-n.i||l.j-n.j),D=l=>{const n={};let t=1;return l.forEach(l=>{n[l]=t,t+=1}),n};var P={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},O={azerty:{0:["ç9",null,null,")°","pP","oO"],1:["²~",null,null,"é2","aA",null],2:["&1",null,null,'"3',"zZ","aA"],3:["é2",null,null,"'4","eE","zZ"],4:['"3',null,null,"(5","rR","eE"],5:["'4",null,null,"-6","tT","rR"],6:["(5",null,null,"è7","yY","tT"],7:["-6",null,null,"_8","uU","yY"],8:["è7",null,null,"ç9","iI","uU"],9:["_8",null,null,"à0","oO","iI"],"²":[null,null,null,"&1",null,null],"~":[null,null,null,"&1",null,null],"&":["²~",null,null,"é2","aA",null],"é":["&1",null,null,'"3',"zZ","aA"],'"':["pP",")°","+=","$£","ù%","mM"],"'":['"3',null,null,"(5","rR","eE"],"(":["'4",null,null,"-6","tT","rR"],"-":["(5",null,null,"è7","yY","tT"],"è":["-6",null,null,"_8","uU","yY"],_:["è7",null,null,"ç9","iI","uU"],"ç":["_8",null,null,"à0","oO","iI"],"à":["ç9",null,null,")°","pP","oO"],")":["à0",null,null,"+=",'^"',"pP"],"°":["à0",null,null,"+=",'^"',"pP"],"+":[")°",null,null,null,"$£",'^"'],"=":[")°",null,null,null,"$£",'^"'],a:[null,"&1","é2","zZ","qQ",null],A:[null,"&1","é2","zZ","qQ",null],z:["aA","é2",'"3',"eE","sS","qQ"],Z:["aA","é2",'"3',"eE","sS","qQ"],e:["zZ",'"3',"'4","rR","dD","sS"],E:["zZ",'"3',"'4","rR","dD","sS"],r:["eE","'4","(5","tT","fF","dD"],R:["eE","'4","(5","tT","fF","dD"],t:["rR","(5","-6","yY","gG","fF"],T:["rR","(5","-6","yY","gG","fF"],y:["tT","-6","è7","uU","hH","gG"],Y:["tT","-6","è7","uU","hH","gG"],u:["yY","è7","_8","iI","jJ","hH"],U:["yY","è7","_8","iI","jJ","hH"],i:["uU","_8","ç9","oO","kK","jJ"],I:["uU","_8","ç9","oO","kK","jJ"],o:["iI","ç9","à0","pP","lL","kK"],O:["iI","ç9","à0","pP","lL","kK"],p:["oO","à0",")°",'^"',"mM","lL"],P:["oO","à0",")°",'^"',"mM","lL"],"^":["pP",")°","+=","$£","ù%","mM"],$:['^"',"+=",null,null,"*µ","ù%"],"£":['^"',"+=",null,null,"*µ","ù%"],q:[null,"aA","zZ","sS","wW","<>"],Q:[null,"aA","zZ","sS","wW","<>"],s:["qQ","zZ","eE","dD","xX","wW"],S:["qQ","zZ","eE","dD","xX","wW"],d:["sS","eE","rR","fF","cC","xX"],D:["sS","eE","rR","fF","cC","xX"],f:["dD","rR","tT","gG","vV","cC"],F:["dD","rR","tT","gG","vV","cC"],g:["fF","tT","yY","hH","bB","vV"],G:["fF","tT","yY","hH","bB","vV"],h:["gG","yY","uU","jJ","nN","bB"],H:["gG","yY","uU","jJ","nN","bB"],j:["hH","uU","iI","kK",",?","nN"],J:["hH","uU","iI","kK",",?","nN"],k:["jJ","iI","oO","lL",";.",",?"],K:["jJ","iI","oO","lL",";.",",?"],l:["kK","oO","pP","mM",":/",";."],L:["kK","oO","pP","mM",":/",";."],m:["lL","pP",'^"',"ù%","!§",":/"],M:["lL","pP",'^"',"ù%","!§",":/"],"ù":["mM",'^"',"$£","*µ",null,"!§"],"%":["mM",'^"',"$£","*µ",null,"!§"],"*":["ù%","$£",null,null,null,null],"µ":["ù%","$£",null,null,null,null],"<":[null,null,"qQ","wW",null,null],">":[null,null,"qQ","wW",null,null],w:["<>","qQ","sS","xX",null,null],W:["<>","qQ","sS","xX",null,null],x:["wW","sS","dD","cC",null,null],X:["wW","sS","dD","cC",null,null],c:["xX","dD","fF","vV",null,null],C:["xX","dD","fF","vV",null,null],v:["cC","fF","gG","bB",null,null],V:["cC","fF","gG","bB",null,null],b:["vV","gG","hH","nN",null,null],B:["vV","gG","hH","nN",null,null],n:["bB","hH","jJ",",?",null,null],N:["bB","hH","jJ",",?",null,null],",":["nN","jJ","kK",";.",null,null],"?":["nN","jJ","kK",";.",null,null],";":[",?","kK","lL",":/",null,null],".":[",?","kK","lL",":/",null,null],":":[";.","lL","mM","!§",null,null],"/":[";.","lL","mM","!§",null,null],"!":[":/","mM","ù%",null,null,null],"§":[":/","mM","ù%",null,null,null]},dvorak:{0:["9(",null,null,"[{","lL","rR"],1:["`~",null,null,"2@","'\"",null],2:["1!",null,null,"3#",",<","'\""],3:["2@",null,null,"4$",".>",",<"],4:["3#",null,null,"5%","pP",".>"],5:["4$",null,null,"6^","yY","pP"],6:["5%",null,null,"7&","fF","yY"],7:["6^",null,null,"8*","gG","fF"],8:["7&",null,null,"9(","cC","gG"],9:["8*",null,null,"0)","rR","cC"],"`":[null,null,null,"1!",null,null],"~":[null,null,null,"1!",null,null],"!":["`~",null,null,"2@","'\"",null],"@":["1!",null,null,"3#",",<","'\""],"#":["2@",null,null,"4$",".>",",<"],$:["3#",null,null,"5%","pP",".>"],"%":["4$",null,null,"6^","yY","pP"],"^":["5%",null,null,"7&","fF","yY"],"&":["6^",null,null,"8*","gG","fF"],"*":["7&",null,null,"9(","cC","gG"],"(":["8*",null,null,"0)","rR","cC"],")":["9(",null,null,"[{","lL","rR"],"[":["0)",null,null,"]}","/?","lL"],"{":["0)",null,null,"]}","/?","lL"],"]":["[{",null,null,null,"=+","/?"],"}":["[{",null,null,null,"=+","/?"],"'":[null,"1!","2@",",<","aA",null],'"':[null,"1!","2@",",<","aA",null],",":["'\"","2@","3#",".>","oO","aA"],"<":["'\"","2@","3#",".>","oO","aA"],".":[",<","3#","4$","pP","eE","oO"],">":[",<","3#","4$","pP","eE","oO"],p:[".>","4$","5%","yY","uU","eE"],P:[".>","4$","5%","yY","uU","eE"],y:["pP","5%","6^","fF","iI","uU"],Y:["pP","5%","6^","fF","iI","uU"],f:["yY","6^","7&","gG","dD","iI"],F:["yY","6^","7&","gG","dD","iI"],g:["fF","7&","8*","cC","hH","dD"],G:["fF","7&","8*","cC","hH","dD"],c:["gG","8*","9(","rR","tT","hH"],C:["gG","8*","9(","rR","tT","hH"],r:["cC","9(","0)","lL","nN","tT"],R:["cC","9(","0)","lL","nN","tT"],l:["rR","0)","[{","/?","sS","nN"],L:["rR","0)","[{","/?","sS","nN"],"/":["lL","[{","]}","=+","-_","sS"],"?":["lL","[{","]}","=+","-_","sS"],"=":["/?","]}",null,"\\|",null,"-_"],"+":["/?","]}",null,"\\|",null,"-_"],"\\":["=+",null,null,null,null,null],"|":["=+",null,null,null,null,null],a:[null,"'\"",",<","oO",";:",null],A:[null,"'\"",",<","oO",";:",null],o:["aA",",<",".>","eE","qQ",";:"],O:["aA",",<",".>","eE","qQ",";:"],e:["oO",".>","pP","uU","jJ","qQ"],E:["oO",".>","pP","uU","jJ","qQ"],u:["eE","pP","yY","iI","kK","jJ"],U:["eE","pP","yY","iI","kK","jJ"],i:["uU","yY","fF","dD","xX","kK"],I:["uU","yY","fF","dD","xX","kK"],d:["iI","fF","gG","hH","bB","xX"],D:["iI","fF","gG","hH","bB","xX"],h:["dD","gG","cC","tT","mM","bB"],H:["dD","gG","cC","tT","mM","bB"],t:["hH","cC","rR","nN","wW","mM"],T:["hH","cC","rR","nN","wW","mM"],n:["tT","rR","lL","sS","vV","wW"],N:["tT","rR","lL","sS","vV","wW"],s:["nN","lL","/?","-_","zZ","vV"],S:["nN","lL","/?","-_","zZ","vV"],"-":["sS","/?","=+",null,null,"zZ"],_:["sS","/?","=+",null,null,"zZ"],";":[null,"aA","oO","qQ",null,null],":":[null,"aA","oO","qQ",null,null],q:[";:","oO","eE","jJ",null,null],Q:[";:","oO","eE","jJ",null,null],j:["qQ","eE","uU","kK",null,null],J:["qQ","eE","uU","kK",null,null],k:["jJ","uU","iI","xX",null,null],K:["jJ","uU","iI","xX",null,null],x:["kK","iI","dD","bB",null,null],X:["kK","iI","dD","bB",null,null],b:["xX","dD","hH","mM",null,null],B:["xX","dD","hH","mM",null,null],m:["bB","hH","tT","wW",null,null],M:["bB","hH","tT","wW",null,null],w:["mM","tT","nN","vV",null,null],W:["mM","tT","nN","vV",null,null],v:["wW","nN","sS","zZ",null,null],V:["wW","nN","sS","zZ",null,null],z:["vV","sS","-_",null,null,null],Z:["vV","sS","-_",null,null,null]},keypad:{0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6",null,null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","+",null,null,"3","2"],7:[null,null,null,"/","8","5","4",null],8:["7",null,"/","*","9","6","5","4"],9:["8","/","*","-","+",null,"6","5"],"/":[null,null,null,null,"*","9","8","7"],"*":["/",null,null,null,"-","+","9","8"],"-":["*",null,null,null,null,null,"+","9"],"+":["9","*","-",null,null,null,null,"6"],".":["0","2","3",null,null,null,null,null]},keypadMac:{0:[null,"1","2","3",".",null,null,null],1:[null,null,"4","5","2","0",null,null],2:["1","4","5","6","3",".","0",null],3:["2","5","6","+",null,null,".","0"],4:[null,null,"7","8","5","2","1",null],5:["4","7","8","9","6","3","2","1"],6:["5","8","9","-","+",null,"3","2"],7:[null,null,null,"=","8","5","4",null],8:["7",null,"=","/","9","6","5","4"],9:["8","=","/","*","-","+","6","5"],"=":[null,null,null,null,"/","9","8","7"],"/":["=",null,null,null,"*","-","9","8"],"*":["/",null,null,null,null,null,"-","9"],"-":["9","/","*",null,null,null,"+","6"],"+":["6","9","-",null,null,null,null,"3"],".":["0","2","3",null,null,null,null,null]},qwerty:{0:["9(",null,null,"-_","pP","oO"],1:["`~",null,null,"2@","qQ",null],2:["1!",null,null,"3#","wW","qQ"],3:["2@",null,null,"4$","eE","wW"],4:["3#",null,null,"5%","rR","eE"],5:["4$",null,null,"6^","tT","rR"],6:["5%",null,null,"7&","yY","tT"],7:["6^",null,null,"8*","uU","yY"],8:["7&",null,null,"9(","iI","uU"],9:["8*",null,null,"0)","oO","iI"],"`":[null,null,null,"1!",null,null],"~":[null,null,null,"1!",null,null],"!":["`~",null,null,"2@","qQ",null],"@":["1!",null,null,"3#","wW","qQ"],"#":["2@",null,null,"4$","eE","wW"],$:["3#",null,null,"5%","rR","eE"],"%":["4$",null,null,"6^","tT","rR"],"^":["5%",null,null,"7&","yY","tT"],"&":["6^",null,null,"8*","uU","yY"],"*":["7&",null,null,"9(","iI","uU"],"(":["8*",null,null,"0)","oO","iI"],")":["9(",null,null,"-_","pP","oO"],"-":["0)",null,null,"=+","[{","pP"],_:["0)",null,null,"=+","[{","pP"],"=":["-_",null,null,null,"]}","[{"],"+":["-_",null,null,null,"]}","[{"],q:[null,"1!","2@","wW","aA",null],Q:[null,"1!","2@","wW","aA",null],w:["qQ","2@","3#","eE","sS","aA"],W:["qQ","2@","3#","eE","sS","aA"],e:["wW","3#","4$","rR","dD","sS"],E:["wW","3#","4$","rR","dD","sS"],r:["eE","4$","5%","tT","fF","dD"],R:["eE","4$","5%","tT","fF","dD"],t:["rR","5%","6^","yY","gG","fF"],T:["rR","5%","6^","yY","gG","fF"],y:["tT","6^","7&","uU","hH","gG"],Y:["tT","6^","7&","uU","hH","gG"],u:["yY","7&","8*","iI","jJ","hH"],U:["yY","7&","8*","iI","jJ","hH"],i:["uU","8*","9(","oO","kK","jJ"],I:["uU","8*","9(","oO","kK","jJ"],o:["iI","9(","0)","pP","lL","kK"],O:["iI","9(","0)","pP","lL","kK"],p:["oO","0)","-_","[{",";:","lL"],P:["oO","0)","-_","[{",";:","lL"],"[":["pP","-_","=+","]}","'\"",";:"],"{":["pP","-_","=+","]}","'\"",";:"],"]":["[{","=+",null,"\\|",null,"'\""],"}":["[{","=+",null,"\\|",null,"'\""],"\\":["]}",null,null,null,null,null],"|":["]}",null,null,null,null,null],a:[null,"qQ","wW","sS","zZ",null],A:[null,"qQ","wW","sS","zZ",null],s:["aA","wW","eE","dD","xX","zZ"],S:["aA","wW","eE","dD","xX","zZ"],d:["sS","eE","rR","fF","cC","xX"],D:["sS","eE","rR","fF","cC","xX"],f:["dD","rR","tT","gG","vV","cC"],F:["dD","rR","tT","gG","vV","cC"],g:["fF","tT","yY","hH","bB","vV"],G:["fF","tT","yY","hH","bB","vV"],h:["gG","yY","uU","jJ","nN","bB"],H:["gG","yY","uU","jJ","nN","bB"],j:["hH","uU","iI","kK","mM","nN"],J:["hH","uU","iI","kK","mM","nN"],k:["jJ","iI","oO","lL",",<","mM"],K:["jJ","iI","oO","lL",",<","mM"],l:["kK","oO","pP",";:",".>",",<"],L:["kK","oO","pP",";:",".>",",<"],";":["lL","pP","[{","'\"","/?",".>"],":":["lL","pP","[{","'\"","/?",".>"],"'":[";:","[{","]}",null,null,"/?"],'"':[";:","[{","]}",null,null,"/?"],z:[null,"aA","sS","xX",null,null],Z:[null,"aA","sS","xX",null,null],x:["zZ","sS","dD","cC",null,null],X:["zZ","sS","dD","cC",null,null],c:["xX","dD","fF","vV",null,null],C:["xX","dD","fF","vV",null,null],v:["cC","fF","gG","bB",null,null],V:["cC","fF","gG","bB",null,null],b:["vV","gG","hH","nN",null,null],B:["vV","gG","hH","nN",null,null],n:["bB","hH","jJ","mM",null,null],N:["bB","hH","jJ","mM",null,null],m:["nN","jJ","kK",",<",null,null],M:["nN","jJ","kK",",<",null,null],",":["mM","kK","lL",".>",null,null],"<":["mM","kK","lL",".>",null,null],".":[",<","lL",";:","/?",null,null],">":[",<","lL",";:","/?",null,null],"/":[".>",";:","'\"",null,null,null],"?":[".>",";:","'\"",null,null,null]},qwertz:{0:["9)",null,null,"ß?","pP","oO"],1:["^°",null,null,'2"',"qQ",null],2:["1!",null,null,"3§","wW","qQ"],3:['2"',null,null,"4$","eE","wW"],4:["3§",null,null,"5%","rR","eE"],5:["4$",null,null,"6&","tT","rR"],6:["5%",null,null,"7/","zZ","tT"],7:["6&",null,null,"8(","uU","zZ"],8:["7/",null,null,"9)","iI","uU"],9:["8(",null,null,"0=","oO","iI"],"^":[null,null,null,"1!",null,null],"°":[null,null,null,"1!",null,null],"!":["^°",null,null,'2"',"qQ",null],'"':["1!",null,null,"3§","wW","qQ"],"§":['2"',null,null,"4$","eE","wW"],$:["3§",null,null,"5%","rR","eE"],"%":["4$",null,null,"6&","tT","rR"],"&":["5%",null,null,"7/","zZ","tT"],"/":["6&",null,null,"8(","uU","zZ"],"(":["7/",null,null,"9)","iI","uU"],")":["8(",null,null,"0=","oO","iI"],"=":["9)",null,null,"ß?","pP","oO"],"ß":["0=",null,null,"´`","üÜ","pP"],"?":["0=",null,null,"´`","üÜ","pP"],"´":["ß?",null,null,null,"+*","üÜ"],"`":["ß?",null,null,null,"+*","üÜ"],q:[null,"1!",'2"',"wW","aA",null],Q:[null,"1!",'2"',"wW","aA",null],w:["qQ",'2"',"3§","eE","sS","aA"],W:["qQ",'2"',"3§","eE","sS","aA"],e:["wW","3§","4$","rR","dD","sS"],E:["wW","3§","4$","rR","dD","sS"],r:["eE","4$","5%","tT","fF","dD"],R:["eE","4$","5%","tT","fF","dD"],t:["rR","5%","6&","zZ","gG","fF"],T:["rR","5%","6&","zZ","gG","fF"],z:["tT","6&","7/","uU","hH","gG"],Z:["tT","6&","7/","uU","hH","gG"],u:["zZ","7/","8(","iI","jJ","hH"],U:["zZ","7/","8(","iI","jJ","hH"],i:["uU","8(","9)","oO","kK","jJ"],I:["uU","8(","9)","oO","kK","jJ"],o:["iI","9)","0=","pP","lL","kK"],O:["iI","9)","0=","pP","lL","kK"],p:["oO","0=","ß?","üÜ","öÖ","lL"],P:["oO","0=","ß?","üÜ","öÖ","lL"],"ü":["pP","ß?","´`","+*","äÄ","öÖ"],"Ü":["pP","ß?","´`","+*","äÄ","öÖ"],"+":["üÜ","´`",null,null,"#'","äÄ"],"*":["üÜ","´`",null,null,"#'","äÄ"],a:[null,"qQ","wW","sS","yY","<>"],A:[null,"qQ","wW","sS","yY","<>"],s:["aA","wW","eE","dD","xX","yY"],S:["aA","wW","eE","dD","xX","yY"],d:["sS","eE","rR","fF","cC","xX"],D:["sS","eE","rR","fF","cC","xX"],f:["dD","rR","tT","gG","vV","cC"],F:["dD","rR","tT","gG","vV","cC"],g:["fF","tT","zZ","hH","bB","vV"],G:["fF","tT","zZ","hH","bB","vV"],h:["gG","zZ","uU","jJ","nN","bB"],H:["gG","zZ","uU","jJ","nN","bB"],j:["hH","uU","iI","kK","mM","nN"],J:["hH","uU","iI","kK","mM","nN"],k:["jJ","iI","oO","lL",",;","mM"],K:["jJ","iI","oO","lL",",;","mM"],l:["kK","oO","pP","öÖ",".:",",;"],L:["kK","oO","pP","öÖ",".:",",;"],"ö":["lL","pP","üÜ","äÄ","-_",".:"],"Ö":["lL","pP","üÜ","äÄ","-_",".:"],"ä":["öÖ","üÜ","+*","#'",null,"-_"],"Ä":["öÖ","üÜ","+*","#'",null,"-_"],"#":["äÄ","+*",null,null,null,null],"'":["äÄ","+*",null,null,null,null],"<":[null,null,"aA","yY",null,null],">":[null,null,"aA","yY",null,null],y:["<>","aA","sS","xX",null,null],Y:["<>","aA","sS","xX",null,null],x:["yY","sS","dD","cC",null,null],X:["yY","sS","dD","cC",null,null],c:["xX","dD","fF","vV",null,null],C:["xX","dD","fF","vV",null,null],v:["cC","fF","gG","bB",null,null],V:["cC","fF","gG","bB",null,null],b:["vV","gG","hH","nN",null,null],B:["vV","gG","hH","nN",null,null],n:["bB","hH","jJ","mM",null,null],N:["bB","hH","jJ","mM",null,null],m:["nN","jJ","kK",",;",null,null],M:["nN","jJ","kK",",;",null,null],",":["mM","kK","lL",".:",null,null],";":["mM","kK","lL",".:",null,null],".":[",;","lL","öÖ","-_",null,null],":":[",;","lL","öÖ","-_",null,null],"-":[".:","öÖ","äÄ",null,null,null],_:[".:","öÖ","äÄ",null,null,null]}},C={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};var E=new class{constructor(){this.l33tTable=P,this.dictionary={userInput:[]},this.rankedDictionaries={},this.translations=C,this.graphs=O,this.availableGraphs=[],this.setRankedDictionaries(),this.setAdjacencyGraphs(O)}setOptions(l={}){l.l33tTable&&(this.l33tTable=l.l33tTable),l.dictionary&&(this.dictionary=l.dictionary,this.setRankedDictionaries()),l.translations&&this.setTranslations(l.translations),l.graphs&&this.setAdjacencyGraphs(l.graphs)}setTranslations(l){if(!this.checkCustomTranslations(l))throw new Error("Invalid translations object fallback to keys");this.translations=l}checkCustomTranslations(l){let n=!0;return Object.keys(C).forEach(t=>{if(t in l){const e=t;Object.keys(C[e]).forEach(t=>{t in l[e]||(n=!1)})}else n=!1}),n}setRankedDictionaries(){const l={};Object.keys(this.dictionary).forEach(n=>{const t=this.dictionary[n];if("userInputs"===n){const e=[];t.forEach(l=>{const n=typeof l;"string"!==n&&"number"!==n&&"boolean"!==n||e.push(l.toString().toLowerCase())}),l[n]=D(e)}else l[n]=D(t)}),this.rankedDictionaries=l}setAdjacencyGraphs(l){l&&(this.graphs=l,this.availableGraphs=Object.keys(l))}};var F=class{constructor(){this.rankedDictionaries={},this.rankedDictionaries=E.rankedDictionaries}match({password:l}){const n=[],t=l.length,e=l.toLowerCase();return Object.keys(this.rankedDictionaries).forEach(s=>{const u=this.rankedDictionaries[s];for(let r=0;r<t;r+=1)for(let a=r;a<t;a+=1)if(e.slice(r,+a+1||9e9)in u){const t=e.slice(r,+a+1||9e9),o=u[t];n.push({pattern:"dictionary",i:r,j:a,token:l.slice(r,+a+1||9e9),matchedWord:t,rank:o,dictionaryName:s,reversed:!1,l33t:!1})}}),I(n)}};var L=class{constructor(){this.MatchDictionary=new F}match({password:l}){const n=[],t=this.enumerateL33tSubs(this.relevantL33tSubtable(l,E.l33tTable));for(let s=0;s<t.length;s+=1){const u=t[s];if(e=u,0===Object.keys(e).length)break;const r=S(l,u);this.MatchDictionary.match({password:r}).forEach(t=>{const e=l.slice(t.i,+t.j+1||9e9);if(e.toLowerCase()!==t.matchedWord){const l={};Object.keys(u).forEach(n=>{const t=u[n];-1!==e.indexOf(n)&&(l[n]=t)});const s=Object.keys(l).map(n=>`${n} -> ${l[n]}`).join(", ");n.push({...t,l33t:!0,token:e,sub:l,subDisplay:s})}})}var e;return I(n.filter(l=>l.token.length>1))}relevantL33tSubtable(l,n){const t={},e={};return l.split("").forEach(l=>{t[l]=!0}),Object.keys(n).forEach(l=>{const s=n[l].filter(l=>l in t);s.length>0&&(e[l]=s)}),e}enumerateL33tSubs(l){const n=Object.keys(l);return this.getSubs(n,[[]],l).map(l=>{const n={};return l.forEach(([l,t])=>{n[l]=t}),n})}getSubs(l,n,t){if(!l.length)return n;const e=l[0],s=l.slice(1),u=[];t[e].forEach(l=>{n.forEach(n=>{let t=-1;for(let e=0;e<n.length;e+=1)if(n[e][0]===l){t=e;break}if(-1===t){const t=n.concat([[l,e]]);u.push(t)}else{const s=n.slice(0);s.splice(t,1),s.push([l,e]),u.push(n),u.push(s)}})});const r=this.dedup(u);return s.length?this.getSubs(s,r,t):r}dedup(l){const n=[],t={};return l.forEach(l=>{const e=l.map((l,n)=>[l,n]);e.sort();const s=e.map(([l,n])=>`${l},${n}`).join("-");s in t||(t[s]=!0,n.push(l))}),n}};var A=class{constructor(){this.MatchDictionary=new F}match({password:l}){const n=l.split("").reverse().join(""),t=this.MatchDictionary.match({password:n}).map(n=>({...n,token:n.token.split("").reverse().join(""),reversed:!0,i:l.length-1-n.j,j:l.length-1-n.i}));return I(t)}};var N=class{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:l}){const n=[];return Object.keys(E.graphs).forEach(t=>{const e=E.graphs[t];T(n,this.helper(l,e,t))}),I(n)}checkIfShifted(l,n,t){return!l.includes("keypad")&&this.SHIFTED_RX.test(n.charAt(t))?1:0}helper(l,n,t){let e;const s=[];let u=0;const r=l.length;for(;u<r-1;){let a=u+1,o=0,i=0;for(e=this.checkIfShifted(t,l,u);;){const c=n[l.charAt(a-1)]||[];let h=!1,d=-1,p=-1;if(a<r){const n=l.charAt(a),t=c.length;for(let l=0;l<t;l+=1){const t=c[l];if(p+=1,t){const l=t.indexOf(n);if(-1!==l){h=!0,d=p,1===l&&(e+=1),o!==d&&(i+=1,o=d);break}}}}if(!h){a-u>2&&s.push({pattern:"spatial",i:u,j:a-1,token:l.slice(u,a),graph:t,turns:i,shiftedCount:e}),u=a;break}a+=1}}return s}},G={nCk(l,n){let t=l;if(n>t)return 0;if(0===n)return 1;let e=1;for(let l=1;l<=n;l+=1)e*=t,e/=l,t-=1;return e},log10:l=>Math.log(l)/Math.log(10),log2:l=>Math.log(l)/Math.log(2),factorial(l){let n=1;for(let t=2;t<=l;t+=1)n*=t;return n}};const W={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},R=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Y=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,H=/^[A-Z\xbf-\xdf]+$/,_=/^[^a-z\xdf-\xff]+$/,q=/^[a-z\xdf-\xff]+$/,U=/^[^A-Z\xbf-\xdf]+$/,z=/[a-z\xdf-\xff]/,K=/[A-Z\xbf-\xdf]/,$=/[^A-Za-z\xbf-\xdf]/gi,B=/^\d+$/,J=(new Date).getFullYear(),Z={recentYear:/19\d\d|200\d|201\d|202\d/g};var V=l=>{const n=l.replace($,"");if(n.match(U)||n.toLowerCase()===n)return 1;const t=[R,Y,_],e=t.length;for(let l=0;l<e;l+=1){const e=t[l];if(n.match(e))return 2}return(l=>{const n=l.split(""),t=n.filter(l=>l.match(z)).length,e=n.filter(l=>l.match(K)).length;let s=0;const u=Math.min(t,e);for(let l=1;l<=u;l+=1)s+=G.nCk(t+e,l);return s})(n)};var X=({l33t:l,sub:n,token:t})=>{if(!l)return 1;let e=1;const s=n;return Object.keys(s).forEach(l=>{const{subbedCount:n,unsubbedCount:u}=(({subs:l,subbed:n,token:t})=>{const e=l[n],s=t.toLowerCase().split("");return{subbedCount:s.filter(l=>l===n).length,unsubbedCount:s.filter(l=>l===e).length}})({subs:s,subbed:l,token:t});if(0===n||0===u)e*=2;else{const l=Math.min(u,n);let t=0;for(let e=1;e<=l;e+=1)t+=G.nCk(u+n,e);e*=t}}),e};const Q=({token:l,graph:n,turns:t})=>{const e=(l=>{let n=0;return Object.keys(l).forEach(t=>{const e=l[t];n+=e.filter(l=>!!l).length}),n/=Object.entries(l).length,n})(E.graphs[n]),s=Object.keys(E.graphs[n]).length;let u=0;const r=l.length;for(let l=2;l<=r;l+=1){const n=Math.min(t,l-1);for(let t=1;t<=n;t+=1)u+=G.nCk(l-1,t-1)*e*s**t}return u};const ll={bruteforce:({token:l})=>{let n,t=10**l.length;return t===Number.POSITIVE_INFINITY&&(t=Number.MAX_VALUE),n=1===l.length?11:51,Math.max(t,n)},dictionary:({rank:l,reversed:n,l33t:t,sub:e,token:s})=>{const u=l,r=V(s),a=X({l33t:t,sub:e,token:s});return{baseGuesses:u,uppercaseVariations:r,l33tVariations:a,calculation:u*r*a*(n?2:1)}},spatial:({graph:l,token:n,shiftedCount:t,turns:e})=>{let s=Q({token:n,graph:l,turns:e});if(t){const l=n.length-t;if(0===t||0===l)s*=2;else{let n=0;for(let e=1;e<=Math.min(t,l);e+=1)n+=G.nCk(t+l,e);s*=n}}return Math.round(s)},repeat:({baseGuesses:l,repeatCount:n})=>l*n,sequence:({token:l,ascending:n})=>{const t=l.charAt(0);let e=0;return e=["a","A","z","Z","0","1","9"].includes(t)?4:t.match(/\d/)?10:26,n||(e*=2),e*l.length},regex:({regexName:l,regexMatch:n,token:t})=>{const e={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(l in e)return e[l]**t.length;switch(l){case"recentYear":return Math.max(Math.abs(parseInt(n[0],10)-J),20)}return 0},date:({year:l,separator:n})=>{let t=365*Math.max(Math.abs(l-J),20);return n&&(t*=4),t}};var nl=(l,n)=>{const t={};if("guesses"in l&&null!=l.guesses)return l;const e=((l,n)=>{let t=1;return l.token.length<n.length&&(t=1===l.token.length?10:50),t})(l,n),s=ll[l.pattern](l);let u=0;"number"==typeof s?u=s:"dictionary"===l.pattern&&(u=s.calculation,t.baseGuesses=s.baseGuesses,t.uppercaseVariations=s.uppercaseVariations,t.l33tVariations=s.l33tVariations);const r=Math.max(u,e);return{...l,...t,guesses:r,guessesLog10:G.log10(r)}};const tl={password:"",optimal:{},excludeAdditive:!1,fillArray(l,n){const t=[];for(let e=0;e<l;e+=1){let l=[];"object"===n&&(l={}),t.push(l)}return t},makeBruteforceMatch(l,n){return{pattern:"bruteforce",token:this.password.slice(l,+n+1||9e9),i:l,j:n}},update(l,n){const t=l.j,e=nl(l,this.password);let s=e.guesses;n>1&&(s*=this.optimal.pi[e.i-1][n-1]);let u=G.factorial(n)*s;this.excludeAdditive||(u+=1e4**(n-1));let r=!1;Object.keys(this.optimal.g[t]).forEach(l=>{const e=this.optimal.g[t][l];parseInt(l,10)<=n&&e<=u&&(r=!0)}),r||(this.optimal.g[t][n]=u,this.optimal.m[t][n]=e,this.optimal.pi[t][n]=s)},bruteforceUpdate(l){let n=this.makeBruteforceMatch(0,l);this.update(n,1);for(let t=1;t<=l;t+=1){n=this.makeBruteforceMatch(t,l);const e=this.optimal.m[t-1];Object.keys(e).forEach(l=>{"bruteforce"!==e[l].pattern&&this.update(n,parseInt(l,10)+1)})}},unwind(l){const n=[];let t=l-1,e=0,s=Infinity;const u=this.optimal.g[t];for(Object.keys(this.optimal.g[t]).forEach(l=>{const n=u[l];n<s&&(e=parseInt(l,10),s=n)});t>=0;){const l=this.optimal.m[t][e];n.unshift(l),t=l.i-1,e-=1}return n}};var el={mostGuessableMatchSequence(l,n,t=!1){tl.password=l,tl.excludeAdditive=t;const e=l.length;let s=tl.fillArray(e,"array");n.forEach(l=>{s[l.j].push(l)}),s=s.map(l=>l.sort((l,n)=>l.i-n.i)),tl.optimal={m:tl.fillArray(e,"object"),pi:tl.fillArray(e,"object"),g:tl.fillArray(e,"object")};for(let l=0;l<e;l+=1)s[l].forEach(l=>{l.i>0?Object.keys(tl.optimal.m[l.i-1]).forEach(n=>{tl.update(l,parseInt(n,10)+1)}):tl.update(l,1)}),tl.bruteforceUpdate(l);const u=tl.unwind(e),r=u.length,a=this.getGuesses(l,r);return{password:l,guesses:a,guessesLog10:G.log10(a),sequence:u}},getGuesses(l,n){const t=l.length;let e=0;return e=0===l.length?1:tl.optimal.g[t-1][n],e}};var sl=class{match({password:l,omniMatch:n}){const t=[];let e=0;for(;e<l.length;){const s=this.getGreedyMatch(l,e),u=this.getLazyMatch(l,e);if(null==s)break;const{match:r,baseToken:a}=this.setMatchToken(s,u);if(r){const l=r.index+r[0].length-1,s=this.getBaseGuesses(a,n);t.push({pattern:"repeat",i:r.index,j:l,token:r[0],baseToken:a,baseGuesses:s,repeatCount:r[0].length/a.length}),e=l+1}}return t}getGreedyMatch(l,n){const t=/(.+)\1+/g;return t.lastIndex=n,t.exec(l)}getLazyMatch(l,n){const t=/(.+?)\1+/g;return t.lastIndex=n,t.exec(l)}setMatchToken(l,n){const t=/^(.+?)\1+$/;let e,s="";if(n&&l[0].length>n[0].length){e=l;const n=t.exec(e[0]);n&&(s=n[1])}else e=n,e&&(s=e[1]);return{match:e,baseToken:s}}getBaseGuesses(l,n){return el.mostGuessableMatchSequence(l,n.match(l)).guesses}};var ul=class{constructor(){this.MAX_DELTA=5}match({password:l}){const n=[];if(1===l.length)return[];let t=0,e=null;const s=l.length;for(let u=1;u<s;u+=1){const s=l.charCodeAt(u)-l.charCodeAt(u-1);if(null==e&&(e=s),s!==e){const r=u-1;this.update({i:t,j:r,delta:e,password:l,result:n}),t=r,e=s}}return this.update({i:t,j:s-1,delta:e,password:l,result:n}),n}update({i:l,j:n,delta:t,password:e,result:s}){if(n-l>1||1===Math.abs(t)){const u=Math.abs(t);if(u>0&&u<=this.MAX_DELTA){const u=e.slice(l,+n+1||9e9),{sequenceName:r,sequenceSpace:a}=this.getSequence(u);return s.push({pattern:"sequence",i:l,j:n,token:e.slice(l,+n+1||9e9),sequenceName:r,sequenceSpace:a,ascending:t>0})}}return null}getSequence(l){let n="unicode",t=26;return q.test(l)?(n="lower",t=26):H.test(l)?(n="upper",t=26):B.test(l)&&(n="digits",t=10),{sequenceName:n,sequenceSpace:t}}};var rl=class{match({password:l,regexes:n=Z}){const t=[];return Object.keys(n).forEach(e=>{const s=n[e];s.lastIndex=0;const u=s.exec(l);if(u){const l=u[0];t.push({pattern:"regex",token:l,i:u.index,j:u.index+u[0].length-1,regexName:e,regexMatch:u})}}),I(t)}};var al=class{match({password:l}){const n=[...this.getMatchesWithoutSeparator(l),...this.getMatchesWithSeparator(l)],t=this.filterNoise(n);return I(t)}getMatchesWithSeparator(l){const n=[],t=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let e=0;e<=Math.abs(l.length-6);e+=1)for(let s=e+5;s<=e+9&&!(s>=l.length);s+=1){const u=l.slice(e,+s+1||9e9),r=t.exec(u);if(null!=r){const l=this.mapIntegersToDayMonthYear([parseInt(r[1],10),parseInt(r[3],10),parseInt(r[4],10)]);null!=l&&n.push({pattern:"date",token:u,i:e,j:s,separator:r[2],year:l.year,month:l.month,day:l.day})}}return n}getMatchesWithoutSeparator(l){const n=[],t=/^\d{4,8}$/,e=l=>Math.abs(l.year-J);for(let s=0;s<=Math.abs(l.length-4);s+=1)for(let u=s+3;u<=s+7&&!(u>=l.length);u+=1){const r=l.slice(s,+u+1||9e9);if(t.exec(r)){const l=[],t=r.length;if(W[t].forEach(([n,t])=>{const e=this.mapIntegersToDayMonthYear([parseInt(r.slice(0,n),10),parseInt(r.slice(n,t),10),parseInt(r.slice(t),10)]);null!=e&&l.push(e)}),l.length>0){let t=l[0],a=e(l[0]);l.slice(1).forEach(l=>{const n=e(l);n<a&&(t=l,a=n)}),n.push({pattern:"date",token:r,i:s,j:u,separator:"",year:t.year,month:t.month,day:t.day})}}}return n}filterNoise(l){return l.filter(n=>{let t=!1;const e=l.length;for(let s=0;s<e;s+=1){const e=l[s];if(n!==e&&e.i<=n.i&&e.j>=n.j){t=!0;break}}return!t})}mapIntegersToDayMonthYear(l){if(l[1]>31||l[1]<=0)return null;let n=0,t=0,e=0;for(let s=0,u=l.length;s<u;s+=1){const u=l[s];if(u>99&&u<1e3||u>2050)return null;u>31&&(t+=1),u>12&&(n+=1),u<=0&&(e+=1)}return t>=2||3===n||e>=2?null:this.getDayMonth(l)}getDayMonth(l){const n=[[l[2],l.slice(0,2)],[l[0],l.slice(1,3)]],t=n.length;for(let l=0;l<t;l+=1){const[t,e]=n[l];if(1e3<=t&&t<=2050){const l=this.mapIntegersToDayMonth(e);return null!=l?{year:t,month:l.month,day:l.day}:null}}for(let l=0;l<t;l+=1){const[t,e]=n[l],s=this.mapIntegersToDayMonth(e);if(null!=s)return{year:this.twoToFourDigitYear(t),month:s.month,day:s.day}}return null}mapIntegersToDayMonth(l){const n=[l,l.slice().reverse()];for(let l=0;l<n.length;l+=1){const t=n[l],e=t[0],s=t[1];if(e>=1&&e<=31&&s>=1&&s<=12)return{day:e,month:s}}return null}twoToFourDigitYear(l){return l>99?l:l>50?l+1900:l+2e3}};var ol=class{constructor(){this.matchers=[F,A,L,N,sl,ul,rl,al],this.options={}}match(l){const n=[];return this.matchers.forEach(t=>{const e=new t;T(n,e.match({password:l,omniMatch:this}))}),I(n)}};const il={second:1,minute:60,hour:3600,day:86400,month:2678400,year:32140800,century:321408e4};var cl=class{translate(l,n){let t=l;void 0!==n&&1!==n&&(t+="s");const{timeEstimation:e}=E.translations;return e[t].replace("{base}",""+n)}estimateAttackTimes(l){const n={onlineThrottling100PerHour:l/(100/3600),onlineNoThrottling10PerSecond:l/10,offlineSlowHashing1e4PerSecond:l/1e4,offlineFastHashing1e10PerSecond:l/1e10},t={};return Object.keys(n).forEach(l=>{const e=n[l];t[l]=this.displayTime(e)}),{crackTimesSeconds:n,crackTimesDisplay:t,score:this.guessesToScore(l)}}guessesToScore(l){return l<1005?0:l<1000005?1:l<100000005?2:l<10000000005?3:4}displayTime(l){let n,t="centuries";const e=Object.keys(il),s=e.findIndex(n=>l<il[n]);return s>-1&&(t=e[s-1],0!==s?n=Math.round(l/il[t]):t="ltSecond"),this.translate(t,n)}};var hl=class{constructor(){this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(E.translations.suggestions.useWords,E.translations.suggestions.noNeed)}getFeedback(l,n){if(0===n.length)return this.defaultFeedback;if(l>2)return{warning:"",suggestions:[]};const t=E.translations.suggestions.anotherWord,e=this.getLongestMatch(n);let s=this.getMatchFeedback(e,1===n.length);return null!=s?(s.suggestions.unshift(t),null==s.warning&&(s.warning="")):s={warning:"",suggestions:[t]},s}getLongestMatch(l){let n=l[0];return l.slice(1).forEach(l=>{l.token.length>n.token.length&&(n=l)}),n}getMatchFeedback(l,n){switch(l.pattern){case"dictionary":return this.getDictionaryMatchFeedback(l,n);case"spatial":return this.getSpatialMatchFeedback(l);case"repeat":return this.getRepeatMatchFeedback(l);case"sequence":return{warning:E.translations.warnings.sequences,suggestions:[E.translations.suggestions.sequences]};case"regex":if("recentYear"===l.regexName)return{warning:E.translations.warnings.recentYears,suggestions:[E.translations.suggestions.recentYears,E.translations.suggestions.associatedYears]};break;case"date":return{warning:E.translations.warnings.dates,suggestions:[E.translations.suggestions.dates]};default:return{warning:"",suggestions:[]}}return{warning:"",suggestions:[]}}getSpatialMatchFeedback(l){let n=E.translations.warnings.keyPattern;return 1===l.turns&&(n=E.translations.warnings.straightRow),{warning:n,suggestions:[E.translations.suggestions.longerKeyboardPattern]}}getRepeatMatchFeedback(l){let n=E.translations.warnings.extendedRepeat;return 1===l.baseToken.length&&(n=E.translations.warnings.simpleRepeat),{warning:n,suggestions:[E.translations.suggestions.repeated]}}getDictionaryMatchFeedback(l,n){const t=this.getDictionaryWarning(l,n),e=[],s=l.token;return s.match(R)?e.push(E.translations.suggestions.capitalization):s.match(_)&&s.toLowerCase()!==s&&e.push(E.translations.suggestions.allUppercase),l.reversed&&l.token.length>=4&&e.push(E.translations.suggestions.reverseWords),l.l33t&&e.push(E.translations.suggestions.l33t),{warning:t,suggestions:e}}getDictionaryWarning(l,n){let t="";const e=l.dictionaryName;return"passwords"===e?t=this.getDictionaryWarningPassword(l,n):e.includes("wikipedia")?t=this.getDictionaryWarningWikipedia(l,n):("lastnames"===e||e.toLowerCase().includes("firstnames"))&&(t=this.getDictionaryWarningNames(l,n)),t}getDictionaryWarningPassword(l,n){let t="";return!n||l.l33t||l.reversed?l.guessesLog10<=4&&(t=E.translations.warnings.similarToCommon):t=l.rank<=10?E.translations.warnings.topTen:l.rank<=100?E.translations.warnings.topHundred:E.translations.warnings.common,t}getDictionaryWarningWikipedia(l,n){let t="";return n&&(t=E.translations.warnings.wordByItself),t}getDictionaryWarningNames(l,n){return n?E.translations.warnings.namesByThemselves:E.translations.warnings.commonNames}};const dl=()=>(new Date).getTime();var pl=function(l){function n(){return l.apply(this,arguments)||this}g(n,l);var t=n.prototype;return t.oninit=function(n){l.prototype.oninit.call(this,n)},t.view=function(){var l=this,n=this.attrs,t=n.label,e=n.color;return m("div",{className:"StrengthIndicator "+(t?"active":"")},m("div",{className:"StrengthIndicator-container"},m("div",{className:"StrengthIndicator-pills"},["weak","medium","strong"].map((function(n){return m(gl,{color:e,active:l.isPillActive(n)})}))),m("div",{className:"StrengthIndicator-label"},m("span",null,t))))},t.isPillActive=function(l){var n=this.attrs.score;switch(l){case"weak":if(Number.isInteger(n))return!0;case"medium":if(n>=2)return!0;case"strong":if(n>=4)return!0;default:return!1}},n}(b.a),gl=function(l){function n(){return l.apply(this,arguments)||this}return g(n,l),n.prototype.view=function(){var l=this.attrs,n=l.color,t=l.active;return m("div",{className:"StrengthPill",style:{backgroundColor:t?n:void 0}})},n}(b.a),fl=app.translator.trans.bind(app.translator),ml=d.a+".forum.strengthLabels",bl=function(l){return app.forum.attribute(d.a+"."+l)},yl=function(l){function n(){return l.apply(this,arguments)||this}g(n,l);var t=n.prototype;return t.oninit=function(n){l.prototype.oninit.call(this,n),this.strengthLabel=new h.a(""),this.passwordScore=new h.a(void 0),this.strengthColor=new h.a("")},t.view=function(){var l=this.attrs,n=l.parent_this,t=l.showingPassword,e=l.hasConfirmFiled,s=l.isConfirmFiled;return m("div",{className:"Form-group PasswordField"},m("input",{className:"FormControl "+(bl("enablePasswordToggle")?"togglable":""),name:s?"confirmPassword":"password",type:t()?"text":"password",placeholder:s?fl("nearata-signup-confirm-password.forum.field_placeholder"):w()(fl("core.forum.sign_up.password_placeholder")),value:s?n.confirmPassword:n.password(),disabled:n.loading,oninput:this.inputHandler.bind(this),style:{color:!bl("enableInputColor")||t()||e&&!s?void 0:this.strengthColor(),borderColor:!bl("enableInputBorderColor")||e&&!s?void 0:this.strengthColor()}}),bl("enablePasswordToggle")?m(x,{showing:t}):null,!e||s?m(pl,{score:this.passwordScore(),label:this.strengthLabel(),color:this.strengthColor()}):null)},t.inputHandler=function(l){var n=this.attrs,t=n.parent_this,e=n.isConfirmFiled,s=l.target.value;if(e?t.confirmPassword=s:t.password(s),s){var u=(l=>{const n=new hl,t=new ol,e=new cl,s=dl(),u=t.match(l),r=el.mostGuessableMatchSequence(l,u),a=dl()-s,o=e.estimateAttackTimes(r.guesses);return{calcTime:a,...r,...o,feedback:n.getFeedback(o.score,r.sequence)}})(s).score;switch(this.passwordScore(u),u){case 0:case 1:this.strengthLabel(fl(ml+".weak")),this.strengthColor("rgb("+bl("weakColor")+")");break;case 2:case 3:this.strengthLabel(fl(ml+".medium")),this.strengthColor("rgb("+bl("mediumColor")+")");break;case 4:this.strengthLabel(fl(ml+".strong")),this.strengthColor("rgb("+bl("strongColor")+")")}}else this.passwordScore(void 0),this.strengthLabel(""),this.strengthColor(void 0)},n}(b.a);s.a.initializers.add(d.a,(function(){function l(){this.showingPassword=new h.a(!1)}Object(u.extend)(a.a.prototype,"oninit",l),Object(u.extend)(i.a.prototype,"oninit",l),Object(u.extend)(a.a.prototype,"fields",(function(l){s.a.forum.attribute(d.a+".enablePasswordToggle")&&l.replace("password",m(M,{parent_this:this,showingPassword:this.showingPassword.bind(this)}),20)})),Object(u.extend)(i.a.prototype,"fields",(function(l){if(!this.attrs.token){var n=l.has("confirmPassword")&&void 0!==this.confirmPassword;l.replace("password",m(yl,{parent_this:this,showingPassword:this.showingPassword.bind(this),hasConfirmFiled:n}),10),n&&l.replace("confirmPassword",m(yl,{parent_this:this,showingPassword:this.showingPassword.bind(this),hasConfirmFiled:n,isConfirmFiled:!0}),10)}}))}))}]);
//# sourceMappingURL=forum.js.map