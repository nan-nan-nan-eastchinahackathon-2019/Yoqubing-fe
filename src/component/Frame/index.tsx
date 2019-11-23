import React from "react";
import styles from "./index.module.less";
import { Row, Col } from "antd";

import Navigator from "../Navigator";

export default function Frame(props: {WrappedComponent: any}) {
  return (
    <div className={styles.whole}>
      <div className={styles.container}>
        <Navigator />
        <div className={styles.content}>
          123
        </div>
      </div>
    </div>
  );
}