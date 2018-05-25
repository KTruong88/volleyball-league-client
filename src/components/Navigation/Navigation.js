import React from 'react'
import Teams from './Teams'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    const { isOpen } = this.state

    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    const { isOpen } = this.state

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">RB Volleyball</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/courts/">Courts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/rules">League Rules</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  2018 Season
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Teams
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
