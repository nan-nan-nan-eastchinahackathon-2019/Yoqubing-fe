import React from "react";
import styles from "./index.module.less";
import { RouteComponentProps } from "react-router";

import Frame from "../../component/Frame";
import store from "../../store";
import { getInfoList, InfoList } from "../../service/InfoAPI";
import { getInfoListAction } from "../../action/InfoAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import unixToDate from "../../utiliy/date";
import { Icon } from "antd";

class Wall extends React.Component<{getInfoListAction: Function} & RouteComponentProps, {infos: InfoList[], id: number}> {
  constructor(props: any) {
    super(props);
    store.subscribe(() => {
      this.setState({...this.state, infos: store.getState().InfoReducer.infos});
    });
    getInfoList().then((res: any) => {
      if (res.code === 0) {
        this.props.getInfoListAction({infos: res.data.infos});
      }
    });
  }
  handleClick = (id: number) => {
    this.setState({...this.state, id: id});
  }
  render() {
    console.log(this.state);
    return (
      <Frame WrappedComponent={
        <div className={styles.whole}>
          {this.state && this.state.infos ? this.state.infos.map((item: InfoList, index: number) => {
            return (
              <div className={`${styles.defaultBox}  ${styles.infoBox} ${this.state.id === index ? styles.viewing : ""}`} key={index} onClick={this.handleClick.bind(this, index)}>
                {/* {this.state.id === index ? <Icon type="left-circle" className={styles.close} style={{fontSize: "3em", marginBottom: ".5em", cursor: "pointer"}} onClick={this.handleClick.bind(this, -1)} /> : ""} */}
                <div className={styles.title}>{item.title}</div>
                <div className={styles.time}>{unixToDate(item.createtime)}</div>
                <div className={styles.content}>{item.content.length > 20 && this.state.id !== index ? item.content.substr(0, 20) + ".." : item.content}</div>
              </div>
            );
          }) : ""}
        </div>
      } />
    );
  }
}

const mapStateToProps = (state : any) => {
  return {};
}

const mapDispatchToProps = (dispatch : any) => {
  return {
    getInfoListAction: bindActionCreators(getInfoListAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall);