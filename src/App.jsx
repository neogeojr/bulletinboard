import { useState } from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";

import PostList from "./features/post/PostList";
import AddPostForm from "./features/post/AddPostForm";
import { fetchUsers } from "./features/users/usersSlice.jsx";

import "./App.css";

store.dispatch(fetchUsers());

function App() {
  return (
    <div>
      <Provider store={store}>
        <AddPostForm />
        <PostList />
      </Provider>
    </div>
  );
}

export default App;
