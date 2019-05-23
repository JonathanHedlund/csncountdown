(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,a){t.exports=a(43)},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(15),c=a.n(s),r=a(2),u=a(3),l=a(5),i=a(4),d=a(6),h=a(7),g=a.n(h),m=a(16),y=a.n(m),f=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(i.a)(e).call(this))).calcNextCSNDay(),t.calcCSNDay(),t.state={csnDay:"",days:"",nextCSNDay:24,daysOfMonth:"",hours:23-(new Date).getHours(),minutes:59-(new Date).getMinutes(),seconds:59-(new Date).getSeconds(),dayText:"Days",hourText:"Hours",minuteText:"Minutes",secondText:"Seconds",csnToday:!1},setInterval(function(){t.isItCSN(),t.state.csnToday?(t.setState(function(){return{days:"",hours:"",minutes:"",seconds:"",dayText:"It's CSN time!!",hourText:"",minuteText:"",secondText:""}}),console.log(t.state.csnToday)):((new Date).getDate()<t.state.csnDay+1?t.setState(function(){return{days:t.state.csnDay-(new Date).getDate()}}):t.setState(function(){return{days:t.state.daysOfMonth-((new Date).getDate()-t.state.nextCSNDay)}}),t.setState(function(){return{hours:23-(new Date).getHours(),minutes:59-(new Date).getMinutes(),seconds:59-(new Date).getSeconds()}}),1===t.state.days?t.setState(function(){return{dayText:"Day"}}):1===t.state.hours?t.setState(function(){return{hourText:"Hour"}}):1===t.state.minutes?t.setState(function(){return{minuteText:"Minute"}}):1===t.state.seconds?t.setState(function(){return{secondText:"Second"}}):t.setState(function(){return{dayText:"Days",hourText:"Hours",minuteText:"Minutes",secondText:"Seconds"}}))},100),t}return Object(d.a)(e,t),Object(u.a)(e,[{key:"isItCSN",value:function(){this.state.csnDay+1===(new Date).getDate()?this.setState(function(){return{csnToday:!0}}):this.setState(function(){return{csnToday:!1}})}},{key:"calcCSNDay",value:function(){var t=this,e=(new Date).getMonth()+1,a=(new Date).getFullYear(),n=(new Date).getDate(),o=24;console.log((new Date).getMonth()+1),g.a.get("https://api.dryg.net/dagar/v2.1/"+a+"/"+e).then(function(e){for(console.log(e.data.dagar.length),console.log(e),console.log(e),console.log(n);"L\xf6rdag"===e.data.dagar[o].veckodag||"S\xf6ndag"===e.data.dagar[o].veckodag||"Ja"===e.data.dagar[o]["r\xf6d dag"];)o--;t.setState(function(){return{csnDay:o,daysOfMonth:e.data.dagar.length}}),t.setState(function(){return{days:o-n}})}).catch(function(t){console.log(t)})}},{key:"calcNextCSNDay",value:function(){var t=this,e=(new Date).getMonth()+2,a=(new Date).getFullYear(),n=24;console.log((new Date).getMonth()+2),g.a.get("https://api.dryg.net/dagar/v2.1/"+a+"/"+e).then(function(e){for(console.log(e);"L\xf6rdag"===e.data.dagar[n].veckodag||"S\xf6ndag"===e.data.dagar[n].veckodag||"Ja"===e.data.dagar[n]["r\xf6d dag"];)n--;t.setState(function(){return{nextCSNDay:n,days:t.state.daysOfMonth-((new Date).getDate()-n)}}),console.log(t.state.nextCSNDay)}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,this.state.days+" "+this.state.dayText),o.a.createElement("p",null,this.state.hours+" "+this.state.hourText),o.a.createElement("p",null,this.state.minutes+" "+this.state.minuteText),o.a.createElement("br",null),o.a.createElement("p",null,this.state.seconds+" "+this.state.secondText),o.a.createElement(y.a,{numberOfPieces:"300",run:this.state.csnToday}))}}]),e}(n.Component),D=(a(42),function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(i.a)(e).call(this))).state={quote:"",quoter:""},t}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount1",value:function(){var t=this;g.a.get("http://130.239.178.50:3002/random_quote").then(function(e){console.log(e),console.log(e.data[0].Qu_Quote),t.setState({quote:e.data[0].Qu_Quote,quoter:e.data[0].Qu_Quoter})}).catch(function(t){console.log(t)})}},{key:"componentDidMount",value:function(){var t=this;g.a.get("https://quota.glitch.me/random").then(function(e){console.log(e),console.log(e.data.quoteAuthor),console.log(e.data.quoteText),t.setState({quote:e.data.quoteText,quoter:e.data.quoteAuthor})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",{className:"quote"},'"',this.state.quote,'"'),o.a.createElement("p",{className:"quoter"},"- ",this.state.quoter))}}]),e}(n.Component)),w=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"intro-text"},o.a.createElement("p",null,"When is CSN due?"),o.a.createElement("hr",null)),o.a.createElement("div",{className:"timer"},o.a.createElement(f,null)),o.a.createElement("div",{className:"qoute-of-the-day"},o.a.createElement(D,null)),o.a.createElement("div",{className:"link-csn"},o.a.createElement("a",{href:"https://www.csn.se/",target:"_blank"}," ",o.a.createElement("br",null)," Click here to visit CSNs website"),o.a.createElement("div",{className:"jonathan"},o.a.createElement("p",null,"By Jonathan Hedlund"),o.a.createElement("a",{href:"https://jonathanhedlund.com/",target:"_blank"},"www.jonathanhedlund.com"))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.b0c97884.chunk.js.map