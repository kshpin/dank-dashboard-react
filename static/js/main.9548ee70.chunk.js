(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a(26)},18:function(t,e,a){},20:function(t,e,a){},24:function(t,e,a){},26:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(12),o=a.n(i),s=(a(18),a(10)),c=a(5),h=a(6),u=a(8),l=a(7),d=a(9),g=a(2),m=(a(20),a(3)),f=a.n(m),v=a(4),p=a(0),k={};function w(t){return b.apply(this,arguments)}function b(){return(b=Object(v.a)(f.a.mark(function t(e){var a;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!k[e]){t.next=2;break}return t.abrupt("return",k[e]);case 2:return t.next=4,fetch(e);case 4:return a=t.sent,t.next=7,a.json();case 7:return k[e]=t.sent,t.abrupt("return",k[e]);case 9:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}a(24);var y=10484223,C=5031167,M=5031167,S=16739929,P=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={markerMaterial:new p.g({color:a.props.markerColor||y}),borderMaterial:new p.g({color:a.props.borderColor||C}),defaultStickMaterial:new p.l({color:a.props.defaultStickColor||M}),errorStickMaterial:new p.l({color:a.props.errorStickColor||S}),stickWidth:a.props.stickWidth||.005,xAxis:new p.t(1,0,0),yAxis:new p.t(0,1,0),zAxis:new p.t(0,0,1),origin:new p.t(0,0,0),animating:!1},a.draw=a.draw.bind(Object(g.a)(Object(g.a)(a))),a.animate=a.animate.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"addMarkersToScene",value:function(t,e,a){var n=new p.c(1,360);n.vertices.shift();var r=new p.h(n,this.state.markerMaterial);r.rotation.x=Math.PI/2,a.add(r);for(var i=0;i<Math.PI/2;i+=Math.PI/2/(t+1)){var o=new p.c(Math.cos(i),360);o.vertices.shift();var s=new p.h(o,this.state.markerMaterial);s.rotation.x=Math.PI/2,s.position.y=Math.sin(i),a.add(s),(s=new p.h(o,this.state.markerMaterial)).rotation.x=Math.PI/2,s.position.y=-Math.sin(i),a.add(s)}for(var c=0;c<2*Math.PI;c+=2*Math.PI/e){var h=new p.h(n,this.state.markerMaterial);h.rotation.y=c,a.add(h)}}},{key:"addBordersToScene",value:function(t,e){for(var a=0;a<t.features.length;a++)for(var n=t.features[a],r=0;r<n.geometry.coordinates.length;r++){var i=void 0;i=n.geometry.coordinates[0][0][0]instanceof Array?n.geometry.coordinates[r][0]:n.geometry.coordinates[r];for(var o=[],s=0;s<i.length;s++){var c=i[s],h=c[1]*Math.PI/180,u=c[0]*Math.PI/180,l=new p.t(Math.sin(u)*Math.cos(h),Math.sin(h),Math.cos(u)*Math.cos(h));o.push(l)}var d=new p.d;d.vertices=o;var g=new p.f(d,this.state.borderMaterial);e.add(g)}}},{key:"addStick",value:function(t,e,a,n){var r=this.state.defaultStickMaterial;"error"===n&&(r=this.state.errorStickMaterial);var i=new p.b(this.state.stickWidth,this.state.stickWidth,a,1,1,1),o=new p.j(i,r),s=new p.m;s.add(o),o.position.set(0,0,1+a/2),this.rotateObjAroundOrigin(s,t,e),this.gSticks.add(s)}},{key:"addSticks",value:function(t){for(var e in this.gScene.remove(this.gSticks),this.gSticks=new p.e,this.gScene.add(this.gSticks),t){var a=t[e];this.addStick(a.lat,a.lng,a.size,a.type)}this.draw()}},{key:"rotateObjAroundOrigin",value:function(t,a,n){e.rotateAroundWorldAxis(t,this.state.xAxis,-a*Math.PI/180,!1),e.rotateAroundWorldAxis(t,this.state.yAxis,n*Math.PI/180,!0)}},{key:"rotateCamera",value:function(t){var e=t.rot.lng,a=t.rot.lat;this.rotateObjAroundOrigin(t.userData.pivot,a,e)}},{key:"init",value:function(){var t=Object(v.a)(f.a.mark(function t(){var a,n,r,i=this;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.mount.clientWidth,n=this.mount.clientHeight,this.gScene=new p.p,this.gCamera=new p.n(this.props.fovY||75,a/n,.1,10),this.gCamera.fovX=2*Math.atan(Math.tan(this.gCamera.fov/2*Math.PI/180)*this.gCamera.aspect)*180/Math.PI,this.gCamera.distance=this.props.zoom+1||2,this.gCamera.position.z=this.gCamera.distance,this.gCamera.rot={lng:0,lat:0},this.gCamera.userData.pivot=new p.m,this.gCamera.userData.pivot.add(this.gCamera),this.gScene.add(this.gCamera.userData.pivot),this.gRenderer=new p.u({antialias:!0}),this.gRenderer.setPixelRatio(window.devicePixelRatio),this.gRenderer.setSize(a,n),this.gRenderer.setClearColor(this.props.backgroundColor||0,1),this.rotationRate=this.props.rotationRate||.1,this.isDragging=!1,this.dragPrev={x:0,y:0},this.gRenderer.domElement.addEventListener("click",function(t){var r=e.screenToGlobeCoords(t.offsetX/a,(n-t.offsetY)/n,i.gCamera,i.gScene.userData.earth);null!=r&&i.props.onGlobeClick(r)}),this.gRenderer.domElement.addEventListener("mousedown",function(){return i.isDragging=!0}),this.gRenderer.domElement.addEventListener("mousemove",function(t){i.isDragging&&(i.gCamera.rot.lng-=(t.offsetX-i.dragPrev.x)*i.rotationRate,i.gCamera.rot.lat+=(t.offsetY-i.dragPrev.y)*i.rotationRate,i.gCamera.rot.lat>90&&(i.gCamera.rot.lat=90),i.gCamera.rot.lat<-90&&(i.gCamera.rot.lat=-90),i.gCamera.rot.lng>180&&(i.gCamera.rot.lng-=360),i.gCamera.rot.lng<-180&&(i.gCamera.rot.lng+=360),i.rotateCamera(i.gCamera),i.draw()),i.dragPrev={x:t.offsetX,y:t.offsetY}}),document.addEventListener("mouseup",function(){return i.isDragging=!1}),this.gSticks=new p.e,this.gScene.add(this.gSticks),this.gScene.add(new p.a(16777215,1)),this.gAnimation={duration:this.props.animationDuration||1e3,startTime:0,startLoc:{lat:0,lng:0},curProgress:0},r=new p.e,this.gScene.add(r),(new p.r).load("data/img/earthnight8k.jpg",function(t){var e=new p.q(.999,360,180),a=new p.k({map:t,overdraw:.5}),n=new p.j(e,a);n.rotateY(3*Math.PI/2),r.add(n),r.userData.object=n,i.draw()}),t.t0=this,t.next=32,w("data/maps/worldBorders.json");case 32:return t.t1=t.sent,t.t2=r,t.t0.addBordersToScene.call(t.t0,t.t1,t.t2),t.t3=this,t.next=38,w("data/maps/state/stateBorders.json");case 38:t.t4=t.sent,t.t5=r,t.t3.addBordersToScene.call(t.t3,t.t4,t.t5),this.addMarkersToScene(2,12,r),this.gScene.userData.earth=r.userData.object,this.mount.appendChild(this.gRenderer.domElement);case 44:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(v.a)(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.init();case 2:this.draw();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t,e,a){if(this.props.focusPoint!==t.focusPoint&&null!=this.props.focusPoint){this.setState({animating:!0}),this.gAnimation.startTime=Date.now();var n=this.gCamera.rot.lat,r=this.gCamera.rot.lng,i=this.props.focusPoint.lng-r;Math.abs(i)>180&&(r-=360),i=this.props.focusPoint.lng-r,Math.abs(i)>180&&(r+=720),this.gAnimation.startLoc={lat:n,lng:r},requestAnimationFrame(this.animate)}this.props.sticks!==t.sticks&&(console.log("start"),this.addSticks(this.props.sticks),console.log("end"))}},{key:"animate",value:function(){var t=Date.now();this.gAnimation.curProgress=t-this.gAnimation.startTime,this.gAnimation.curProgress>this.gAnimation.duration&&(this.setState({animating:!1}),this.gAnimation.curProgress=this.gAnimation.duration),this.state.animating&&requestAnimationFrame(this.animate);var a=this.gAnimation.curProgress/this.gAnimation.duration;this.gCamera.rot.lat=(this.props.focusPoint.lat-this.gAnimation.startLoc.lat)*e.d(a)+this.gAnimation.startLoc.lat,this.gCamera.rot.lng=(this.props.focusPoint.lng-this.gAnimation.startLoc.lng)*e.d(a)+this.gAnimation.startLoc.lng,this.rotateCamera(this.gCamera),this.draw()}},{key:"draw",value:function(){this.gRenderer.render(this.gScene,this.gCamera)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"globe-rootDiv",ref:function(e){return t.mount=e}})}}],[{key:"skipSecondPoint",value:function(t,e,a,n){var r=t[0],i=t[1],o=e[0],s=e[1],c=a[0],h=a[1],u=(o*(r-c)/(h-i)-r*(h-i)/(c-r)+i-s)/((r-c)/(h-i)-(h-i)/(c-r)),l=(h-i)/(c-r)*(u-r)+i;return(u-o)*(u-o)+(l-s)*(l-s)<n}},{key:"rotateAroundWorldAxis",value:function(t,e,a,n){var r=new p.i;r.makeRotationAxis(e,a),n&&r.multiply(t.matrix),t.matrix=r,t.rotation.setFromRotationMatrix(t.matrix)}},{key:"screenToGlobeCoords",value:function(t,e,a,n){var r=new p.s;r.x=2*t-1,r.y=2*e-1;var i=new p.o;i.setFromCamera(r,a);var o=i.intersectObject(n);if(null!=o&&0!==o.length){var s=new p.t;return s.x=o[0].point.x,s.y=o[0].point.y,s.z=o[0].point.z,{lat:90-180*Math.acos(s.y)/Math.PI,lng:(180+180*Math.atan2(s.x,s.z)/Math.PI)%360-180}}}},{key:"d",value:function(t){return-2*t*t*(t-1.5)}}]),e}(n.Component),x=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={sticks:[],focusPoint:null},a.randomizeSticks=a.randomizeSticks.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"handleGlobeChange",value:function(){}},{key:"onGlobeClick",value:function(t){}},{key:"randomizeSticks",value:function(t,a,n){return t=e.shuffle(t).slice(0,n),t=Object(s.a)(t).concat(Object(s.a)(this.generateSticks(a-n)))}},{key:"generateStick",value:function(){return{type:Math.random()<.2?"error":"normal",size:.3*Math.random(),lat:180*Math.random()-90,lng:360*Math.random()-180}}},{key:"generateSticks",value:function(t){for(var e=[],a=0;a<t;a++)e.push(this.generateStick());return e}},{key:"setupTestEnvironment",value:function(){var t=this,e=this.randomizeSticks([],20,0);this.setState({sticks:e}),setInterval(function(){var e=t.randomizeSticks(t.state.sticks,20,10);t.setState({sticks:e})},1e3)}},{key:"componentDidMount",value:function(){this.setupTestEnvironment()}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"}},r.a.createElement("button",{onClick:function(){t.setState({focusPoint:{lat:44.6,lng:33.5}})}},"focus"),r.a.createElement("div",{style:{width:"100%",height:"100%",display:"inline-block"}},r.a.createElement(P,{focusPoint:this.state.focusPoint,sticks:this.state.sticks,onChange:this.handleGlobeChange.bind(this),onGlobeClick:this.onGlobeClick.bind(this)})))}}],[{key:"shuffle",value:function(t){for(var e=t.slice(0),a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1));if(a!==n){var r=[e[n],e[a]];e[a]=r[0],e[n]=r[1]}}return e}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.9548ee70.chunk.js.map