import React from "react";
import styles from "./index.module.less";
import { RouteComponentProps } from "react-router";

import Frame from "../../component/Frame";

class Wall extends React.Component<RouteComponentProps, any> {
  render() {
    return (
      <Frame WrappedComponent={
        <div>
          墙墙
        </div>
      } />
    );
  }
}

export default Wall;