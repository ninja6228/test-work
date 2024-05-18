import { useEffect, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./app.module.css";
import { useGetPostsQuery } from "../../service/api/api";
import { savePost } from "../../service/slice/slice";
import PostsPage from "../../page/postsPage/PostsPage";
import PostPage from "../../page/postPage/PostPage";
import Spiner from "../spiner/Spiner";

const App: FC = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetPostsQuery();

  useEffect(() => {
    if (data) {
      dispatch(savePost(data));
    }
  }, [data, dispatch]);

  return (
    <div className={style.app}>
      {isLoading ? (
        <Spiner />
      ) : (
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
