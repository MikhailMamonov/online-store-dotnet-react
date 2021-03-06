import React from "react";
import { connect } from "react-redux";
import { logout } from "store/action-creators/auth";
import { useHistory } from "react-router-dom";
import { RootStateType } from "store";
import { Dispatch } from "redux";
import { User } from "../types/users";
import { Layout, Menu } from "antd";
const { Header } = Layout;

type Props = {
  currentUser: User | undefined;
  logout: () => void;
};

const AppHeader: React.FC<Props> = (props) => {
  const router = useHistory();
  return (
    <div>
      <Header>
        <div className="logo" />
        {props.currentUser ? (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item
              key="1"
              onClick={() => {
                router.push("admin");
              }}
            >
              Admin
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                router.push("catalog");
              }}
            >
              Catalog
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() => {
                router.push("/shopping-cart");
              }}
            >
              Shopping Cart
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={() => {
                props.logout();
                router.push("login");
              }}
            >
              Logout {props.currentUser.userName}
            </Menu.Item>
          </Menu>
        ) : (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item
              key="5"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={() => {
                router.push("register");
              }}
            >
              Register
            </Menu.Item>
          </Menu>
        )}
      </Header>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  const { currentUser } = state.auth;
  return { currentUser };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
