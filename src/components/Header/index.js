import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';
import Notifications from '~/components/Notifications';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile, Cart } from './styles';

function Header({ cartSize }) {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="BoostCrops" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Cart to="/cart">
            <div>
              <strong>Meu Carrinho</strong>
              <span>{cartSize}</span>
            </div>
            <MdShoppingBasket size={26} color="#000" />
          </Cart>

          <Notifications />

          <Profile>
            <div>
              {/* <strong>{profile.name}</strong> */}
              <strong>Time 7</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            {/* <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Time 7"
            /> */}
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Time 7"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
