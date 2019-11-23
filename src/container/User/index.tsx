import React from "react";
import styles from "./index.module.less";
import { RouteComponentProps } from "react-router";

import Frame from "../../component/Frame";
import Login from "./Login";

class User extends React.Component<RouteComponentProps, any> {
  render() {
    if (!window.localStorage.session) this.props.history.push("/user/login");
    const component = (
      <div className={styles.whole}>
        
      </div>
    );
    return <Frame WrappedComponent={component} />;
  }
}

export default User;