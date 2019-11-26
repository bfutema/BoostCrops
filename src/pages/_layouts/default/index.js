import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import LeftNavigation from '~/components/LeftNavigation';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <LeftNavigation />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
