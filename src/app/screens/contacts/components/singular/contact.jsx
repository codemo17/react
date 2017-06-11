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

import styles from './styles/contact.bemcss';

/**
 * @namespace Contact
 * @memberof
 *
 * @classdesc Contact Component     --
 *
 * @returns Virtual DOM
 *
 */

const Contact = (props) => {
  return (
    <div>

    </div>
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
 *  @property {  }                -- represents filter fragment of query string
 */

Contact.propTypes = {
  id: string.isRequired,

}

/**
 *  @property {  }                -- represents filter fragment of query string
 */
Contact.defaultProps = {

}

export default css(Contact, styles);
