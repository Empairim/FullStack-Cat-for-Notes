import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCat } from "../services/cats";

function CatCreate() {
  //using useState to set the default state of a form to be an object with each feild being an empty string
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

  // this is from above used to well navigate :p
  let navigate = useNavigate();

  //this is going to prevent the page from reloading on submit and wait for a cat to be created in our db and then navigates back to the /api/cats endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCat(cat);
    navigate("/cats");
  };

  //this is object destructuring again e or know as event is a build in DOM object with key value pairs and 1 of them is target that also has a key value pair with those 2 including name value ect so when you do {name, value} youre pulling those 2 names out and assigning them their own key being their value. so name = name value = value, if you didnt it would be e.target.name using dot notation but Rahul just made it easier to re use it by assiging them variables, its also like if he did name = e.target.name for example.
  const handleChange = (e) => {
    const { name, value } = e.target;

    //The argument passed to setCat is a function that takes the previous state of the cat object as an argument. In this case, the argument is named prevCat.The function passed to setCat returns a new state object that is based on the previous state object, but with one property updated.
    // The property that is updated is determined by the name variable, which is assumed to be a string that corresponds to a property name on the cat object.
    // The value of the updated property is determined by the value variable, which is assumed to be the new value for the property
    setCat((prevCat) => ({
      ...prevCat,
      [name]: value,

      //We use the spread operator (...) to copy all the properties of the previous state object into the new object.
      //We then update the property with the given name to the new value using computed property names ([name]: value).
      //the way prevCat works is that it could be banana for example but how useState is set up under the hood it simply is assuming that if your passing a function to the setCat or setter function of something you used useState() on then you MUST want a previous state to be used. Ik weird but its just under the hood assumption. and if you pass just an object to it that well update state for example an api call when we do something like setCat(res.data) its putting a new object in state :D
    }));
  };

  return (
    <div>
      <h1>Add a cute cat in our Database!</h1>
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
        <button type="submit">Create Your Cat!</button>
      </form>
    </div>
  );
}

export default CatCreate;
