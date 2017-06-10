// @flow

// core libraries
import React from 'react';

// core test libraries
import { describe, it } from 'mocha';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import cssModules from 'mock-css-modules';

cssModules.register(['.bemcss', '.sass']);

// sut - component under test
import { Contacts } from '../contacts';

/** @test contact list component */
describe('contacts page', function() {
  const render = (type) => {
    const props = {
      id: 'contacts--page',
    }
    switch(type) {
      case 'deep':
        return mount(<Contacts {...props}/>);
      default:
      case 'shallow':
        return shallow(<Contacts {...props}/>);
    }
  }
  /** @test syntactically correct  */
  describe('contains ', function() {
    /** @test has tabular view */
    it('single table element inorder to list the contacts ', function() {
      const sut = render('deep');
      expect(sut.find('table').length).toEqual(1);
    });
  });
});
