// @flow
/**
 * core packages
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * third party packages
 */
import { connect } from 'react-redux';
import css from 'react-css-modules';


/**
 * internal packages
 */
import Table from 'components/table';
import styles from './styles/contacts.bemcss';

import { selector } from './state';
import * as actions from 'contacts/store/actions';

const {
  shape,
  func,
  string,
  arrayOf,
  number,
  bool,
} = PropTypes;

/**
 * @namespace Contacts
 * @memberof dem017.interview.react-redux
 * @classdesc Contacts Component  -- HOComponent to enlist contacts
 */


export class Contacts extends Component {

  _getContactDetails: Function;

  static contextTypes = {
    router: shape({
      push: func.isRequired,
    }).isRequired,

  }

  static propTypes = {
    id: string.isRequired,
    columns: arrayOf(shape( {
      index: number.isRequired,
      caption: string.isRequired,
      field: string.isRequired,
      sortable: bool,
    })),

    data: arrayOf(shape({
      id: number,
      name: string,
      profession: string,
    })).isRequired,

    location: shape({
      query:shape(),
    }),
  }

  static defaultProps = {
    columns:[
      { index: 0, caption: 'id', field: 'id', sortable: false },
      { index: 1, caption: 'fullname', field: 'name', sortable: false },
      { index: 2, caption: 'role', field: 'role', sortable: false },
    ],
    data: [],
  }

  constructor() {
    super();
    this._getContactDetails = this._getContactDetails.bind(this);
  }

  componentDidMount() {
    debugger;
    this.props.loadContacts();
  }

  render() {
    debugger;
    const { columns, data } = this.props;
    return (
      <div>
        <Table
          id="contacts"
          columns={columns.sort((x,y) => x.index > y.index)}
          onRowClick={this._getContactDetails}
          data={data}
        />
      </div>
    );
  }

  _getContactDetails(id: number) {
    const { location } = this.props;
    location.query = { ...location.query, id };
    this.context.router.push(location);
  }
}

export default connect(selector, actions)(css(Contacts, styles));
