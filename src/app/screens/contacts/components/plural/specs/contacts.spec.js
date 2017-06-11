// @flow

// core libraries
import React from 'react';

//essential third pary libraries
import { Router, createMemoryHistory as createHistory } from 'react-router';


// core test libraries
import { describe, it } from 'mocha';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

// sut - component under test
import { Contacts } from '../contacts';
import routes from 'app/components/routes/config';


/** @test contact list component */
describe('contacts page', function() {
  const history = createHistory('/');
  const render = (type) => {
    const props = {
      id: 'contacts--page',
      loadContacts: ()=>{},
      data:[
        { id: 0, name: 'John Doe', role: 'anybody' },
        { id: 1, name: 'Jill Doe', role: 'nobody' },
      ],
    }
    switch(type) {
      case 'deep':
        return mount(<Contacts {...props}/>);
      case 'contexted':
        return mount(<Router history={history} routes={routes}><Contacts {...props}/></Router>);
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

  /** @test clicing any row will route to contact singie definitaion page */
  describe('clicking any row on table', function() {
    describe('directs to/loads "Contact detail page" with corresponding/correct data', function() {

      /** @test invokes redirect eventhandler get invoked with correct arguments */
      it('invokes redirect eventhandler with correct parameter', function() {
        const spy = expect.spyOn(Contacts.prototype, '_getContactDetails');

        const sut = render('deep');
        expect(sut.instance()._getContactDetails).toExist();

        const clickableRecords = sut.find('tbody tr');
        expect(clickableRecords.length).toEqual(2);

        clickableRecords.first().simulate('click');
        expect(spy).toHaveBeenCalledWith(0);

        spy.reset();

        clickableRecords.last().simulate('click');
        expect(spy).toHaveBeenCalledWith(1);

      });


      /** @test redirects to "Contact details page" via updating "url query" */
      it.skip('redirects to "Contact(single) detail page" via updating "url" with correct data', function() {
        const pathnames = [];
        history.listen((location) => {
          //expect(args.pathname).toEqual('/contacts?id=0');
          pathnames.push(location.pathname);
        });

        const sut = render('contexted');
        const clickableRecords = sut.find('tbody tr');

        expect(clickableRecords.length).toEqual(2);



        expect(pathnames.length).toEqual(1);
        //expect(context.router.props.history.getCurrentLocation()['pathname']).toEqual('/contacts?id=0');

      });

    });


  });
});
