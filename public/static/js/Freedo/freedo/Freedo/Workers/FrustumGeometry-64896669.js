/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./GeometryAttributes-c3465b51","./Plane-c6867c84","./VertexFormat-b4c6d1c2"],function(t,V,e,b,i,F,a,E,P,z,O,R,f,l){"use strict";function h(t){this.planes=b.defaultValue(t,[])}var p=[new F.Cartesian3,new F.Cartesian3,new F.Cartesian3];F.Cartesian3.clone(F.Cartesian3.UNIT_X,p[0]),F.Cartesian3.clone(F.Cartesian3.UNIT_Y,p[1]),F.Cartesian3.clone(F.Cartesian3.UNIT_Z,p[2]);var d=new F.Cartesian3,c=new F.Cartesian3,u=new f.Plane(new F.Cartesian3(1,0,0),0);function r(t){t=b.defaultValue(t,b.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=b.defaultValue(t.near,1),this._near=this.near,this.far=b.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new h,this._orthographicMatrix=new P.Matrix4}function o(t){t.top===t._top&&t.bottom===t._bottom&&t.left===t._left&&t.right===t._right&&t.near===t._near&&t.far===t._far||(t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=P.Matrix4.computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix))}h.fromBoundingSphere=function(t,e){V.defined(e)||(e=new h);var a=p.length,i=e.planes;i.length=2*a;for(var r=t.center,n=t.radius,o=0,s=0;s<a;++s){var f=p[s],u=i[o],l=i[o+1];V.defined(u)||(u=i[o]=new P.Cartesian4),V.defined(l)||(l=i[o+1]=new P.Cartesian4),F.Cartesian3.multiplyByScalar(f,-n,d),F.Cartesian3.add(r,d,d),u.x=f.x,u.y=f.y,u.z=f.z,u.w=-F.Cartesian3.dot(f,d),F.Cartesian3.multiplyByScalar(f,n,d),F.Cartesian3.add(r,d,d),l.x=-f.x,l.y=-f.y,l.z=-f.z,l.w=-F.Cartesian3.dot(F.Cartesian3.negate(f,c),d),o+=2}return e},h.prototype.computeVisibility=function(t){for(var e=this.planes,a=!1,i=0,r=e.length;i<r;++i){var n=t.intersectPlane(f.Plane.fromCartesian4(e[i],u));if(n===P.Intersect.OUTSIDE)return P.Intersect.OUTSIDE;n===P.Intersect.INTERSECTING&&(a=!0)}return a?P.Intersect.INTERSECTING:P.Intersect.INSIDE},h.prototype.computeVisibilityWithPlaneMask=function(t,e){if(e===h.MASK_OUTSIDE||e===h.MASK_INSIDE)return e;for(var a=h.MASK_INSIDE,i=this.planes,r=0,n=i.length;r<n;++r){var o=r<31?1<<r:0;if(!(r<31&&0==(e&o))){var s=t.intersectPlane(f.Plane.fromCartesian4(i[r],u));if(s===P.Intersect.OUTSIDE)return h.MASK_OUTSIDE;s===P.Intersect.INTERSECTING&&(a|=o)}}return a},h.MASK_OUTSIDE=4294967295,h.MASK_INSIDE=0,h.MASK_INDETERMINATE=2147483647,a.defineProperties(r.prototype,{projectionMatrix:{get:function(){return o(this),this._orthographicMatrix}}});var m=new F.Cartesian3,C=new F.Cartesian3,_=new F.Cartesian3,y=new F.Cartesian3;function v(t){t=b.defaultValue(t,b.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new r,this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=b.defaultValue(t.near,1),this._near=this.near,this.far=b.defaultValue(t.far,5e8),this._far=this.far}function n(t){var e=t._offCenterFrustum;if(t.width!==t._width||t.aspectRatio!==t._aspectRatio||t.near!==t._near||t.far!==t._far){t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far;var a=1/t.aspectRatio;e.right=.5*t.width,e.left=-e.right,e.top=a*e.right,e.bottom=-e.top,e.near=t.near,e.far=t.far}}function s(t){t=b.defaultValue(t,b.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=b.defaultValue(t.near,1),this._near=this.near,this.far=b.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new h,this._perspectiveMatrix=new P.Matrix4,this._infinitePerspective=new P.Matrix4}function g(t){var e=t.top,a=t.bottom,i=t.right,r=t.left,n=t.near,o=t.far;e===t._top&&a===t._bottom&&r===t._left&&i===t._right&&n===t._near&&o===t._far||(t._left=r,t._right=i,t._top=e,t._bottom=a,t._near=n,t._far=o,t._perspectiveMatrix=P.Matrix4.computePerspectiveOffCenter(r,i,a,e,n,o,t._perspectiveMatrix),t._infinitePerspective=P.Matrix4.computeInfinitePerspectiveOffCenter(r,i,a,e,n,t._infinitePerspective))}r.prototype.computeCullingVolume=function(t,e,a){var i=this._cullingVolume.planes,r=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,l=F.Cartesian3.cross(e,a,m);F.Cartesian3.normalize(l,l);var h=C;F.Cartesian3.multiplyByScalar(e,f,h),F.Cartesian3.add(t,h,h);var p=_;F.Cartesian3.multiplyByScalar(l,s,p),F.Cartesian3.add(h,p,p);var d=i[0];return V.defined(d)||(d=i[0]=new P.Cartesian4),d.x=l.x,d.y=l.y,d.z=l.z,d.w=-F.Cartesian3.dot(l,p),F.Cartesian3.multiplyByScalar(l,o,p),F.Cartesian3.add(h,p,p),d=i[1],V.defined(d)||(d=i[1]=new P.Cartesian4),d.x=-l.x,d.y=-l.y,d.z=-l.z,d.w=-F.Cartesian3.dot(F.Cartesian3.negate(l,y),p),F.Cartesian3.multiplyByScalar(a,n,p),F.Cartesian3.add(h,p,p),d=i[2],V.defined(d)||(d=i[2]=new P.Cartesian4),d.x=a.x,d.y=a.y,d.z=a.z,d.w=-F.Cartesian3.dot(a,p),F.Cartesian3.multiplyByScalar(a,r,p),F.Cartesian3.add(h,p,p),d=i[3],V.defined(d)||(d=i[3]=new P.Cartesian4),d.x=-a.x,d.y=-a.y,d.z=-a.z,d.w=-F.Cartesian3.dot(F.Cartesian3.negate(a,y),p),d=i[4],V.defined(d)||(d=i[4]=new P.Cartesian4),d.x=e.x,d.y=e.y,d.z=e.z,d.w=-F.Cartesian3.dot(e,h),F.Cartesian3.multiplyByScalar(e,u,p),F.Cartesian3.add(t,p,p),d=i[5],V.defined(d)||(d=i[5]=new P.Cartesian4),d.x=-e.x,d.y=-e.y,d.z=-e.z,d.w=-F.Cartesian3.dot(F.Cartesian3.negate(e,y),p),this._cullingVolume},r.prototype.getPixelDimensions=function(t,e,a,i){o(this);var r=(this.right-this.left)/t,n=(this.top-this.bottom)/e;return i.x=r,i.y=n,i},r.prototype.clone=function(t){return V.defined(t)||(t=new r),t.left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},r.prototype.equals=function(t){return V.defined(t)&&t instanceof r&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},r.prototype.equalsEpsilon=function(t,e,a){return t===this||V.defined(t)&&t instanceof r&&i.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&i.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&i.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&i.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&i.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&i.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},v.packedLength=4,v.pack=function(t,e,a){return a=b.defaultValue(a,0),e[a++]=t.width,e[a++]=t.aspectRatio,e[a++]=t.near,e[a]=t.far,e},v.unpack=function(t,e,a){return e=b.defaultValue(e,0),V.defined(a)||(a=new v),a.width=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e],a},a.defineProperties(v.prototype,{projectionMatrix:{get:function(){return n(this),this._offCenterFrustum.projectionMatrix}}}),v.prototype.computeCullingVolume=function(t,e,a){return n(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},v.prototype.getPixelDimensions=function(t,e,a,i){return n(this),this._offCenterFrustum.getPixelDimensions(t,e,a,i)},v.prototype.clone=function(t){return V.defined(t)||(t=new v),t.aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},v.prototype.equals=function(t){return!!(V.defined(t)&&t instanceof v)&&(n(this),n(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},v.prototype.equalsEpsilon=function(t,e,a){return!!(V.defined(t)&&t instanceof v)&&(n(this),n(t),i.CesiumMath.equalsEpsilon(this.width,t.width,e,a)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))},a.defineProperties(s.prototype,{projectionMatrix:{get:function(){return g(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return g(this),this._infinitePerspective}}});var w=new F.Cartesian3,x=new F.Cartesian3,M=new F.Cartesian3,T=new F.Cartesian3;function S(t){t=b.defaultValue(t,b.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new s,this.fov=t.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=b.defaultValue(t.near,1),this._near=this.near,this.far=b.defaultValue(t.far,5e8),this._far=this.far,this.xOffset=b.defaultValue(t.xOffset,0),this._xOffset=this.xOffset,this.yOffset=b.defaultValue(t.yOffset,0),this._yOffset=this.yOffset}function k(t){var e=t._offCenterFrustum;t.fov===t._fov&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far&&t.xOffset===t._xOffset&&t.yOffset===t._yOffset||(t._aspectRatio=t.aspectRatio,t._fov=t.fov,t._fovy=t.aspectRatio<=1?t.fov:2*Math.atan(Math.tan(.5*t.fov)/t.aspectRatio),t._near=t.near,t._far=t.far,t._sseDenominator=2*Math.tan(.5*t._fovy),t._xOffset=t.xOffset,t._yOffset=t.yOffset,e.top=t.near*Math.tan(.5*t._fovy),e.bottom=-e.top,e.right=t.aspectRatio*e.top,e.left=-e.right,e.near=t.near,e.far=t.far,e.right+=t.xOffset,e.left+=t.xOffset,e.top+=t.yOffset,e.bottom+=t.yOffset)}s.prototype.computeCullingVolume=function(t,e,a){var i=this._cullingVolume.planes,r=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,l=F.Cartesian3.cross(e,a,w),h=x;F.Cartesian3.multiplyByScalar(e,f,h),F.Cartesian3.add(t,h,h);var p=M;F.Cartesian3.multiplyByScalar(e,u,p),F.Cartesian3.add(t,p,p);var d=T;F.Cartesian3.multiplyByScalar(l,s,d),F.Cartesian3.add(h,d,d),F.Cartesian3.subtract(d,t,d),F.Cartesian3.normalize(d,d),F.Cartesian3.cross(d,a,d),F.Cartesian3.normalize(d,d);var c=i[0];return V.defined(c)||(c=i[0]=new P.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-F.Cartesian3.dot(d,t),F.Cartesian3.multiplyByScalar(l,o,d),F.Cartesian3.add(h,d,d),F.Cartesian3.subtract(d,t,d),F.Cartesian3.cross(a,d,d),F.Cartesian3.normalize(d,d),c=i[1],V.defined(c)||(c=i[1]=new P.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-F.Cartesian3.dot(d,t),F.Cartesian3.multiplyByScalar(a,n,d),F.Cartesian3.add(h,d,d),F.Cartesian3.subtract(d,t,d),F.Cartesian3.cross(l,d,d),F.Cartesian3.normalize(d,d),c=i[2],V.defined(c)||(c=i[2]=new P.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-F.Cartesian3.dot(d,t),F.Cartesian3.multiplyByScalar(a,r,d),F.Cartesian3.add(h,d,d),F.Cartesian3.subtract(d,t,d),F.Cartesian3.cross(d,l,d),F.Cartesian3.normalize(d,d),c=i[3],V.defined(c)||(c=i[3]=new P.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-F.Cartesian3.dot(d,t),c=i[4],V.defined(c)||(c=i[4]=new P.Cartesian4),c.x=e.x,c.y=e.y,c.z=e.z,c.w=-F.Cartesian3.dot(e,h),F.Cartesian3.negate(e,d),c=i[5],V.defined(c)||(c=i[5]=new P.Cartesian4),c.x=d.x,c.y=d.y,c.z=d.z,c.w=-F.Cartesian3.dot(d,p),this._cullingVolume},s.prototype.getPixelDimensions=function(t,e,a,i){g(this);var r=1/this.near,n=this.top*r,o=2*a*n/e,s=2*a*(n=this.right*r)/t;return i.x=s,i.y=o,i},s.prototype.clone=function(t){return V.defined(t)||(t=new s),t.right=this.right,t.left=this.left,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},s.prototype.equals=function(t){return V.defined(t)&&t instanceof s&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},s.prototype.equalsEpsilon=function(t,e,a){return t===this||V.defined(t)&&t instanceof s&&i.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&i.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&i.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&i.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&i.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&i.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},S.packedLength=6,S.pack=function(t,e,a){return a=b.defaultValue(a,0),e[a++]=t.fov,e[a++]=t.aspectRatio,e[a++]=t.near,e[a++]=t.far,e[a++]=t.xOffset,e[a]=t.yOffset,e},S.unpack=function(t,e,a){return e=b.defaultValue(e,0),V.defined(a)||(a=new S),a.fov=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e++],a.xOffset=t[e++],a.yOffset=t[e],a},a.defineProperties(S.prototype,{projectionMatrix:{get:function(){return k(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return k(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return k(this),this._fovy}},sseDenominator:{get:function(){return k(this),this._sseDenominator}}}),S.prototype.computeCullingVolume=function(t,e,a){return k(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},S.prototype.getPixelDimensions=function(t,e,a,i){return k(this),this._offCenterFrustum.getPixelDimensions(t,e,a,i)},S.prototype.clone=function(t){return V.defined(t)||(t=new S),t.aspectRatio=this.aspectRatio,t.fov=this.fov,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._fov=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},S.prototype.equals=function(t){return!!(V.defined(t)&&t instanceof S)&&(k(this),k(t),this.fov===t.fov&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},S.prototype.equalsEpsilon=function(t,e,a){return!!(V.defined(t)&&t instanceof S)&&(k(this),k(t),i.CesiumMath.equalsEpsilon(this.fov,t.fov,e,a)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))};function A(t){var e,a,i=t.frustum,r=t.orientation,n=t.origin,o=b.defaultValue(t.vertexFormat,l.VertexFormat.DEFAULT),s=b.defaultValue(t._drawNearPlane,!0);i instanceof S?(e=0,a=S.packedLength):i instanceof v&&(e=1,a=v.packedLength),this._frustumType=e,this._frustum=i.clone(),this._origin=F.Cartesian3.clone(n),this._orientation=P.Quaternion.clone(r),this._drawNearPlane=s,this._vertexFormat=o,this._workerName="createFrustumGeometry",this.packedLength=2+a+F.Cartesian3.packedLength+P.Quaternion.packedLength+l.VertexFormat.packedLength}A.pack=function(t,e,a){a=b.defaultValue(a,0);var i=t._frustumType,r=t._frustum;return 0===(e[a++]=i)?(S.pack(r,e,a),a+=S.packedLength):(v.pack(r,e,a),a+=v.packedLength),F.Cartesian3.pack(t._origin,e,a),a+=F.Cartesian3.packedLength,P.Quaternion.pack(t._orientation,e,a),a+=P.Quaternion.packedLength,l.VertexFormat.pack(t._vertexFormat,e,a),e[a+=l.VertexFormat.packedLength]=t._drawNearPlane?1:0,e};var D=new S,I=new v,q=new P.Quaternion,B=new F.Cartesian3,L=new l.VertexFormat;function N(t,e,a,i,r,n,o,s){for(var f=t/3*2,u=0;u<4;++u)V.defined(e)&&(e[t]=n.x,e[t+1]=n.y,e[t+2]=n.z),V.defined(a)&&(a[t]=o.x,a[t+1]=o.y,a[t+2]=o.z),V.defined(i)&&(i[t]=s.x,i[t+1]=s.y,i[t+2]=s.z),t+=3;r[f]=0,r[1+f]=0,r[2+f]=1,r[3+f]=0,r[4+f]=1,r[5+f]=1,r[6+f]=0,r[7+f]=1}A.unpack=function(t,e,a){e=b.defaultValue(e,0);var i,r=t[e++];0===r?(i=S.unpack(t,e,D),e+=S.packedLength):(i=v.unpack(t,e,I),e+=v.packedLength);var n=F.Cartesian3.unpack(t,e,B);e+=F.Cartesian3.packedLength;var o=P.Quaternion.unpack(t,e,q);e+=P.Quaternion.packedLength;var s=l.VertexFormat.unpack(t,e,L),f=1===t[e+=l.VertexFormat.packedLength];if(!V.defined(a))return new A({frustum:i,origin:n,orientation:o,vertexFormat:s,_drawNearPlane:f});var u=r===a._frustumType?a._frustum:void 0;return a._frustum=i.clone(u),a._frustumType=r,a._origin=F.Cartesian3.clone(n,a._origin),a._orientation=P.Quaternion.clone(o,a._orientation),a._vertexFormat=l.VertexFormat.clone(s,a._vertexFormat),a._drawNearPlane=f,a};var G=new E.Matrix3,U=new P.Matrix4,j=new P.Matrix4,Q=new F.Cartesian3,K=new F.Cartesian3,Y=new F.Cartesian3,J=new F.Cartesian3,W=new F.Cartesian3,X=new F.Cartesian3,Z=new Array(3),H=new Array(4);H[0]=new P.Cartesian4(-1,-1,1,1),H[1]=new P.Cartesian4(1,-1,1,1),H[2]=new P.Cartesian4(1,1,1,1),H[3]=new P.Cartesian4(-1,1,1,1);for(var $=new Array(4),tt=0;tt<4;++tt)$[tt]=new P.Cartesian4;A._computeNearFarPlanes=function(t,e,a,i,r,n,o,s){var f=E.Matrix3.fromQuaternion(e,G),u=b.defaultValue(n,Q),l=b.defaultValue(o,K),h=b.defaultValue(s,Y);u=E.Matrix3.getColumn(f,0,u),l=E.Matrix3.getColumn(f,1,l),h=E.Matrix3.getColumn(f,2,h),F.Cartesian3.normalize(u,u),F.Cartesian3.normalize(l,l),F.Cartesian3.normalize(h,h),F.Cartesian3.negate(u,u);var p,d,c=P.Matrix4.computeView(t,h,l,u,U);if(0===a){var m=i.projectionMatrix,C=P.Matrix4.multiply(m,c,j);d=P.Matrix4.inverse(C,j)}else p=P.Matrix4.inverseTransformation(c,j);V.defined(d)?(Z[0]=i.near,Z[1]=i.far):(Z[0]=0,Z[1]=i.near,Z[2]=i.far);for(var _=0;_<2;++_)for(var y=0;y<4;++y){var v=P.Cartesian4.clone(H[y],$[y]);if(V.defined(d)){var g=1/(v=P.Matrix4.multiplyByVector(d,v,v)).w;F.Cartesian3.multiplyByScalar(v,g,v),F.Cartesian3.subtract(v,t,v),F.Cartesian3.normalize(v,v);var w=F.Cartesian3.dot(h,v);F.Cartesian3.multiplyByScalar(v,Z[_]/w,v),F.Cartesian3.add(v,t,v)}else{V.defined(i._offCenterFrustum)&&(i=i._offCenterFrustum);var x=Z[_],M=Z[_+1];v.x=.5*(v.x*(i.right-i.left)+i.left+i.right),v.y=.5*(v.y*(i.top-i.bottom)+i.bottom+i.top),v.z=.5*(v.z*(x-M)-x-M),v.w=1,P.Matrix4.multiplyByVector(p,v,v)}r[12*_+3*y]=v.x,r[12*_+3*y+1]=v.y,r[12*_+3*y+2]=v.z}},A.createGeometry=function(t){var e=t._frustumType,a=t._frustum,i=t._origin,r=t._orientation,n=t._drawNearPlane,o=t._vertexFormat,s=n?6:5,f=new Float64Array(72);A._computeNearFarPlanes(i,r,e,a,f);var u=24;f[u]=f[12],f[u+1]=f[13],f[u+2]=f[14],f[u+3]=f[0],f[u+4]=f[1],f[u+5]=f[2],f[u+6]=f[9],f[u+7]=f[10],f[u+8]=f[11],f[u+9]=f[21],f[u+10]=f[22],f[u+11]=f[23],f[u+=12]=f[15],f[u+1]=f[16],f[u+2]=f[17],f[u+3]=f[3],f[u+4]=f[4],f[u+5]=f[5],f[u+6]=f[0],f[u+7]=f[1],f[u+8]=f[2],f[u+9]=f[12],f[u+10]=f[13],f[u+11]=f[14],f[u+=12]=f[3],f[u+1]=f[4],f[u+2]=f[5],f[u+3]=f[15],f[u+4]=f[16],f[u+5]=f[17],f[u+6]=f[18],f[u+7]=f[19],f[u+8]=f[20],f[u+9]=f[6],f[u+10]=f[7],f[u+11]=f[8],f[u+=12]=f[6],f[u+1]=f[7],f[u+2]=f[8],f[u+3]=f[18],f[u+4]=f[19],f[u+5]=f[20],f[u+6]=f[21],f[u+7]=f[22],f[u+8]=f[23],f[u+9]=f[9],f[u+10]=f[10],f[u+11]=f[11],n||(f=f.subarray(12));var l=new R.GeometryAttributes({position:new O.GeometryAttribute({componentDatatype:z.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})});if(V.defined(o.normal)||V.defined(o.tangent)||V.defined(o.bitangent)||V.defined(o.st)){var h=V.defined(o.normal)?new Float32Array(12*s):void 0,p=V.defined(o.tangent)?new Float32Array(12*s):void 0,d=V.defined(o.bitangent)?new Float32Array(12*s):void 0,c=V.defined(o.st)?new Float32Array(8*s):void 0,m=Q,C=K,_=Y,y=F.Cartesian3.negate(m,J),v=F.Cartesian3.negate(C,W),g=F.Cartesian3.negate(_,X);u=0,n&&(N(u,h,p,d,c,g,m,C),u+=12),N(u,h,p,d,c,_,y,C),N(u+=12,h,p,d,c,y,g,C),N(u+=12,h,p,d,c,v,g,y),N(u+=12,h,p,d,c,m,_,C),N(u+=12,h,p,d,c,C,_,y),V.defined(h)&&(l.normal=new O.GeometryAttribute({componentDatatype:z.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h})),V.defined(p)&&(l.tangent=new O.GeometryAttribute({componentDatatype:z.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),V.defined(d)&&(l.bitangent=new O.GeometryAttribute({componentDatatype:z.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:d})),V.defined(c)&&(l.st=new O.GeometryAttribute({componentDatatype:z.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:c}))}for(var w=new Uint16Array(6*s),x=0;x<s;++x){var M=6*x,b=4*x;w[M]=b,w[1+M]=1+b,w[2+M]=2+b,w[3+M]=b,w[4+M]=2+b,w[5+M]=3+b}return new O.Geometry({attributes:l,indices:w,primitiveType:O.PrimitiveType.TRIANGLES,boundingSphere:P.BoundingSphere.fromVertices(f)})},t.FrustumGeometry=A,t.OrthographicFrustum=v,t.PerspectiveFrustum=S});
