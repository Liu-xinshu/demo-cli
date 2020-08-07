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
define(["exports","./defined-b9ff0e39","./Math-92bd3539","./Cartesian2-8fa798b8","./objectToQuery-2e382d4d","./Transforms-c1305e13","./PolylineVolumeGeometryLibrary-f1014cb5","./PolylinePipeline-15ee8ac6"],function(a,o,T,M,c,d,N,L){"use strict";var e={},O=new M.Cartesian3,p=new M.Cartesian3,m=new M.Cartesian3,f=new M.Cartesian3,Q=[new M.Cartesian3,new M.Cartesian3],R=new M.Cartesian3,V=new M.Cartesian3,U=new M.Cartesian3,G=new M.Cartesian3,I=new M.Cartesian3,j=new M.Cartesian3,q=new M.Cartesian3,k=new M.Cartesian3,F=new M.Cartesian3,H=new M.Cartesian3,g=new d.Quaternion,h=new c.Matrix3;function J(a,e,r,n,t){var i,s=M.Cartesian3.angleBetween(M.Cartesian3.subtract(e,a,O),M.Cartesian3.subtract(r,a,p)),o=n===N.CornerType.BEVELED?1:Math.ceil(s/T.CesiumMath.toRadians(5))+1,C=3*o,l=new Array(C);l[C-3]=r.x,l[C-2]=r.y,l[C-1]=r.z,i=t?c.Matrix3.fromQuaternion(d.Quaternion.fromAxisAngle(M.Cartesian3.negate(a,O),s/o,g),h):c.Matrix3.fromQuaternion(d.Quaternion.fromAxisAngle(a,s/o,g),h);var y=0;e=M.Cartesian3.clone(e,O);for(var u=0;u<o;u++)e=c.Matrix3.multiplyByVector(i,e,e),l[y++]=e.x,l[y++]=e.y,l[y++]=e.z;return l}function K(a,e,r,n){var t=O;return[(t=(n||(e=M.Cartesian3.negate(e,e)),M.Cartesian3.add(a,e,t))).x,t.y,t.z,r.x,r.y,r.z]}function W(a,e,r,n){for(var t=new Array(a.length),i=new Array(a.length),s=M.Cartesian3.multiplyByScalar(e,r,O),o=M.Cartesian3.negate(s,p),C=0,l=a.length-1,y=0;y<a.length;y+=3){var u=M.Cartesian3.fromArray(a,y,m),c=M.Cartesian3.add(u,o,f);t[C++]=c.x,t[C++]=c.y,t[C++]=c.z;var d=M.Cartesian3.add(u,s,f);i[l--]=d.z,i[l--]=d.y,i[l--]=d.x}return n.push(t,i),n}e.addAttribute=function(a,e,r,n){var t=e.x,i=e.y,s=e.z;o.defined(r)&&(a[r]=t,a[r+1]=i,a[r+2]=s),o.defined(n)&&(a[n]=s,a[n-1]=i,a[n-2]=t)};var X=new M.Cartesian3,Y=new M.Cartesian3;e.computePositions=function(a){var e=a.granularity,r=a.positions,n=a.ellipsoid,t=a.width/2,i=a.cornerType,s=a.saveAttributes,o=R,C=V,l=U,y=G,u=I,c=j,d=q,p=k,m=F,f=H,g=[],h=s?[]:void 0,w=s?[]:void 0,z=r[0],x=r[1];C=M.Cartesian3.normalize(M.Cartesian3.subtract(x,z,C),C),o=n.geodeticSurfaceNormal(z,o),y=M.Cartesian3.normalize(M.Cartesian3.cross(o,C,y),y),s&&(h.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),d=M.Cartesian3.clone(z,d),z=x,l=M.Cartesian3.negate(C,l);var v,P,b=[],A=r.length;for(v=1;v<A-1;v++){o=n.geodeticSurfaceNormal(z,o),x=r[v+1],C=M.Cartesian3.normalize(M.Cartesian3.subtract(x,z,C),C),u=M.Cartesian3.normalize(M.Cartesian3.add(C,l,u),u);var B=M.Cartesian3.multiplyByScalar(o,M.Cartesian3.dot(C,o),X);M.Cartesian3.subtract(C,B,B),M.Cartesian3.normalize(B,B);var E=M.Cartesian3.multiplyByScalar(o,M.Cartesian3.dot(l,o),Y);if(M.Cartesian3.subtract(l,E,E),M.Cartesian3.normalize(E,E),!T.CesiumMath.equalsEpsilon(Math.abs(M.Cartesian3.dot(B,E)),1,T.CesiumMath.EPSILON7)){u=M.Cartesian3.cross(u,o,u),u=M.Cartesian3.cross(o,u,u),u=M.Cartesian3.normalize(u,u);var S=t/Math.max(.25,M.Cartesian3.magnitude(M.Cartesian3.cross(u,l,O))),D=N.PolylineVolumeGeometryLibrary.angleIsGreaterThanPi(C,l,z,n);u=M.Cartesian3.multiplyByScalar(u,S,u),D?(p=M.Cartesian3.add(z,u,p),f=M.Cartesian3.add(p,M.Cartesian3.multiplyByScalar(y,t,f),f),m=M.Cartesian3.add(p,M.Cartesian3.multiplyByScalar(y,2*t,m),m),Q[0]=M.Cartesian3.clone(d,Q[0]),Q[1]=M.Cartesian3.clone(f,Q[1]),g=W(L.PolylinePipeline.generateArc({positions:Q,granularity:e,ellipsoid:n}),y,t,g),s&&(h.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),c=M.Cartesian3.clone(m,c),y=M.Cartesian3.normalize(M.Cartesian3.cross(o,C,y),y),m=M.Cartesian3.add(p,M.Cartesian3.multiplyByScalar(y,2*t,m),m),d=M.Cartesian3.add(p,M.Cartesian3.multiplyByScalar(y,t,d),d),i===N.CornerType.ROUNDED||i===N.CornerType.BEVELED?b.push({leftPositions:J(p,c,m,i,D)}):b.push({leftPositions:K(z,M.Cartesian3.negate(u,u),m,D)})):(m=M.Cartesian3.add(z,u,m),f=M.Cartesian3.add(m,M.Cartesian3.negate(M.Cartesian3.multiplyByScalar(y,t,f),f),f),p=M.Cartesian3.add(m,M.Cartesian3.negate(M.Cartesian3.multiplyByScalar(y,2*t,p),p),p),Q[0]=M.Cartesian3.clone(d,Q[0]),Q[1]=M.Cartesian3.clone(f,Q[1]),g=W(L.PolylinePipeline.generateArc({positions:Q,granularity:e,ellipsoid:n}),y,t,g),s&&(h.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),c=M.Cartesian3.clone(p,c),y=M.Cartesian3.normalize(M.Cartesian3.cross(o,C,y),y),p=M.Cartesian3.add(m,M.Cartesian3.negate(M.Cartesian3.multiplyByScalar(y,2*t,p),p),p),d=M.Cartesian3.add(m,M.Cartesian3.negate(M.Cartesian3.multiplyByScalar(y,t,d),d),d),i===N.CornerType.ROUNDED||i===N.CornerType.BEVELED?b.push({rightPositions:J(m,c,p,i,D)}):b.push({rightPositions:K(z,u,p,D)})),l=M.Cartesian3.negate(C,l)}z=x}return o=n.geodeticSurfaceNormal(z,o),Q[0]=M.Cartesian3.clone(d,Q[0]),Q[1]=M.Cartesian3.clone(z,Q[1]),g=W(L.PolylinePipeline.generateArc({positions:Q,granularity:e,ellipsoid:n}),y,t,g),s&&(h.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),i===N.CornerType.ROUNDED&&(P=function(a){var e=R,r=V,n=U,t=a[1];r=M.Cartesian3.fromArray(a[1],t.length-3,r),n=M.Cartesian3.fromArray(a[0],0,n);var i=J(e=M.Cartesian3.midpoint(r,n,e),r,n,N.CornerType.ROUNDED,!1),s=a.length-1,o=a[s-1];return t=a[s],r=M.Cartesian3.fromArray(o,o.length-3,r),n=M.Cartesian3.fromArray(t,0,n),[i,J(e=M.Cartesian3.midpoint(r,n,e),r,n,N.CornerType.ROUNDED,!1)]}(g)),{positions:g,corners:b,lefts:h,normals:w,endPositions:P}},a.CorridorGeometryLibrary=e});
