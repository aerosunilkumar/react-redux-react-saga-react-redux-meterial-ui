import * as types from "../actions/types";
import initialState from "./initialState";

export default (state = initialState.dashboardData, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_STARTED:
      return {
        ...state,
        isLoading: true,
        todoList: [],
        fetchTodoListError: undefined,
      };
    case types.FETCH_TODOS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        todoList: action.payload,
        fetchTodoListError: undefined,
      };
      case types.FETCH_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        todoList: [],
        fetchTodoListError: action.payload,
      };
    default:
      return state;
  }
};
