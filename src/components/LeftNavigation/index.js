import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Navigation, LinkPage } from './styles';

export default function LeftNavigation() {
  return (
    <Container>
      <Header>
        <strong>BoostCrops</strong>
      </Header>
      <Navigation>
        <LinkPage className="active">
          <Link to="/dashboard">Dashboard</Link>
        </LinkPage>
        <LinkPage>
          <Link to="/resources">Recursos</Link>
        </LinkPage>
        <LinkPage>
          <Link to="/products">Produtos</Link>
        </LinkPage>
        <LinkPage>
          <Link to="/feedback">Relatórios</Link>
        </LinkPage>
        <LinkPage>
          <Link to="/market">Loja</Link>
        </LinkPage>
      </Navigation>
    </Container>
  );
}
