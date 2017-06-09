// @flow
/**
 * core packages
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * third party packages
 */

import css from 'react-css-modules';

/**
 * internal packages
 */

import styles from './styles/tbody.bemcss';

/**
 * @namespace Tbody
 * @memberof
 *
 * @classdesc Tbody Component     --
 *
 * @returns Virtual DOM
 *
 */

const Tbody = (props) => {
  const { id, columns, data } = props;
  const { onRowClick } = props;
  return (
    <tbody
      id={id}>
      {
        data.map( (d) => {
          return <tr
            onClick={(e) => onRowClick(e, d['id'])}
            key={`table__row--${d.id}`}>
            { columns.map((col) => <td key={`table__row--${d.id}-cell-${col.caption}`}>{ d[col.caption] }</td>) }
          </tr>
        } )
      }
    </tbody>
  );
}

const {
  shape,
  func,
  string,
  number,
  arrayOf,
} = PropTypes;


/**
 *  @property {  }                --
 */

Tbody.propTypes = {
  id: string.isRequired,
  columns: arrayOf(shape({
    index: number.isRequired,
    caption: string.isRequired}
  )).isRequired,
  data: arrayOf(shape()),
  onRowClick: func,
}

/**
 *  @property {  }                --
 */
Tbody.defaultProps = {
  columns: [],
  data: [],
  onRowClick: () => {},
}

export default css(Tbody, styles);
