import React from "react";
import styles from "./index.module.less";
import { RouteComponentProps } from "react-router";

import Frame from "../../component/Frame";
import store from "../../store";
import { getOrderList, publishOrder, BriefOrder, FullOrder, getMyOrderList, acceptOrder } from "../../service/OrderAPI";
import { getOrderListAction, publishOrderAction, getMyOrderListAction } from "../../action/OrderAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import unixToDate, { secToHour } from "../../utiliy/date";
import { Icon, Spin, Input, Button, message } from "antd";

class Wall extends React.Component<{getOrderListAction: Function, getMyOrderListAction: Function, publishOrderAction: Function} & RouteComponentProps, {my: FullOrder[], other: BriefOrder[], id: number}> {
  tuijiandu : number[] = [];
  constructor(props: any) {
    super(props);
    store.subscribe(() => {
      this.setState({...this.state, other: store.getState().OrderReducer.other, my: store.getState().OrderReducer.my});
    });
    this.refresh();
  }
  refresh = () => {
    getOrderList().then((res: any) => {
      if (res.code === 0) {
        this.tuijiandu = [];
        res.data.orders.map((item: any, index: number) => { this.tuijiandu.push(Math.floor((Math.random() * 5) + 1)); });
        this.props.getOrderListAction({orders: res.data.orders});
      }
    });
    getMyOrderList().then((res: any) => {
      if (res.code === 0) {
        this.props.getMyOrderListAction({orders: res.data.orders});
      }
    });
  }
  handleClick = (id: number) => {
    this.setState({...this.state, id: id});
  }
  handleAccept = (id: number) => {
    acceptOrder({id: id}).then((res: any) => {
      if (res.code === 0) {
        message.success("接取成功！");
      }
    });
  }
  render() {
    const inputStyle = {
      width: "100%",
      marginTop: ".5em"
    };
    let component;
    if (!this.state) component = <div className={styles.whole}><Spin size="large" /></div>;
    else component = (
      <div className={styles.whole}>
        {this.state.other ? this.state.other.map((item: BriefOrder, index: number) => {
          return (
            <div className={`${styles.defaultBox} ${styles.orderBox} ${this.state.id === index ? styles.viewing : ""}`} key={index} onClick={this.handleClick.bind(this, index)}>
              <div className={styles.title}>{"[" + this.tuijiandu[index] + "][" + item.gift + "元]" + item.title}</div>
              <div className={styles.time}>{this.state.id === index ? "发布时间：" : ""}{unixToDate(item.createtime)}</div>
              {this.state.id === index ? <div className={styles.time}>截止时间：{unixToDate(item.deadline)}</div> : ""}
              {this.state.id === index ? <div className={styles.time}>预计耗时：{secToHour(item.lasting)}</div> : ""}
              {this.state.id === index ? <div className={styles.time}>类型：{item.type}</div> : ""}
              <div className={styles.content}>{item.content.length > 20 && this.state.id !== index ? item.content.substr(0, 20) + ".." : item.content}</div>
              {this.state.id === index ? <div className={styles.name}>发布人：{item.name} ， 信誉分：{item.score}</div> : ""}
              {this.state.id === index ? <div className={styles.time}>预计花费：{item.money} 元</div> : ""}
              {this.state.id === index ? 
                <Button type="primary" htmlType="submit" style={inputStyle} onClick={this.handleAccept.bind(this, item.id)}>接取订单</Button>
              : ""}
            </div>
          );
        }) : ""}
      </div>
    );
    return (<Frame WrappedComponent={component} />);
  }
}

const mapStateToProps = (state : any) => {
  return {};
}

const mapDispatchToProps = (dispatch : any) => {
  return {
    getOrderListAction: bindActionCreators(getOrderListAction, dispatch),
    getMyOrderListAction: bindActionCreators(getMyOrderListAction, dispatch),
    publishOrderAction: bindActionCreators(publishOrderAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall);