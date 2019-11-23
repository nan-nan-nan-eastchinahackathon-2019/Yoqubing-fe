import React from "react";
import styles from "./index.module.less";
import { RouteComponentProps } from "react-router";

import Frame from "../../component/Frame";

class Order extends React.Component<RouteComponentProps, any> {
  render() {
    return (
      <Frame WrappedComponent={
        <div>
          跑腿
        </div>
      } />
    );
  }
}

export default Order;