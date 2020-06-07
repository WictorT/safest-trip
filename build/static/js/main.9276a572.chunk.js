(this["webpackJsonpsafest-trip"]=this["webpackJsonpsafest-trip"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(3),l=a.n(r),i=(a(14),a(4)),c=a(5),o=a(7),m=a(6),u=a(1),d=a(8),p=(a(15),a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={distance:0,lastSubmittedDistance:0,showResults:!1,results:[{type:"Car",distanceQuotient:3.1,timeQuotient:130,averageSpeed:90,journeyRisk:4.3e-9,risk:0},{type:"Airplane",distanceQuotient:.05,timeQuotient:30.8,averageSpeed:500,journeyRisk:117e-9,risk:0},{type:"Bus",distanceQuotient:.4,timeQuotient:11.1,averageSpeed:70,journeyRisk:4.3e-9,risk:0},{type:"Train",distanceQuotient:.6,timeQuotient:30,averageSpeed:60,journeyRisk:2e-8,risk:0}]},a.handleUpdateDistance=a.handleUpdateDistance.bind(Object(u.a)(a)),a.handleSubmitDistanceOnEnter=a.handleSubmitDistanceOnEnter.bind(Object(u.a)(a)),a.handleSubmitDistance=a.handleSubmitDistance.bind(Object(u.a)(a)),a.updateResults=a.updateResults.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleUpdateDistance",value:function(e){this.setState({distance:e.target.value})}},{key:"handleSubmitDistanceOnEnter",value:function(e){"Enter"===e.key&&this.handleSubmitDistance()}},{key:"handleSubmitDistance",value:function(){this.state.distance<1||(this.updateResults(this.state.distance),this.setState({showResults:!0,lastSubmittedDistance:this.state.distance}))}},{key:"updateResults",value:function(e){var t=this.state.results;t.forEach((function(t){t.risk=(t.distanceQuotient*e/1e9+t.timeQuotient*(e/t.averageSpeed)/1e9+t.journeyRisk).toFixed(9)})),t=t.sort((function(e,t){return e.risk-t.risk})),this.setState({results:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},n.a.createElement("a",{className:"navbar-brand",href:"#"},"SafestTrip"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"#"},"Home ",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Blog"))))),n.a.createElement("main",{role:"main",className:"container content"},n.a.createElement("h1",null," The safest transportation method for your dream trip"),n.a.createElement("p",{className:"lead"}," What is the distance you want to travel? "),n.a.createElement("div",{className:"input-group p-2"},n.a.createElement("input",{type:"number",className:"form-control",min:1,onChange:this.handleUpdateDistance,onKeyDown:this.handleSubmitDistanceOnEnter}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("span",{className:"input-group-text"},"km"))),n.a.createElement("button",{type:"button",className:"btn btn-primary p-2",onClick:this.handleSubmitDistance},"Calculate"),n.a.createElement("div",{className:this.state.showResults?"fadeIn":"fadeOut"},n.a.createElement("div",{className:"results",ref:"Results"},n.a.createElement("p",null,"The safest transportation method for your ",n.a.createElement("strong",null,this.state.lastSubmittedDistance,"km")," trip would be the ",n.a.createElement("strong",{className:"green"},this.state.results[0].type),". ",n.a.createElement("br",null),"It is ",(this.state.results[1].risk/this.state.results[0].risk).toFixed(2)," times safer than the ",n.a.createElement("strong",{className:"yellow"},this.state.results[1].type),", ",n.a.createElement("br",null),"and ",(this.state.results[2].risk/this.state.results[0].risk).toFixed(2)," times safer than the ",n.a.createElement("strong",{className:"yellow"},this.state.results[2].type),". ",n.a.createElement("br",null),"While the ",n.a.createElement("strong",{className:"red"},this.state.results[3].type)," is the most dangerous transportation for this trip, making it ",(this.state.results[3].risk/this.state.results[0].risk).toFixed(2)," times more dangerous than the ",n.a.createElement("strong",{className:"green"},this.state.results[0].type),"."),n.a.createElement("button",{className:"btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Advanced"),n.a.createElement("div",{className:"collapse",id:"collapseExample"},n.a.createElement("table",{className:"table"},n.a.createElement("tr",null,n.a.createElement("th",null,"Transport"),n.a.createElement("th",null," Probability of a fatal crash")),this.state.results.map((function(e,t,a){return n.a.createElement("tr",null,n.a.createElement("td",null,e.type),n.a.createElement("td",null,e.risk,"% ",t?n.a.createElement("strong",{className:"red"}," ",(e.risk/a[t-1].risk).toFixed(2)," times worse"):""," "))}))))))))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.9276a572.chunk.js.map