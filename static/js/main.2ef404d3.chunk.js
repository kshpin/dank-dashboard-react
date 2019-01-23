(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a(26)},18:function(t,e,a){},20:function(t,e,a){},24:function(t,e,a){},26:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),i=a(12),o=a.n(i),s=(a(18),a(10)),c=a(5),u=a(6),l=a(8),h=a(7),d=a(9),g=(a(20),a(2)),m=a.n(g),f=a(4),v=a(3),p=a(0),k={};function w(t){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(m.a.mark(function t(e){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!k[e]){t.next=2;break}return t.abrupt("return",k[e]);case 2:return t.next=4,fetch(e);case 4:return a=t.sent,t.next=7,a.json();case 7:return k[e]=t.sent,t.abrupt("return",k[e]);case 9:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}a(24);var C=10484223,S=5031167,M=S,b=5367899,x=16770905,P=16739929,R=C,j=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={markerMaterial:new p.j({color:a.props.markerColor||C}),borderMaterial:new p.j({color:a.props.borderColor||S}),normalStickMaterial:new p.o({color:a.props.normalStickColor||M}),newStickMaterial:new p.o({color:a.props.newStickColor||b}),warningStickMaterial:new p.o({color:a.props.warningStickColor||x}),errorStickMaterial:new p.o({color:a.props.errorStickColor||P}),stickWidth:a.props.stickWidth||.005,xAxis:new p.x(1,0,0),yAxis:new p.x(0,1,0),zAxis:new p.x(0,0,1),origin:new p.x(0,0,0),focusing:!1},a.draw=a.draw.bind(Object(v.a)(Object(v.a)(a))),a.animate=a.animate.bind(Object(v.a)(Object(v.a)(a))),a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"addMarkersToScene",value:function(t,e,a){var r=new p.e(1,360);r.vertices.shift();var n=new p.k(r,this.state.markerMaterial);n.rotation.x=Math.PI/2,a.add(n);for(var i=0;i<Math.PI/2;i+=Math.PI/2/(t+1)){var o=new p.e(Math.cos(i),360);o.vertices.shift();var s=new p.k(o,this.state.markerMaterial);s.rotation.x=Math.PI/2,s.position.y=Math.sin(i),a.add(s),(s=new p.k(o,this.state.markerMaterial)).rotation.x=Math.PI/2,s.position.y=-Math.sin(i),a.add(s)}for(var c=0;c<2*Math.PI;c+=2*Math.PI/e){var u=new p.k(r,this.state.markerMaterial);u.rotation.y=c,a.add(u)}}},{key:"addBordersToScene",value:function(t,e){for(var a=0;a<t.features.length;a++)for(var r=t.features[a],n=0;n<r.geometry.coordinates.length;n++){var i=void 0;i=r.geometry.coordinates[0][0][0]instanceof Array?r.geometry.coordinates[n][0]:r.geometry.coordinates[n];for(var o=[],s=0;s<i.length;s++){var c=i[s],u=c[1]*Math.PI/180,l=c[0]*Math.PI/180,h=new p.x(Math.sin(l)*Math.cos(u),Math.sin(u),Math.cos(l)*Math.cos(u));o.push(h)}var d=new p.g;d.vertices=o;var g=new p.i(d,this.state.borderMaterial);e.add(g)}}},{key:"getGlowMaterial",value:function(t,e,a){return new p.t({uniforms:{c:{type:"f",value:t},p:{type:"f",value:e},glowColor:{type:"c",value:new p.f(a)},viewVector:{type:"v3",value:this.gCamera.position}},vertexShader:"\n\t\t\t\t\tuniform vec3 viewVector;\n\t\t\t\t\tuniform float c;\n\t\t\t\t\tuniform float p;\n\t\t\t\t\tvarying float intensity;\n\t\t\t\t\tvoid main() \n\t\t\t\t\t{\n\t\t\t\t\t\tvec3 vNormal = normalize( normalMatrix * normal );\n\t\t\t\t\t\tvec3 vNormel = normalize( normalMatrix * viewVector );\n\t\t\t\t\t\tintensity = pow( c - dot(vNormal, vNormel), p );\n\t\t\t\t\t\t\n\t\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\t}\n\t\t\t",fragmentShader:"\n\t\t\t\t\tuniform vec3 glowColor;\n\t\t\t\t\tvarying float intensity;\n\t\t\t\t\tvoid main() \n\t\t\t\t\t{\n\t\t\t\t\t\tvec3 glow = glowColor * intensity;\n\t\t\t\t\t\tgl_FragColor = vec4( glow, 1.0 );\n\t\t\t\t\t}\n\t\t\t",side:p.c,blending:p.a,transparent:!0})}},{key:"addStick",value:function(t,e,a,r){var n=this.state.normalStickMaterial;"error"===r&&(n=this.state.errorStickMaterial);var i=new p.d(this.state.stickWidth,this.state.stickWidth,a),o=new p.m(i,n),s=new p.p;return s.add(o),o.position.set(0,0,1-a/2),this.rotateObjAroundOrigin(s,t,e),this.gSticks.toRender.add(s),o}},{key:"addSticks",value:function(t){var e=this,a=function(a){var r=t[a];if(e.gSticks.fromSource.some(function(t){return t.lat===r.lat&&t.lng===r.lng&&t.size===r.size&&t.type===r.type}))return"continue";var n=e.addStick(r.lat,r.lng,r.size,r.type);e.gSticks.fromSource.push(Object.assign(r,{toRender:n,addTime:Date.now()}))};for(var r in t)a(r);var n=function(a){var r=e.gSticks.fromSource[a];if(t.some(function(t){return t.lat===r.lat&&t.lng===r.lng&&t.size===r.size&&t.type===r.type}))return"continue";e.gSticks.fromSource.splice(a,1),e.gSticks.toRender.children.splice(a,1)};for(var r in this.gSticks.fromSource)n(r)}},{key:"rotateObjAroundOrigin",value:function(t,a,r){e.rotateAroundWorldAxis(t,this.state.xAxis,-a*Math.PI/180,!1),e.rotateAroundWorldAxis(t,this.state.yAxis,r*Math.PI/180,!0)}},{key:"rotateCamera",value:function(){var t=this.gCamera.rot.lng*Math.PI/180,e=this.gCamera.rot.lat*Math.PI/180;this.gCamera.position.x=Math.sin(t)*Math.cos(e)*this.gCamera.distance,this.gCamera.position.y=Math.sin(e)*this.gCamera.distance,this.gCamera.position.z=Math.cos(t)*Math.cos(e)*this.gCamera.distance,this.gCamera.lookAt(this.state.origin),this.gScene.userData.earth.userData.glow.material.uniforms.viewVector.value=this.gCamera.position}},{key:"init",value:function(){var t=Object(f.a)(m.a.mark(function t(){var a,r,n,i=this;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.mount.clientWidth,r=this.mount.clientHeight,this.gScene=new p.s,this.gCamera=new p.q(this.props.fovY||75,a/r,.1,10),this.gCamera.distance=this.props.zoom+1||2,this.gCamera.position.z=this.gCamera.distance,this.gCamera.rot={lng:0,lat:0},this.gCamera.userData.pivot=new p.p,this.gCamera.userData.pivot.add(this.gCamera),this.gScene.add(this.gCamera.userData.pivot),this.gRenderer=new p.y({antialias:!0}),this.gRenderer.setPixelRatio(window.devicePixelRatio),this.gRenderer.setSize(a,r),this.gRenderer.setClearColor(this.props.backgroundColor||0,1),this.mouseRotationSensitivity=this.props.mouseRotationSensitivity||.1,this.ambientRotationRate=this.props.ambientRotationRate||1,this.isDragging=!1,this.dragPrev={x:0,y:0},this.gRenderer.domElement.addEventListener("click",function(t){var n=e.screenToGlobeCoords(t.offsetX/a,(r-t.offsetY)/r,i.gCamera,i.gScene.userData.earth);null!=n&&i.mouseCoords.x===t.offsetX&&i.mouseCoords.y===t.offsetY&&i.props.onGlobeClick(n)}),this.gRenderer.domElement.addEventListener("mousedown",function(t){i.isDragging=!0,i.mouseCoords={x:t.offsetX,y:t.offsetY}}),this.gRenderer.domElement.addEventListener("mousemove",function(t){i.isDragging&&(i.gCamera.rot.lng-=(t.offsetX-i.dragPrev.x)*i.mouseRotationSensitivity,i.gCamera.rot.lat+=(t.offsetY-i.dragPrev.y)*i.mouseRotationSensitivity,i.gCamera.rot.lat>90&&(i.gCamera.rot.lat=90),i.gCamera.rot.lat<-90&&(i.gCamera.rot.lat=-90),i.gCamera.rot.lng>180&&(i.gCamera.rot.lng-=360),i.gCamera.rot.lng<-180&&(i.gCamera.rot.lng+=360)),i.dragPrev={x:t.offsetX,y:t.offsetY}}),document.addEventListener("mouseup",function(){return i.isDragging=!1}),this.gSticks={},this.gSticks.toRender=new p.h,this.gScene.add(this.gSticks.toRender),this.gSticks.fromSource=[],this.gScene.add(new p.b(16777215,1)),this.gFocus={duration:this.props.focusDuration||1e3,startTime:0,startLoc:{lat:0,lng:0},curProgress:0},n=new p.h,this.gScene.add(n),(new p.v).load("data/img/earthnight8k.jpg",function(t){var e=new p.u(.999,360,180),a=new p.n({map:t,overdraw:.5}),r=new p.m(e,a);r.rotateY(3*Math.PI/2),n.add(r);var o=i.getGlowMaterial(.4,6,i.props.earthGlowColor||R),s=new p.m(e,o);s.scale.multiplyScalar(1.55),n.add(s),n.userData.object=r,n.userData.glow=s}),t.t0=this,t.next=34,w("data/maps/worldBorders.json");case 34:return t.t1=t.sent,t.t2=n,t.t0.addBordersToScene.call(t.t0,t.t1,t.t2),t.t3=this,t.next=40,w("data/maps/state/stateBorders.json");case 40:t.t4=t.sent,t.t5=n,t.t3.addBordersToScene.call(t.t3,t.t4,t.t5),this.addMarkersToScene(2,12,n),this.gScene.userData.earth=n,this.mount.appendChild(this.gRenderer.domElement);case 46:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(f.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.init();case 2:this.animate();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t){if(this.props.focusPoint!==t.focusPoint&&null!=this.props.focusPoint){this.setState({focusing:!0}),this.gFocus.startTime=Date.now();var e=this.gCamera.rot.lat,a=this.gCamera.rot.lng,r=this.props.focusPoint.lng-a;Math.abs(r)>180&&(a-=360),r=this.props.focusPoint.lng-a,Math.abs(r)>180&&(a+=720),this.gFocus.startLoc={lat:e,lng:a}}this.props.sticks!==t.sticks&&this.addSticks(this.props.sticks)}},{key:"animate",value:function(t){t?(this.state.focusing?this.focus():(this.gCamera.userData.lastRenderTime||(this.gCamera.userData.lastRenderTime=t),this.gCamera.rot.lng+=this.ambientRotationRate*(t-this.gCamera.userData.lastRenderTime)/1e3,this.gCamera.rot.lng>180&&(this.gCamera.rot.lng-=360),this.rotateCamera()),this.animateSticks(),this.draw(),this.gCamera.userData.lastRenderTime=t,requestAnimationFrame(this.animate)):requestAnimationFrame(this.animate)}},{key:"focus",value:function(){var t=Date.now();this.gFocus.curProgress=t-this.gFocus.startTime,this.gFocus.curProgress>this.gFocus.duration&&(this.setState({focusing:!1}),this.gFocus.curProgress=this.gFocus.duration);var a=this.gFocus.curProgress/this.gFocus.duration;this.gCamera.rot.lat=(this.props.focusPoint.lat-this.gFocus.startLoc.lat)*e.d(a)+this.gFocus.startLoc.lat,this.gCamera.rot.lng=(this.props.focusPoint.lng-this.gFocus.startLoc.lng)*e.d(a)+this.gFocus.startLoc.lng,this.rotateCamera()}},{key:"animateSticks",value:function(){var t=Date.now();for(var a in this.gSticks.fromSource){var r=this.gSticks.fromSource[a],n=t-r.addTime;n>1e3||(r.toRender.position.z=1+r.size*(e.d(n/1e3)-.5))}}},{key:"draw",value:function(){this.gRenderer.render(this.gScene,this.gCamera)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"globe-rootDiv",ref:function(e){return t.mount=e}})}}],[{key:"skipSecondPoint",value:function(t,e,a,r){var n=t[0],i=t[1],o=e[0],s=e[1],c=a[0],u=a[1],l=(o*(n-c)/(u-i)-n*(u-i)/(c-n)+i-s)/((n-c)/(u-i)-(u-i)/(c-n)),h=(u-i)/(c-n)*(l-n)+i;return(l-o)*(l-o)+(h-s)*(h-s)<r}},{key:"rotateAroundWorldAxis",value:function(t,e,a,r){var n=new p.l;n.makeRotationAxis(e,a),r&&n.multiply(t.matrix),t.matrix=n,t.rotation.setFromRotationMatrix(t.matrix)}},{key:"screenToGlobeCoords",value:function(t,e,a,r){var n=new p.w;n.x=2*t-1,n.y=2*e-1;var i=new p.r;i.setFromCamera(n,a);var o=i.intersectObject(r);if(null!=o&&0!==o.length){var s=new p.x;return s.x=o[0].point.x,s.y=o[0].point.y,s.z=o[0].point.z,{lat:90-180*Math.acos(s.y)/Math.PI,lng:(180+180*Math.atan2(s.x,s.z)/Math.PI)%360-180}}}},{key:"d",value:function(t){return-2*t*t*(t-1.5)}}]),e}(r.Component),D=function(t){function e(){var t,a;Object(c.a)(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(n)))).state={sticks:[],focusPoint:null},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"handleGlobeChange",value:function(){}},{key:"onGlobeClick",value:function(t){}},{key:"setupTestEnvironment",value:function(){var t=this;setInterval(function(){var a=e.randomizeSticks(t.state.sticks,100,50);t.setState({sticks:a})},1e3)}},{key:"componentDidMount",value:function(){this.setupTestEnvironment()}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"}},n.a.createElement("button",{onClick:function(){t.setState({focusPoint:{lat:44.6,lng:33.5}})}},"focus"),n.a.createElement("div",{style:{width:"100%",height:"100%",display:"inline-block"}},n.a.createElement(j,{focusPoint:this.state.focusPoint,sticks:this.state.sticks,onChange:this.handleGlobeChange.bind(this),onGlobeClick:this.onGlobeClick.bind(this)})))}}],[{key:"shuffle",value:function(t){for(var e=t.slice(0),a=e.length-1;a>0;a--){var r=Math.floor(Math.random()*(a+1));if(a!==r){var n=[e[r],e[a]];e[a]=n[0],e[r]=n[1]}}return e}},{key:"randomizeSticks",value:function(t,a,r){return t=e.shuffle(t).slice(0,r),t=Object(s.a)(t).concat(Object(s.a)(e.generateSticks(a-r)))}},{key:"generateStick",value:function(){return{type:Math.random()<.2?"error":"normal",size:.3*Math.random(),lat:180*Math.random()-90,lng:360*Math.random()-180}}},{key:"generateSticks",value:function(t){for(var a=[],r=0;r<t;r++)a.push(e.generateStick());return a}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.2ef404d3.chunk.js.map