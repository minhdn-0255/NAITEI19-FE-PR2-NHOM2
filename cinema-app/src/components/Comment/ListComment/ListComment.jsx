import { getComments } from "../../../services/commentServices";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommentUnit from "./CommentUnit/CommentUnit";
export default function ListComment() {
  const filmId = useSelector((state) => state.film.currentFilm.id);
  const [page, setPage] = useState(1);
  const [listComment, setListComment] = useState([]);
  const limit = 5;
  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await getComments(limit, page, filmId);
        setListComment(res.DT.rows);
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, []);
  return (
    <>
      <section className="list__comment">
        {listComment &&
          listComment?.map((comment, index) => (
            <CommentUnit key={index} comment={comment} />
          ))}
      </section>
    </>
  );
}
