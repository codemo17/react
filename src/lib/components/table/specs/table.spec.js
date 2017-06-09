//@flow

// core libraries
import React from 'react';

// core test libraries
import { describe, it, before } from 'mocha';
import { beforeEach } from 'mocha';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

// sut - component under test
import Table from '../table';

/** @test table composite component: organism */
describe('table', function() {

  let props = {};
  before(function(){
    props = {
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
      onRowClick: (rest) => { console.log(rest) },
    };

  });

  /** @test table has correct syntax */
  describe('built of', function() {

    /** @test table tag */
    it('container', function() {
      const wrapper = shallow(<Table id="sut"/>);
      expect(wrapper.find('table').length).toEqual(1);
    });

    /** @test presense of header  */
    it('header', function() {
      const wrapper = mount(<Table id="sut"/>);
      const header = wrapper.find('thead');
      expect(header.length).toEqual(1);
      expect(header.prop('id')).toEqual('sut__table-header');
    });

    /** @test presence of body */
    it('body', function() {
      const wrapper = mount(<Table id="sut"/>);
      const body = wrapper.find('tbody');
      expect(body.length).toEqual(1);
      expect(body.prop('id')).toEqual('sut__table-body');
    });

  });


  /** @test table has correct semantics */
  describe('comprised of', function() {
    /** @test correct number of columns */
    it('correct number of columns', function() {
      const wrapper = mount(<Table {...props}/>);
      const columns = wrapper.find('thead tr th');
      expect(columns.length).toEqual(props.columns.length);
    });

    /** @test correct number of body rows  */
    it('correct number of body rows', function() {
      const wrapper = mount(<Table {...props}/>);
      const rows = wrapper.find('tbody tr');
      expect(rows.length).toEqual(props.data.length);
    });
  });

  /** @test behavior of table */
  describe('behaves correctly', function() {
    /** @test click behavior of table body  */
    it('when click on any row', function() {
      const wrapper = mount(<Table {...props}/>);

      const spy = expect.createSpy();
      spy(props, 'onRowClick');

      wrapper.find('tbody').childAt(0).simulate('click');
      expect(spy).toHaveBeenCalled();

    });
  });
});


