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

import styles from './styles/thead.bemcss';

/**
 * @namespace Thead
 * @memberof
 *
 * @classdesc Thead Component     --
 *
 * @returns Virtual DOM
 *
 */

const Thead = (props) => {
  const { id, columns } = props;
  return (
    <thead
      id={id}>
      <tr>
        { columns.map((column, i) => <th key={`col-${i}`}>{column.caption}</th>) }
      </tr>
    </thead>

  );
}

const {
  shape,
  string,
  number,
  arrayOf,
} = PropTypes;

/**
 *  @property {  }                -- represents filter fragment of query string
 */

Thead.propTypes = {
  id: string.isRequired,
  columns: arrayOf(shape({
    index: number.isRequired,
    caption: string.isRequired}
  )).isRequired,
}

/**
 *  @property {  }                -- represents filter fragment of query string
 */
Thead.defaultProps = {

}

export default css(Thead, styles);

