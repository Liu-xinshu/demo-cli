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
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./defaultValue-199f5aa8","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./GeometryAttributes-c3465b51","./GeometryPipeline-a3528e40","./IndexDatatype-7119db15","./WebMercatorProjection-3d8e7edb"],function(e,v,t,G,u,r,c,P,k,C,w,b,A,m){"use strict";function l(e,t,r){e=G.defaultValue(e,0),t=G.defaultValue(t,0),r=G.defaultValue(r,0),this.value=new Float32Array([e,t,r])}function x(e,t){var r=e.attributes,n=r.position,i=n.values.length/n.componentsPerAttribute;r.batchId=new C.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:1,values:new Float32Array(i)});for(var o=r.batchId.values,a=0;a<i;++a)o[a]=t}function h(e){var t,r,n=e.instances,i=e.projection,o=e.elementIndexUintSupported,a=e.scene3DOnly,s=e.vertexCacheOptimize,d=e.compressVertices,p=e.modelMatrix,f=n.length;for(t=0;t<f;++t)if(v.defined(n[t].geometry)){n[t].geometry.primitiveType;break}if(function(e,t,r){var n,i=!r,o=e.length;if(!i&&1<o){var a=e[0].modelMatrix;for(n=1;n<o;++n)if(!P.Matrix4.equals(a,e[n].modelMatrix)){i=!0;break}}if(i)for(n=0;n<o;++n)v.defined(e[n].geometry)&&b.GeometryPipeline.transformToWorldCoordinates(e[n]);else P.Matrix4.multiplyTransformation(t,e[0].modelMatrix,t)}(n,p,a),!a)for(t=0;t<f;++t)v.defined(n[t].geometry)&&b.GeometryPipeline.splitLongitude(n[t]);if(function(e){for(var t=e.length,r=0;r<t;++r){var n=e[r];v.defined(n.geometry)?x(n.geometry,r):v.defined(n.westHemisphereGeometry)&&v.defined(n.eastHemisphereGeometry)&&(x(n.westHemisphereGeometry,r),x(n.eastHemisphereGeometry,r))}}(n),s)for(t=0;t<f;++t){var u=n[t];v.defined(u.geometry)?(b.GeometryPipeline.reorderForPostVertexCache(u.geometry),b.GeometryPipeline.reorderForPreVertexCache(u.geometry)):v.defined(u.westHemisphereGeometry)&&v.defined(u.eastHemisphereGeometry)&&(b.GeometryPipeline.reorderForPostVertexCache(u.westHemisphereGeometry),b.GeometryPipeline.reorderForPreVertexCache(u.westHemisphereGeometry),b.GeometryPipeline.reorderForPostVertexCache(u.eastHemisphereGeometry),b.GeometryPipeline.reorderForPreVertexCache(u.eastHemisphereGeometry))}var c=b.GeometryPipeline.combineInstances(n);for(f=c.length,t=0;t<f;++t){var m,l=(r=c[t]).attributes;if(a)for(m in l)l.hasOwnProperty(m)&&l[m].componentDatatype===k.ComponentDatatype.DOUBLE&&b.GeometryPipeline.encodeAttribute(r,m,m+"3DHigh",m+"3DLow");else for(m in l)if(l.hasOwnProperty(m)&&l[m].componentDatatype===k.ComponentDatatype.DOUBLE){var h=m+"3D",g=m+"2D";b.GeometryPipeline.projectTo2D(r,m,h,g,i),v.defined(r.boundingSphere)&&"position"===m&&(r.boundingSphereCV=P.BoundingSphere.fromVertices(r.attributes.position2D.values)),b.GeometryPipeline.encodeAttribute(r,h,h+"High",h+"Low"),b.GeometryPipeline.encodeAttribute(r,g,g+"High",g+"Low")}d&&b.GeometryPipeline.compressVertices(r)}if(!o){var y=[];for(f=c.length,t=0;t<f;++t)r=c[t],y=y.concat(b.GeometryPipeline.fitToUnsignedShortIndices(r));c=y}return c}function g(e,t,r,n){var i,o,a,s=n.length-1;if(0<=s){var d=n[s];i=d.offset+d.count,o=r[a=d.index].indices.length}else o=r[a=i=0].indices.length;for(var p=e.length,f=0;f<p;++f){var u=e[f][t];if(v.defined(u)){var c=u.indices.length;o<i+c&&(i=0,o=r[++a].indices.length),n.push({index:a,offset:i,count:c}),i+=c}}}r.defineProperties(l.prototype,{componentDatatype:{get:function(){return k.ComponentDatatype.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),l.fromCartesian3=function(e){return new l(e.x,e.y,e.z)},l.toValue=function(e,t){return v.defined(t)||(t=new Float32Array([e.x,e.y,e.z])),t[0]=e.x,t[1]=e.y,t[2]=e.z,t};var y={};function i(e,t){var r=e.attributes;for(var n in r)if(r.hasOwnProperty(n)){var i=r[n];v.defined(i)&&v.defined(i.values)&&t.push(i.values.buffer)}v.defined(e.indices)&&t.push(e.indices.buffer)}function o(e){var t=e.length,r=1+(P.BoundingSphere.packedLength+1)*t,n=new Float32Array(r),i=0;n[i++]=t;for(var o=0;o<t;++o){var a=e[o];v.defined(a)?(n[i++]=1,P.BoundingSphere.pack(e[o],n,i)):n[i++]=0,i+=P.BoundingSphere.packedLength}return n}function n(e){for(var t=new Array(e[0]),r=0,n=1;n<e.length;)1===e[n++]&&(t[r]=P.BoundingSphere.unpack(e,n)),++r,n+=P.BoundingSphere.packedLength;return t}y.combineGeometry=function(e){var t,r,n,i,o=e.instances,a=o.length,s=!1;0<a&&(0<(t=h(e)).length&&(r=b.GeometryPipeline.createAttributeLocations(t[0]),e.createPickOffsets&&(n=function(e,t){var r=[];return g(e,"geometry",t,r),g(e,"westHemisphereGeometry",t,r),g(e,"eastHemisphereGeometry",t,r),r}(o,t))),v.defined(o[0].attributes)&&v.defined(o[0].attributes.offset)&&(i=new Array(a),s=!0));for(var d=new Array(a),p=new Array(a),f=0;f<a;++f){var u=o[f],c=u.geometry;v.defined(c)&&(d[f]=c.boundingSphere,p[f]=c.boundingSphereCV,s&&(i[f]=u.geometry.offsetAttribute));var m=u.eastHemisphereGeometry,l=u.westHemisphereGeometry;v.defined(m)&&v.defined(l)&&(v.defined(m.boundingSphere)&&v.defined(l.boundingSphere)&&(d[f]=P.BoundingSphere.union(m.boundingSphere,l.boundingSphere)),v.defined(m.boundingSphereCV)&&v.defined(l.boundingSphereCV)&&(p[f]=P.BoundingSphere.union(m.boundingSphereCV,l.boundingSphereCV)))}return{geometries:t,modelMatrix:e.modelMatrix,attributeLocations:r,pickOffsets:n,offsetInstanceExtend:i,boundingSpheres:d,boundingSpheresCV:p}},y.packCreateGeometryResults=function(e,t){var r=new Float64Array(function(e){for(var t=1,r=e.length,n=0;n<r;n++){var i=e[n];if(++t,v.defined(i)){var o=i.attributes;for(var a in t+=7+2*P.BoundingSphere.packedLength+(v.defined(i.indices)?i.indices.length:0),o){if(o.hasOwnProperty(a)&&v.defined(o[a]))t+=5+o[a].values.length}}}return t}(e)),n=[],i={},o=e.length,a=0;r[a++]=o;for(var s=0;s<o;s++){var d=e[s],p=v.defined(d);if(r[a++]=p?1:0,p){r[a++]=d.primitiveType,r[a++]=d.geometryType,r[a++]=G.defaultValue(d.offsetAttribute,-1);var f=v.defined(d.boundingSphere)?1:0;(r[a++]=f)&&P.BoundingSphere.pack(d.boundingSphere,r,a),a+=P.BoundingSphere.packedLength;var u=v.defined(d.boundingSphereCV)?1:0;(r[a++]=u)&&P.BoundingSphere.pack(d.boundingSphereCV,r,a),a+=P.BoundingSphere.packedLength;var c=d.attributes,m=[];for(var l in c)c.hasOwnProperty(l)&&v.defined(c[l])&&(m.push(l),v.defined(i[l])||(i[l]=n.length,n.push(l)));r[a++]=m.length;for(var h=0;h<m.length;h++){var g=m[h],y=c[g];r[a++]=i[g],r[a++]=y.componentDatatype,r[a++]=y.componentsPerAttribute,r[a++]=y.normalize?1:0,r[a++]=y.values.length,r.set(y.values,a),a+=y.values.length}var b=v.defined(d.indices)?d.indices.length:0;0<(r[a++]=b)&&(r.set(d.indices,a),a+=b)}}return t.push(r.buffer),{stringTable:n,packedData:r}},y.unpackCreateGeometryResults=function(e){for(var t,r=e.stringTable,n=e.packedData,i=new Array(n[0]),o=0,a=1;a<n.length;){if(1===n[a++]){var s,d,p,f,u,c=n[a++],m=n[a++],l=n[a++];-1===l&&(l=void 0),1===n[a++]&&(s=P.BoundingSphere.unpack(n,a)),a+=P.BoundingSphere.packedLength,1===n[a++]&&(d=P.BoundingSphere.unpack(n,a)),a+=P.BoundingSphere.packedLength;var h,g=new w.GeometryAttributes,y=n[a++];for(t=0;t<y;t++){var b=r[n[a++]],v=n[a++];u=n[a++];var G=0!==n[a++];p=n[a++],f=k.ComponentDatatype.createTypedArray(v,p);for(var x=0;x<p;x++)f[x]=n[a++];g[b]=new C.GeometryAttribute({componentDatatype:v,componentsPerAttribute:u,normalize:G,values:f})}if(0<(p=n[a++])){var S=f.length/u;for(h=A.IndexDatatype.createTypedArray(S,p),t=0;t<p;t++)h[t]=n[a++]}i[o++]=new C.Geometry({primitiveType:c,geometryType:m,boundingSphere:s,boundingSphereCV:d,indices:h,attributes:g,offsetAttribute:l})}else i[o++]=void 0}return i},y.packCombineGeometryParameters=function(e,t){for(var r=e.createGeometryResults,n=r.length,i=0;i<n;i++)t.push(r[i].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:function(e,t){var r=e.length,n=new Float64Array(1+19*r),i=0;n[i++]=r;for(var o=0;o<r;o++){var a=e[o];if(P.Matrix4.pack(a.modelMatrix,n,i),i+=P.Matrix4.packedLength,v.defined(a.attributes)&&v.defined(a.attributes.offset)){var s=a.attributes.offset.value;n[i]=s[0],n[i+1]=s[1],n[i+2]=s[2]}i+=3}return t.push(n.buffer),n}(e.instances,t),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof c.GeographicProjection,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}},y.unpackCombineGeometryParameters=function(e){for(var t=function(e){for(var t=e,r=new Array(t[0]),n=0,i=1;i<t.length;){var o,a=P.Matrix4.unpack(t,i);i+=P.Matrix4.packedLength,v.defined(t[i])&&(o={offset:new l(t[i],t[i+1],t[i+2])}),i+=3,r[n++]={modelMatrix:a,attributes:o}}return r}(e.packedInstances),r=e.createGeometryResults,n=r.length,i=0,o=0;o<n;o++)for(var a=y.unpackCreateGeometryResults(r[o]),s=a.length,d=0;d<s;d++){var p=a[d];t[i].geometry=p,++i}var f=u.Ellipsoid.clone(e.ellipsoid);return{instances:t,ellipsoid:f,projection:e.isGeographic?new c.GeographicProjection(f):new m.WebMercatorProjection(f),elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:P.Matrix4.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}},y.packCombineGeometryResults=function(e,t){v.defined(e.geometries)&&function(e,t){for(var r=e.length,n=0;n<r;++n)i(e[n],t)}(e.geometries,t);var r=o(e.boundingSpheres),n=o(e.boundingSpheresCV);return t.push(r.buffer,n.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:r,boundingSpheresCV:n}},y.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:n(e.boundingSpheres),boundingSpheresCV:n(e.boundingSpheresCV)}},e.PrimitivePipeline=y});
