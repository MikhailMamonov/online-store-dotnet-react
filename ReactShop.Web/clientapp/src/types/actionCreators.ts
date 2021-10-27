import { UsersActions } from "./users";
import { ProductsActions } from "./products";
import { AuthActions } from "./auth";
import { CategoriesActions } from "./categories";
import { ThunkAction } from "redux-thunk";
import { RootStateType } from "../store/store";
import { ShoppingCartItemsActions } from "./shoppingCart";

export type ActionTypes =
  | AuthActions
  | UsersActions
  | ProductsActions
  | CategoriesActions
  | ShoppingCartItemsActions;

export type thunkType = ThunkAction<void, RootStateType, unknown, ActionTypes>;
