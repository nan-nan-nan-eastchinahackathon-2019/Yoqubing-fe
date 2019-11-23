import React from "react";
import { Route } from "react-router-dom";

import Main from "../container/Main";
import Resource from "../container/Resource";
import Order from "../container/Order";
import User from "../container/User";
import Wall from "../container/Wall";

export default [
  <Route component={ Main } exact path="/" />,
  <Route component={ User } exact path="/user" />,
  <Route component={ User } exact path="/user/:pos" />,
  <Route component={ Wall } exact path="/wall" />,
  <Route component={ Resource } exact path="/resource" />,
  <Route component={ Order } exact path="/order" />
];