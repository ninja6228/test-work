import { FC, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import style from "./postsPage.module.css";
import { IPost, RootState } from "../../utils/type/type";

const PostsPage: FC = () => {
  const posts: IPost[] = useSelector((state: RootState) => state.posts.data);
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  const selectedPosts = filter ? posts.filter((post) => post.like === true) : posts;

  return (
    <section className={style.page}>
      <div className={style.block__button}>
        <button
          onClick={handleFilter}
          className={style.buttonFilter}>
          {filter ? 'Избранные' : 'Все посты'}
        </button>
      </div>
      <ul className={style.block__cards}>
        {!selectedPosts.length 
        ? (<h2>Пока постов нет</h2>) 
        : (selectedPosts.map((post) => <Card {...post} key={post.id} />))
        }
      </ul>
    </section>
  );
};

export default PostsPage;
