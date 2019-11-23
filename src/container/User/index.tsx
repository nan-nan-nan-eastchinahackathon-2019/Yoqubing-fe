import React from "react";
import styles from "./index.module.less";
import { RouteComponentProps } from "react-router";

import Frame from "../../component/Frame";
import Login from "./Login";

class User extends React.Component<RouteComponentProps, any> {
  render() {
    let component = (
      <div>
        个人
      </div>
    );
    if (!window.localStorage.session) component = <Login/>
    return (
      <Frame WrappedComponent={component} />
    );
  }
}

export default User;