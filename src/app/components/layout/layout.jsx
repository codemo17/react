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

import styles from './styles/layout.bemcss';

/**
 * @namespace Layout
 * @memberof
 *
 * @classdesc Layout Component     --
 *
 * @returns Virtual DOM
 *
 */
const Layout = (props) => {
  const { children } = props;
  return (
    <div styleName="container">
      <header styleName="container--header">
        header
      </header>
      <div styleName="container--body">
        <aside styleName="container--navigation">
        </aside>
        <section styleName="container--content">
          {children}
        </section>
        <footer styleName="container--footer">
          foooter
        </footer>
      </div>
    </div>
  );
}
const {
  shape,
} = PropTypes;


Layout.propTypes = {
  children: shape(),
}

Layout.defaultProps = {

}

export default css(Layout, styles);
