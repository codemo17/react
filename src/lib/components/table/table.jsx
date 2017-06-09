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

import Header from './components/thead';
import Body from './components/tbody';

import styles from './styles/table.bemcss';

const {
  shape,
  func,
  string,
  number,
  arrayOf,
} = PropTypes;

/**
 * @namespace Table
 * @memberof lib.components.tabular
 *
 * @classdesc Table Component     --
 *
 * @returns Virtual DOM
 *
 */

class Table extends Component {
  static propTypes = {
    id: string.isRequired,
    columns: arrayOf(shape({
      index: number.isRequired,
      caption: string.isRequired}
    )).isRequired,
    data: arrayOf(shape()),
    onRowClick: func,
  }

  static defaultProps = {
    columns: [],
    data:[],
  }

  handleRowClick: Function;

  constructor(props) {
    super(props);

    this.handleRowClick = this.handleRowClick.bind(this);
  }

  componentDidMount() {

  }

  render() {
    const { id, columns, data } = this.props;
    return (
      <table
        id={id}>
        <Header
          id={`${id}__table-header`}
          columns={columns}
        />
        <Body
          id={`${id}__table-body`}
          columns={columns}
          data={data}
          onRowClick={this.handleRowClick}
        />
      </table>
    );
  }

  handleRowClick(event, id) {
    const { onRowClick } = this.props;
    onRowClick(id);
  }
}

export default css(Table, styles);
