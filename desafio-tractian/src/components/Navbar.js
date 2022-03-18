import React from 'react';
import { Menu } from 'antd';
import './Navbar.css';

class NavBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="bg-blue-900 center-items pb-10">
        <Menu.Item key="alipay1">
          <a href="/" rel="noopener noreferrer">
            Home
          </a>
        </Menu.Item>
        <Menu.Item key="alipay0">
          <a href="/assets" rel="noopener noreferrer">
            Soluções
          </a>
        </Menu.Item>
        <Menu.Item key="alipay3">
          <a href="/empresas" rel="noopener noreferrer">
            Empresas
          </a>
        </Menu.Item>
        <Menu.Item key="alipay4">
          <a href="/unidades" rel="noopener noreferrer">
            Unidades
          </a>
        </Menu.Item>
        <Menu.Item key="alipay5">
          <a href="/usuarios" rel="noopener noreferrer">
            Usuarios
          </a>
        </Menu.Item>
        <Menu.Item key="alipay6">
          <a href="/graficos" rel="noopener noreferrer">
            Grágicos
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;