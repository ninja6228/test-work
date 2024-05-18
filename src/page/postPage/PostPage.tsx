import { FC, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./postPage.module.css";
import { likePost } from "../../service/slice/slice";
import Spiner from "../../components/spiner/Spiner";
import { IPost, RootState } from "../../utils/type/type";

const PostPage: FC = () => {
  const dispatch = useDispatch();
  const posts: IPost[] = useSelector((state: RootState) => state.posts.data);
  const params = useParams<{ id: string }>();
  const postId = params.id ? +params.id : null;

  const curentPost: IPost | undefined = useMemo(() => {
    if (postId) {
      return posts.find((post) => post.id === postId);
    }
    return undefined
  }, [postId, posts])

  if (!postId) {
    console.log('Такого поста нет');
    return null;
  }

  if (!curentPost) {
    return <Spiner />;
  }

  const handleButtonLike = () => {
    dispatch(likePost(postId))
  }

  const { title, body, img, like } = curentPost;

  return (
    <section className={style.card}>
      <div className={style.block__img}>
        <Link className={style.link} to={"/"}>
          <button className={style.link__img} />
          <p className={style.link__text}>назад</p>
        </Link>
        <img className={style.img} src={img} alt="фото профиля" />
      </div>
      <div className={style.block__text}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{body}</p>
      </div>
      <button
        onClick={handleButtonLike}
        className={`${style.like__buttom} ${like ? style.like__buttom_active : null}`}
      ></button>
    </section>
  );
};

export default PostPage;
