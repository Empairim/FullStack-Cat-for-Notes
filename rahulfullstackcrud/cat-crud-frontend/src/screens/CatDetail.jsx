import { useState, useEffect } from "react";
import { getCat, deleteCat } from "../services/cats";
import { Link, useParams, useNavigate } from "react-router-dom";

function CatDetail() {
  //setting up cats with an object literal or empty obejct since we know the data being stored in it is going to be an object based on our backend
  const [cat, setCat] = useState({});

  //destructuring again the use params return object with a key named id in it and were just destruturing it out of it and naming it, its value its the same as doing let id = req.params.id ect.
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    //use effects take 2 things function and array dependency
    fetchCat();
  }, []);

  //api call
  async function fetchCat() {
    const oneCat = await getCat(id);
    setCat(oneCat);
  }

  //api call to deletee a cat with matching id
  async function handleDelete() {
    await deleteCat(id);
    //then after the awiat is finished navigate automatically to the /api/cats/ endpoint
    navigate("/cats");
  }

  //the useState
  return (
    <div>
      <h1>Hello, I'm {cat.name}</h1>
      <h2>{cat.aka}</h2>
      <img src={cat.image} alt={cat.name} />
      <p>{cat.age}</p>
      <p>{cat.gender}</p>
      <p>{cat.species}</p>
      <p>{cat.bio}</p>
      {cat.likesCuddles ? (
        <p>I love me some cuddles!</p>
      ) : (
        <p>Get the heck away from me!</p>
      )}
      <div>
        <Link to={`/cats/${id}/edit`}>
          <button>Edit Cat</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default CatDetail;
