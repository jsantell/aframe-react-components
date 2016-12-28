import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import * as Components from '../src/index';
import componentData from '../src/components';

global.AFRAME = {
  components: {
    camera: {},
    geometry: {},
    material: {},
    position: {},
    scale: {}
  }
};

describe('Components', () => {
  Object.keys(componentData).forEach(componentName => {
    const primitiveName = componentData[componentName].primitive;

    it(`renders <${componentName} /> as primitive <${primitiveName} />`, () => {
      const Component = Components[componentName];
      const wrapper = shallow(<Component />);
      // Can't use enzyme's selectors to match current element with
      // our custom elements?
      expect(wrapper.html()).to.equal(`<${primitiveName}></${primitiveName}>`);
    });

  });
});
