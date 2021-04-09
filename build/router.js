/**
 * created by lixingyang
 * on 2020/11/5
 *
 */   
import React from "react";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import HomeIndex from "./home";
import CartIndex from "./cart";     
import MineIndex from "./mine";
import SortIndex from "./sort";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul className="router-navs">
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/sort">sort</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/mine">mine</Link>
          </li>
        </ul>
        <div>
          {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
          <Switch>
            {/* exact */}
            <Route path="/home" component={HomeIndex} />
            <Route exact path="/sort" component={SortIndex} />
            <Route exact path="/cart" component={CartIndex} />
            <Route exact path="/mine" component={MineIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
