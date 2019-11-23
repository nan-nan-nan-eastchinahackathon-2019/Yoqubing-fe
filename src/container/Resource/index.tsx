import React from "react";
import styles from "./index.module.less";
import { RouteComponentProps } from "react-router";

import Frame from "../../component/Frame";

class Resource extends React.Component<RouteComponentProps, any> {
  render() {
    return (
      <Frame WrappedComponent={
        <div>
          资源
        </div>
      } />
    );
  }
}

export default Resource;