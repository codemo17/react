// @flow

// core libraries
import React from 'react';

// core test libraries
import { describe, context, it } from 'mocha';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

// sut - component under test
import Header  from '../thead';

/** @test table composite component: organism */
describe('table', function() {
  /** @test table header composite component: organism */
  describe('header cells', function() {
    /** @test table header semantically correct */
    describe('populated with', function() {
      /** @test table header cell has correct data */
      it('correct data', function() {
        const props = {
          id: 'sut',
          columns: [
            {
              index: 0,
              caption: 'columnA',
            },
            {
              index: 1,
              caption: 'columnB',
            },
          ],
        };
        const wrapper = mount(<Header {...props}/>);
        const columns = wrapper.find('tr th');
        expect(columns.length).toEqual(props.columns.length);
        expect(columns.first().text()).toEqual(props.columns[0].caption);
        expect(columns.last().text()).toEqual(props.columns[props.columns.length-1].caption);
      });

    });
  });

})

