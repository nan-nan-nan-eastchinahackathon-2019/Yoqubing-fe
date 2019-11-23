import React from "react";
import styles from "./index.module.less";
import { RouteComponentProps } from "react-router";

import Frame from "../../component/Frame";

class User extends React.Component<RouteComponentProps, any> {
  render() {
    return (
      <Frame WrappedComponent={
        <div>
          个人
        </div>
      } />
    );
  }
}

export default User;