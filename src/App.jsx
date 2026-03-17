import { useState } from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";

import PostList from "./features/post/PostList";
import AddPostForm from "./features/post/AddPostForm";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
