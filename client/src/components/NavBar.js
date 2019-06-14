import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, Segment, Image, } from 'semantic-ui-react';


const NavBar = () => (
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Item>
        <NavLink
          exact
          to="/"
          activeStyle={styles.active}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact
          to="/about"
          activeStyle={styles.active}>
          About
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to="/departments"
          activeStyle={styles.active}>
          Departments
        </NavLink>
      </Menu.Item>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'right',
        width: '10%',
        height: '50px',
      }}>
        <Image src={require('../images/worse_amazon.png')} alt="logo" />
      </div>
    </div>
      </Menu>
  </Segment>
)

const styles = {
  active: {
    color: 'orange',
    fontWeight: 'bold',
  }
}

export default NavBar