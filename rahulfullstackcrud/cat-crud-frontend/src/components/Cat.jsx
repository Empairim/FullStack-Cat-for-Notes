import { Link } from "react-router-dom";
//link from router dom so you can move to other pages
function Cat({ cat }) {
  // this is a prop but prop is an object and its being destuctured and pulling the name cat out of it that way you can do cat.name image ect instead of props.cat.name but either way works
  return (
    <div>
      <Link to={`/cats/${cat._id}`}>
        <img className="cat-images" src={cat.image} alt={cat.name} />
      </Link>
    </div>
  );
}

export default Cat;
