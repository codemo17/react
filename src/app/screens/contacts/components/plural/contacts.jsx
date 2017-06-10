// @flow
/**
 * core packages
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * third party packages
 */
import css from 'react-css-modules';


/**
 * internal packages
 */
import Table from 'components/table';

import styles from './styles/contacts.bemcss';

const {
  shape,
  func,
  string,
} = PropTypes;

/**
 * @namespace Contacts
 * @memberof dem017.interview.react-redux
 * @classdesc Contacts Component  -- HOComponent to enlist contacts
 */

export class Contacts extends Component {
  static contextTypes = {
    router: shape({
      push: func.isRequired,
    }).isRequired,

  }

  static propTypes = {
    id: string.isRequired,

  }

  static defaultProps = {

  }

  constructor(props: { id: string }) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Table
          id="contacts"
          columns={[{index:0, caption: 'name'}]}
        />
      </div>
    );
  }
}

export default css(Contacts, styles);
