!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return Object.defineProperty(t,"ZERO",{get:function(){return new t(0,0)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"ONE",{get:function(){return new t(1,1)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"AXIS_X",{get:function(){return new t(1,0)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"AXIS_Y",{get:function(){return new t(0,1)},enumerable:!0,configurable:!0}),t.prototype.add=function(t){this.x+=t.x,this.y+=t.y},t.prototype.subtract=function(t){this.x-=t.x,this.y-=t.y},t.prototype.multiply=function(t){this.x*=t.x,this.y*=t.y},t.prototype.divide=function(t){this.x/=t.x,this.y/=t.y},t.prototype.scale=function(t){this.x*=t,this.y*=t},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y},t.prototype.reflection=function(t){var e=t.clone(),o=this.clone(),n=o.dot(e);return e.scale(n),e.scale(2),o.subtract(e),o},t.prototype.invert=function(){this.x*=-1,this.y*=-1},t.prototype.normalize=function(){if(length<Number.EPSILON)this.x=0,this.y=0;else{var t=1/length;this.x*=t,this.y*=t}},t.prototype.squaredLength=function(){return this.x*this.x+this.y*this.y},t.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.set=function(t,e){this.x=t,this.y=e},t.prototype.clone=function(){return new t(this.x,this.y)},Object.defineProperty(t.prototype,"isZero",{get:function(){return 0==this.x&&0==this.y},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isOne",{get:function(){return 1==this.x&&1==this.y},enumerable:!0,configurable:!0}),t.prototype.toString=function(){return"[Point] (x:"+this.x.toFixed(5)+", y:"+this.y.toFixed(5)+")"},t}();e.Point=n},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.deltaSeconds=0,t}();e.Timer=n},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(3),i=o(4),r=o(1),s=function(){function t(){this._clearColor=new n.Color(.3,.6,.9),this._framerate=30,this._debug=!1,this._lastUpdate=0,this._accumulator=0,this._updateInterval=0}return t.init=function(e,o,r,s,a){void 0===r&&(r=null),void 0===s&&(s=30),void 0===a&&(a=!1),null==this._instance&&(this._instance=new t);var c=this._instance;return c._clearColor=null==r?new n.Color(.3,.6,.9,1):r,c.framerate=s,c._debug=a,c._canvas=document.createElement("canvas"),c._context=c._canvas.getContext("2d"),c._canvas.width=e,c._canvas.height=o,c._root=new i.Container,c._root.name="__root",document.body.appendChild(c._canvas),c.clear(),c._lastUpdate=Date.now(),c.addEventListeners(),c.updateAnimationFrame(),c},Object.defineProperty(t,"context",{get:function(){return t._instance._context},enumerable:!0,configurable:!0}),t.prototype.play=function(){this._lastUpdate=Date.now(),this._isPaused=!1},t.prototype.pause=function(){this._isPaused=!0},t.prototype.addEventListeners=function(){var t=this.instance._canvas;t.onclick=this.instance._onClick,t.onmousedown=this.instance._onMouseDown,t.onmouseup=this.instance._onMouseUp,t.onmousemove=this.instance._onMouseMove,t.ontouchstart=this.instance._onTouchStart,t.ontouchend=this.instance._onTouchEnd,window.onblur=this.instance._onBlur,window.onfocus=this.instance._onFocus},t.prototype._onTouchStart=function(t){console.log("TouchStart")},t.prototype._onTouchEnd=function(t){console.log("TouchEnd")},t.prototype._onClick=function(t){console.log("Click")},t.prototype._onMouseDown=function(t){console.log("MouseDown")},t.prototype._onMouseUp=function(t){console.log("MouseUp")},t.prototype._onMouseMove=function(t){console.log("MouseMove")},t.prototype._onBlur=function(e){this._isPaused||(this._isFocussed=!1,t._instance.pause())},t.prototype._onFocus=function(e){this._isFocussed||(this._isFocussed=!0,t._instance.play())},Object.defineProperty(t.prototype,"instance",{get:function(){return t._instance},enumerable:!0,configurable:!0}),t.prototype.domElement=function(){return this._context},Object.defineProperty(t.prototype,"framerate",{get:function(){return this._framerate},set:function(t){this._framerate=t,this._updateInterval=1/this._framerate},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"clearColor",{get:function(){return this._clearColor},set:function(t){this._clearColor=t},enumerable:!0,configurable:!0}),t.prototype.updateAnimationFrame=function(){var e=t._instance;if(window.requestAnimationFrame(e.updateAnimationFrame),!e._isPaused){var o=Date.now(),n=(o-e._lastUpdate)/1e3;for(r.Timer.deltaSeconds=n,e._accumulator+=n;e._accumulator>=e._updateInterval;)e.update(n),e._accumulator-=e._updateInterval;e._lastUpdate=o}},t.prototype.update=function(e){var o=t._instance;o.resetCanvasState(),o.clear(),o._root.update(!0),o._root.draw(),o._debug&&o._root.drawDebug()},t.prototype.resetCanvasState=function(){this._context.resetTransform(),this._context.globalAlpha=1,this._context.imageSmoothingEnabled=!0,this._context.globalCompositeOperation="source-over"},t.prototype.clear=function(){this._context.fillStyle=this._clearColor.toHexRGB(),this._context.fillRect(0,0,this._canvas.width,this._canvas.height)},t}();e.Stage=s},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,o,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===o&&(o=0),void 0===n&&(n=1),this._red=t,this._green=e,this._blue=o,this._alpha=n}return Object.defineProperty(t.prototype,"red",{get:function(){return this._red},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"green",{get:function(){return this._green},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"blue",{get:function(){return this._blue},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._alpha},enumerable:!0,configurable:!0}),Object.defineProperty(t,"RED",{get:function(){return new t(1,0,0,1)},enumerable:!0,configurable:!0}),t.prototype.toHexRGB=function(){var t=Math.floor(255*this._red),e=Math.floor(255*this._green),o=Math.floor(255*this._blue);return"#"+t.toString(16).padStart(2,"0")+e.toString(16).padStart(2,"0")+o.toString(16).padStart(2,"0")},t.prototype.toHexRGBA=function(){var t=Math.floor(255*this._red),e=Math.floor(255*this._green),o=Math.floor(255*this._blue),n=Math.floor(255*this._alpha);return"#"+t.toString(16).padStart(2,"0")+e.toString(16).padStart(2,"0")+o.toString(16).padStart(2,"0")+n.toString(16).padStart(2,"0")},t}();e.Color=n},function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(){var e=t.call(this)||this;return e._children=[],e}return i(e,t),e.prototype.dispose=function(){this.removeAllChildren(),t.prototype.dispose.call(this)},Object.defineProperty(e.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),e.prototype.addChild=function(t){-1==this._children.lastIndexOf(t)&&(t.parent=this,this._children.push(t))},e.prototype.removeChild=function(t){var e=this._children.lastIndexOf(t);-1!=e&&(t.parent=null,this._children.splice(e,1))},e.prototype.removeAllChildren=function(){for(var t=0,e=this._children;t<e.length;t++){var o=e[t];o.parent=null,o.dispose()}this._children=null},e.prototype.updateWorldData=function(){t.prototype.updateWorldData.call(this);for(var e=0,o=this._children;e<o.length;e++){o[e].update(!1)}},e.prototype.draw=function(){for(var t=0,e=this._children;t<e.length;t++){e[t].draw()}},e.prototype.drawDebug=function(){for(var t=0,e=this._children;t<e.length;t++){e[t].drawDebug()}},e}(o(10).Spatial);e.Container=r},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),i=o(11),r=function(){function t(){this._scale=n.Point.ONE,this._rotation=i.Matrix.IDENTITY,this._translation=n.Point.ZERO,this._matrix=i.Matrix.IDENTITY,this._isDirty=!0}return Object.defineProperty(t,"IDENTITY",{get:function(){return new t},enumerable:!0,configurable:!0}),t.prototype.setScale=function(t,e){this._scale.x=t,this._scale.y=e,this._isDirty=!0},t.prototype.setTranslate=function(t,e){this._translation.x=t,this._translation.y=e,this._isDirty=!0},t.prototype.setRotate=function(t){var e=Math.cos(t),o=Math.sin(t);this._rotation.set(e,-o,0,o,e,0,0,0,1),this._isDirty=!0},Object.defineProperty(t.prototype,"scaleX",{get:function(){return this._scale.x},set:function(t){this._scale.x=t,this._isDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleY",{get:function(){return this._scale.y},set:function(t){this._scale.y=t,this._isDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return this._scale},set:function(t){this._scale=t,this._isDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this._rotation},set:function(t){this._rotation=t,this._isDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"translation",{get:function(){return this._translation},set:function(t){this._translation=t,this._isDirty=!0},enumerable:!0,configurable:!0}),t.multiply=function(e,o){var n=i.Matrix.multiply(e.matrix,o.matrix),r=new t;return r.matrix=n,r},Object.defineProperty(t.prototype,"matrix",{get:function(){return this._isDirty&&(this._matrix.compose(this._scale,this._rotation,this._translation),this._isDirty=!1),this._matrix},set:function(t){this._matrix=t,this._matrix.decompose(this._scale,this._rotation,this._translation),this._isDirty=!1},enumerable:!0,configurable:!0}),t}();e.Transform=r},function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=o(7),s=o(0),a=o(4),c=o(2),u=o(8),h=function(t){function e(){var e=t.call(this)||this;return e.alpha=1,e.smoothing=!0,e.blendMode=r.BlendMode.SOURCE_OVER,e.pivot=s.Point.ZERO,e._width=100,e._height=100,e._isDirty=!0,e._targetCanvas=document.createElement("canvas"),e._targetContext=e._targetCanvas.getContext("2d"),e.canvas=document.createElement("canvas"),e.graphics=e.canvas.getContext("2d"),e._image=document.createElement("img"),e._image.onload=function(){e._isDirty=!0},e._image.onerror=function(){e._image.src=""},e._mask=document.createElement("img"),e._mask.onload=function(){e._isDirty=!0},e._mask.onerror=function(){e._mask.src=""},e}return i(e,t),Object.defineProperty(e.prototype,"targetContext",{get:function(){return this._targetContext},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"targetCanvas",{get:function(){return this._targetCanvas},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){},e.prototype.update=function(e){void 0===e&&(e=!0),t.prototype.update.call(this,e)},e.prototype.draw=function(){if(!(this.alpha<Number.EPSILON)){this._isDirty&&this.redraw();var e=c.Stage.context,o=this.worldTransform.matrix;e.globalAlpha=this.alpha,e.imageSmoothingEnabled=this.smoothing,e.globalCompositeOperation=this.blendMode,e.setTransform(o.m00,o.m10,o.m01,o.m11,o.m02,o.m12);var n=this._targetContext;n.globalAlpha=this.alpha,e.drawImage(n.canvas,-this.pivot.x,-this.pivot.y),t.prototype.draw.call(this)}},e.prototype.redraw=function(){var t=this._targetContext;t.clearRect(0,0,this._width,this._height),t.globalAlpha=1,t.imageSmoothingEnabled=this.smoothing,t.globalCompositeOperation=this.blendMode,t.drawImage(this.graphics.canvas,0,0,this._width,this._height),""==this._image.src&&null==this._image.src||t.drawImage(this._image,0,0,this._width,this._height),null!=this._tint&&(t.globalAlpha=1,t.globalCompositeOperation=r.BlendMode.SOURCE_ATOP,t.fillStyle=this._tint.toHexRGBA(),t.fillRect(0,0,this._width,this._height)),""==this._mask.src&&null==this._mask.src||(t.globalAlpha=1,t.globalCompositeOperation=r.BlendMode.DESTINATION_IN,t.drawImage(this._mask,0,0,this._width,this._height)),this._isDirty=!1},Object.defineProperty(e.prototype,"mask",{set:function(t){this._mask.src=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"image",{get:function(){return this._image.src},set:function(t){this._image.src=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,this._isDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t,this._isDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t,this._isDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{set:function(t){var e=this._width,o=this._height,n=this._width/2,i=this._height/2;switch(t){case u.AnchorType.TOP_LEFT:this.pivot.set(0,0);break;case u.AnchorType.TOP_CENTER:this.pivot.set(n,0);break;case u.AnchorType.TOP_RIGHT:this.pivot.set(e,0);break;case u.AnchorType.CENTER_LEFT:this.pivot.set(0,i);break;case u.AnchorType.CENTER:this.pivot.set(n,i);break;case u.AnchorType.CENTER_RIGHT:this.pivot.set(e,i);break;case u.AnchorType.BOTTOM_LEFT:this.pivot.set(0,o);break;case u.AnchorType.BOTTOM_CENTER:this.pivot.set(n,o);break;case u.AnchorType.BOTTOM_RIGHT:this.pivot.set(e,o)}},enumerable:!0,configurable:!0}),e}(a.Container);e.Sprite=h},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.SOURCE_OVER="source-over",t.SOURCE_IN="source-in",t.SOURCE_OUT="source-out",t.SOURCE_ATOP="source-atop",t.DESTINATION_OVER="destination-over",t.DESTINATION_IN="destination-in",t.DESTINATION_OUT="destination-out",t.DESTINATION_ATOP="destination-atop",t.LIGHTER="lighter",t.COPY="copy",t.XOR="xor",t.MULTIPLY="multiply",t.SCREEN="screen",t.OVERLAY="overlay",t.DARKEN="darken",t.LIGHTEN="lighten",t.COLOR_DODGE="color-dodge",t.COLOR_BURN="color-burn",t.HARD_LIGHT="hard-light",t.SOFT_LIGHT="soft-light",t.DIFFERENCE="difference",t.EXCLUSION="exclusion",t.HUE="hue",t.SATURATION="saturation",t.COLOR="color",t.LUMINOSITY="luminosity"}(e.BlendMode||(e.BlendMode={}))},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.NONE=0]="NONE",t[t.BOTTOM_CENTER=1]="BOTTOM_CENTER",t[t.BOTTOM_LEFT=2]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=3]="BOTTOM_RIGHT",t[t.CENTER=4]="CENTER",t[t.CENTER_LEFT=5]="CENTER_LEFT",t[t.CENTER_RIGHT=6]="CENTER_RIGHT",t[t.TOP_CENTER=7]="TOP_CENTER",t[t.TOP_LEFT=8]="TOP_LEFT",t[t.TOP_RIGHT=9]="TOP_RIGHT"}(e.AnchorType||(e.AnchorType={}))},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2),i=o(3),r=o(6),s=o(7),a=o(8),c=o(13),u=new i.Color(.3,.6,.9,1),h=n.Stage.init(800,600,u,30,!0),l=new r.Sprite;l.blendMode=s.BlendMode.SOURCE_OVER,l.anchor=a.AnchorType.CENTER,l.scale(1.5,1.5),l.smoothing=!1,l.graphics.fillStyle="#FF0000",l.graphics.fillRect(0,0,100,100),l.image="./assets/bunny.png",l.tint=new i.Color(1,1,0,.5),l.x=300,l.y=300,l.rotationSpeed=1,l.update();var p=new r.Sprite;p.blendMode=s.BlendMode.COLOR_BURN,p.x=30,p.y=30,p.alpha=.75,p.tint=new i.Color(1,0,0,.5),p.smoothing=!1,p.anchor=a.AnchorType.CENTER,p.image="./assets/star.png",p.rotationSpeed=2,l.addChild(p),h.root.addChild(l);var f=[l,p],_=new c.MovieClip;_.blendMode=s.BlendMode.COLOR_BURN,_.anchor=a.AnchorType.CENTER,_.rotationSpeed=-4,_.x=100,_.y=100,_.framerate=2,_.tint=new i.Color(1,0,0,.8),_.frames=f,h.root.addChild(_)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=o(12),r=o(0),s=o(1),a=function(){function t(){this.name="",this.transform=n.Transform.IDENTITY,this.worldTransform=n.Transform.IDENTITY,this._worldBoundIsDirty=!0,this._worldTransformIsDirty=!0,this._parent=null,this._worldBound=i.Bound.IDENTITY,this.velocity=r.Point.ZERO,this.rotationSpeed=0,this._x=0,this._y=0,this._scaleX=1,this._scaleY=1,this._rotation=0}return t.prototype.dispose=function(){},Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._worldTransformIsDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._worldTransformIsDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleX",{get:function(){return this._scaleX},set:function(t){this._scaleX=t,this._worldTransformIsDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleY",{get:function(){return this._scaleY},set:function(t){this._scaleY=t,this._worldTransformIsDirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this._rotation},set:function(t){this._rotation=t,this._worldTransformIsDirty=!0},enumerable:!0,configurable:!0}),t.prototype.rotate=function(t){this.rotation+=t},t.prototype.translate=function(t,e){this.x+=t,this.y+=e},t.prototype.scale=function(t,e){this.scaleX*=t,this.scaleY*=e},Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},set:function(t){this._parent=t},enumerable:!0,configurable:!0}),t.prototype.update=function(t){var e=s.Timer.deltaSeconds;this.velocity.isZero||(this.x+=this.velocity.x*e,this.y+=this.velocity.y*e),0!=this.rotationSpeed&&(this.rotation+=this.rotationSpeed*e),this.updateWorldData(),this.updateWorldBound(),t&&this.propagateBoundToRoot()},t.prototype.updateWorldData=function(){this._worldTransformIsDirty&&(this.transform.setTranslate(this._x,this._y),this.transform.setScale(this._scaleX,this._scaleY),this.transform.setRotate(this._rotation),null!=this._parent?this.worldTransform=n.Transform.multiply(this._parent.worldTransform,this.transform):this.worldTransform=this.transform)},t.prototype.updateModelSpace=function(){this.updateModelBound()},t.prototype.updateModelBound=function(){},t.prototype.updateWorldBound=function(){},t.prototype.propagateBoundToRoot=function(){null!=this._parent&&(this._parent.updateWorldBound(),this._parent.propagateBoundToRoot())},t.prototype.draw=function(){},t.prototype.drawDebug=function(){},t}();e.Spatial=a},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,o,n,i,r,s,a,c){void 0===t&&(t=1),void 0===e&&(e=0),void 0===o&&(o=0),void 0===n&&(n=0),void 0===i&&(i=1),void 0===r&&(r=0),void 0===s&&(s=0),void 0===a&&(a=0),void 0===c&&(c=1),this.m00=t,this.m01=e,this.m02=o,this.m10=n,this.m11=i,this.m12=r,this.m20=s,this.m21=a,this.m22=c}return Object.defineProperty(t,"IDENTITY",{get:function(){return new t(1,0,0,0,1,0,0,0,1)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"ZERO",{get:function(){return new t(0,0,0,0,0,0,0,0,0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"euler",{get:function(){return Math.atan2(-this.m01,this.m00)},enumerable:!0,configurable:!0}),t.rotation=function(e){var o=Math.cos(e),n=Math.sin(e);return new t(o,-n,0,n,o,0,0,0,1)},t.scale=function(e,o){return new t(e,0,0,0,o,0,0,0,1)},t.translation=function(e,o){return new t(1,0,e,0,1,o,0,0,1)},t.multiply=function(e,o){return new t(e.m00*o.m00+e.m01*o.m10+e.m02*o.m20,e.m00*o.m01+e.m01*o.m11+e.m02*o.m21,e.m00*o.m02+e.m01*o.m12+e.m02*o.m22,e.m10*o.m00+e.m11*o.m10+e.m12*o.m20,e.m10*o.m01+e.m11*o.m11+e.m12*o.m21,e.m10*o.m02+e.m11*o.m12+e.m12*o.m22,e.m20*o.m00+e.m21*o.m10+e.m22*o.m20,e.m20*o.m01+e.m21*o.m11+e.m22*o.m21,e.m20*o.m02+e.m21*o.m12+e.m22*o.m22)},t.prototype.compose=function(e,o,n){var i=t.scale(e.x,e.y),r=t.multiply(i,o);this.set(r.m00,r.m01,n.x,r.m10,r.m11,n.y,0,0,1)},t.prototype.decompose=function(t,e,o){o.set(this.m02,this.m12);var n=Math.sqrt(this.m00*this.m00+this.m01*this.m01),i=Math.sqrt(this.m10*this.m10+this.m11*this.m11);t.set(n,i),e.set(this.m00/n,this.m01/n,0,this.m10/i,this.m11/i,0,0,0,1)},t.prototype.set=function(t,e,o,n,i,r,s,a,c){this.m00=t,this.m01=e,this.m02=o,this.m10=n,this.m11=i,this.m12=r,this.m20=s,this.m21=a,this.m22=c},t.prototype.copyFrom=function(t){this.m00=t.m00,this.m01=t.m01,this.m02=t.m02,this.m10=t.m10,this.m11=t.m11,this.m12=t.m12,this.m20=t.m20,this.m21=t.m21,this.m22=t.m22},t.prototype.toIdentity=function(){this.set(1,0,0,0,1,0,0,0,1)},t.prototype.toZero=function(){this.set(0,0,0,0,0,0,0,0,0)},t.prototype.toString=function(){return"[Matrix]\n m00: "+this.m00.toPrecision(8)+", m01: "+this.m01.toPrecision(8)+", m02: "+this.m02.toPrecision(8)+"\n m10: "+this.m10.toPrecision(8)+", m11: "+this.m11.toPrecision(8)+", m12: "+this.m12.toPrecision(8)+"\n m20: "+this.m20.toPrecision(8)+", m21: "+this.m21.toPrecision(8)+", m22: "+this.m22.toPrecision(8)},t}();e.Matrix=n},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=o(0),r=function(){function t(t){this._vertices=[i.Point.ZERO,i.Point.ZERO,i.Point.ZERO,i.Point.ZERO],this._transform=n.Transform.IDENTITY,this._vertices=t,this._isAABBDirty=!0}return Object.defineProperty(t,"IDENTITY",{get:function(){return new t([i.Point.ZERO,i.Point.ZERO,i.Point.ONE,i.Point.ONE])},enumerable:!0,configurable:!0}),t}();e.Bound=r},function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=o(6),s=o(1),a=function(t){function e(){var e=t.call(this)||this;return e._frames=[],e._currentFrame=0,e._framerate=30,e._accumulator=0,e._updateInterval=0,e._isPaused=!1,e}return i(e,t),e.prototype.dispose=function(){for(var e=0,o=this._frames;e<o.length;e++){o[e].dispose()}t.prototype.dispose.call(this)},Object.defineProperty(e.prototype,"framerate",{get:function(){return this._framerate},set:function(t){this._framerate=t,this._updateInterval=1/t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frames",{get:function(){return this._frames},set:function(t){this._frames=t,this.frame=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{set:function(t){this._currentFrame=t,null!=this._frames[this._currentFrame]&&(this.image=this._frames[this._currentFrame].image)},enumerable:!0,configurable:!0}),e.prototype.play=function(){this._isPaused=!1},e.prototype.stop=function(){this._isPaused=!0},e.prototype.update=function(e){if(void 0===e&&(e=!0),!this._isPaused)for(this._accumulator+=s.Timer.deltaSeconds;this._accumulator>=this._updateInterval;)this._currentFrame++,this._currentFrame>=this._frames.length&&(this._currentFrame=0),this._accumulator-=this._updateInterval,this.frame=this._currentFrame;t.prototype.update.call(this,e)},e}(r.Sprite);e.MovieClip=a}]);
//# sourceMappingURL=nano.js.map