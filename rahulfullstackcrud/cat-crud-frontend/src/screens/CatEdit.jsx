import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCat, getCat } from "../services/cats";
//using useState to set the default state of a form to be an object with each feild being an empty string
function CatEdit() {
  const [cat, setCat] = useState({
    name: "",
    aka: "",
    age: "",
    gender: "",
    species: "",
    bio: "",
    image: "",
    likesCuddles: true,
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchCat();
  }, []);
  //api call to get cat with matching id and then putting that object in the useState object
  async function fetchCat() {
    const oneCat = await getCat(id);
    setCat(oneCat);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editCat(id, cat);
    navigate(`/cats/${id}`);
  };
  //handling the changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCat((prevCat) => ({
      ...prevCat,
      [name]: value,
      ////We use the spread operator (...) to copy all the properties of the previous state object into the new object.
      //We then update the property with the given name to the new value using computed property names ([name]: value).
      //the way prevCat works is that it could be banana for example but how useState is set up under the hood it simply is assuming that if your passing a function to the setCat or setter function of something you used useState() on then you MUST want a previous state to be used. Ik weird but its just under the hood assumption. and if you pass just an object to it that well update state for example an api call when we do something like setCat(res.data) its putting a new object in state :D
    }));
  };

  return (
    <div>
      <h1>Edit your cute cat in our Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add your cat's name"
          name="name"
          value={cat.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nickname"
          name="aka"
          value={cat.aka}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={cat.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cat's gender"
          name="gender"
          value={cat.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cat's Bio"
          name="bio"
          value={cat.bio}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cat's Species"
          name="species"
          value={cat.species}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add your cat's cute photo"
          name="image"
          value={cat.image}
          onChange={handleChange}
        />
        <button type="submit">Edit Your Cat!</button>
      </form>
    </div>
  );
}

export default CatEdit;
