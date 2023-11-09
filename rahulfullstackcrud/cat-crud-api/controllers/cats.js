import Cat from "../models/Cat.js";

//GET all cats
export const getCats = async (req, res) => {
  try {
    let cats = await Cat.find();
    res.json(cats);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
//GET cats by id
export const getCat = async (req, res) => {
  try {
    const { id } = req.params;
    const cat = await Cat.findById(id);

    if (cat) {
      return res.json(cat);
    }

    res.status(404).json({ message: "Cat not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// POST new cat
export const createCat = async (req, res) => {
  const cat = new Cat(req.body);
  await cat.save();
  res.status(201).json(cat);
};
//PUT new data into exisiting cat
export const updateCat = async (req, res) => {
  const { id } = req.params;
  const cat = await Cat.findByIdAndUpdate(id, req.body);
  res.status(201).json(cat);
};
//DELETE cat from db
export const deleteCat = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cat.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Cat Deleted!");
    }

    throw new Error("Cat not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
