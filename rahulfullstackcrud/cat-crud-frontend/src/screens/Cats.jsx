import { useState, useEffect } from "react";
import { getCats } from "../services/cats.js";
import Cat from "../components/Cat.jsx";

function Cats() {
  //here we have an array literal or an empty array, we start with the cats state defualted with an empty array here unlike the others where its an object because array has special "methods" like .map() which you see below
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats();
  }, []);

  async function fetchCats() {
    const allCats = await getCats();
    //creating a new state here and storing it in the EMPTY ARRAY we created above use an array because easier method to loop through it than an object ect
    setCats(allCats);
  }

  return (
    <div>
      <h1>All the Cats!</h1>
      <div className="cats-container">
        {/* //here we can use cats.map because above we set the "cats" as an array and then when we did fetchcats and did a get method to get all cats we stored that in an array */}
        {cats.map((cat) => (
          <Cat cat={cat} />
        ))}
      </div>
    </div>
  );
}

export default Cats;
