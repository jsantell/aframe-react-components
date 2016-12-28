import React from 'react';
import { Entity } from 'aframe-react';
import { omit } from './utils';
import componentsData from './components';

const OMIT_PROPS = ['primitive'];

const renderEntityWithPrimitive = name => props =>
  <Entity primitive={name} {...omit(props, OMIT_PROPS)} />;

const Components = Object.keys(componentsData).reduce((result, compName) => {
  const compData = componentsData[compName];

  // Assign render function with primitive to Component[componentName]
  result[compName] = renderEntityWithPrimitive(compData.primitive);

  return result;
}, {});

// :[
export const Box = Components.Box;
export const Camera = Components.Camera;
export const Circle = Components.Circle;
export const ColladaModel = Components.ColladaModel;
export const Cone = Components.Cone;
export const Cursor = Components.Cursor;
export const CurvedImage = Components.CurvedImage;
export const Cylinder = Components.Cylinder;
export const Dodecahedron = Components.Dodecahedron;
export const Image = Components.Image;
export const Light = Components.Light;
export const ObjModel = Components.ObjModel;
export const Octahedron = Components.Octahedron;
export const Plane = Components.Plane;
export const Ring = Components.Ring;
export const Sky = Components.Sky;
export const Sound = Components.Sound;
export const Sphere = Components.Sphere;
export const Tetrahedron = Components.Tetrahedron;
export const TorusKnot = Components.TorusKnot;
export const Torus = Components.Torus;
export const Video = Components.Video;
export const VideoSphere = Components.VideoSphere;

// Some aliases to match casing on aframe primitives
export const Curvedimage = Components.CurvedImage;
export const Videosphere = Components.VideoSphere;
