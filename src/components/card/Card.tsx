import { FC } from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./card.module.css";
import { deletePost, likePost } from "../../service/slice/slice";
import { IPost } from "../../utils/type/type";

const Card: FC<IPost> = ({ title, body, like, img, id }) => {
  const dispatch = useDispatch();

  const handleButtonLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(likePost(id));
  }

  const handleButtonDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deletePost(id));
  }

  return (
    <li className={style.card}>
      <Link className={style.block} to={`/post/${id}`}>
        <img className={style.img} src={img} alt="фото профиля" />
        <div className={style.block__text}>
          <h2 className={style.title}>{title}</h2>
          <p className={style.text}>{body}</p>
        </div>
        <div className={style.block__button}>
          <button
            onClick={handleButtonLike}
            className={`${style.button__like} ${like ? style.button__like_active : null}`}>
          </button>
          <button
            onClick={handleButtonDelete}
            className={style.button__delete}
          ></button>
        </div>
      </Link>
    </li>
  );
};

export default Card;
