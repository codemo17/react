// @flow

// core libraries
import React from 'react';

// core test libraries
import { describe, it } from 'mocha';
import expect from 'expect';
import { mount } from 'enzyme';

// sut - component under test
import Body from '../body';

/** @test table composite component: organism */
describe('table', function() {
  /** @test table header composite component: organism */
  describe('body cells', function() {
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
          data: [
            {
              id: 0,
              columnA: 'value_A_1',
              columnB: 'value_B_1',
            },
            {
              id: 2,
              columnA: 'value_A_2',
              columnB: 'value_B_2',
            },
          ],
        };
        const { data, columns } = props;
        const wrapper = mount(<Body {...props}/>);
        const cells = wrapper.find('tr td');
        expect(cells.length).toEqual(props.columns.length * props.data.length);
        expect(cells.first().text()).toEqual(data[0][columns[0].caption]);
        expect(cells.last().text()).toEqual(data[data.length-1][columns[columns.length-1].caption]);
      });

    });
  });

})


