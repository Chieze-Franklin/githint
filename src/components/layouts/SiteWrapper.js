import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  Icon,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

const navBarItems = [{
  value: "Home",
  to: "/",
  icon: "home",
  LinkComponent: withRouter(NavLink),
  useExact: true,
}, {
  value: "Branch",
  to: "/branch",
  icon: "git-branch",
  LinkComponent: withRouter(NavLink),
  useExact: true,
}, {
  value: "Commit",
  to: "/commit",
  icon: "git-commit",
  LinkComponent: withRouter(NavLink),
  useExact: true,
}, {
  value: "Pull Request",
  to: "/pr",
  icon: "git-pull-request",
  LinkComponent: withRouter(NavLink),
  useExact: true,
}, {
  value: "Tree",
  to: "/tree",
  icon: "git-merge",
  LinkComponent: withRouter(NavLink),
  useExact: true,
}, {
  value: "More",
  icon: "more-vertical",
  subItems: [
    {
      value: "Support",
      to: "/support",
      icon: "heart",
      LinkComponent: withRouter(NavLink),
    },
    {
      value: "Privacy",
      to: "/privacy",
      icon: "shield",
      LinkComponent: withRouter(NavLink),
    },
  ],
},]

class SiteWrapper extends Component {
  state = {}

  render() {
    return (<Site.Wrapper
      headerProps={{
        href: "/",
        alt: "PRLint",
        imageURL: "../images/logo.svg",
        navItems: (<Nav.Item type="div" className="d-none d-md-flex">
          <Button
            href="https://github.com/Chieze-Franklin/ghint-bot"
            target="_blank"
            outline
            size="sm"
            RootComponent="a"
            color="primary"
          >
            <Icon prefix="fe" name="github" />&nbsp;
            ghint bot
          </Button>
        </Nav.Item>)
      }}
      navProps={{ itemsObjects: navBarItems }}
      routerContextComponentType={withRouter(RouterContextProvider)}
      footerProps={{
        copyright: (
          <React.Fragment>
            Copyright © {new Date().getFullYear()}
            <a href="https://twitter.com/franklin_chieze"> Franklin Chieze</a> | Template by
            <a
              href="http://tabler-react.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              tabler-react.com
            </a> | Theme by
            <a
              href="https://codecalm.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              codecalm.net
            </a>{" "} |
            All rights reserved.
          </React.Fragment>
        ),
        nav: (
          <React.Fragment>
            <Grid.Col auto={true}>
              <List className="list-inline list-inline-dots mb-0">
                <List.Item className="list-inline-item">
                <a href="https://twitter.com/franklin_chieze"><Icon prefix="fe" name="twitter" /></a>
                </List.Item>
                <List.Item className="list-inline-item">
                  <a href="https://github.com/Chieze-Franklin"><Icon prefix="fe" name="github" /></a>
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col auto={true}>
              <Button
                href="https://github.com/Chieze-Franklin/ghint-bot"
                size="sm"
                outline
                color="primary"
                RootComponent="a"
              >
                <Icon prefix="fe" name="github" />&nbsp;
                ghint bot
              </Button>
            </Grid.Col>
          </React.Fragment>
        ),
      }}
    >
      {this.props.children}
    </Site.Wrapper>);
  }
}

export default SiteWrapper;
