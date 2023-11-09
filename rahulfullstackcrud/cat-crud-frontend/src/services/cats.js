import api from "./apiConfig.js";

//this mirrors the backend its a way to set up like "routes" in backend it allows for code to be simple and easy to understand and keep the code "dry". this is pretty much all the end points and Rahul just exported them so that you can reference to the api call using the function name like getCats or createCat ect rather than typing out the logic for the api calls in the components themselves

export const getCats = async () => {
  try {
    const response = await api.get("/cats");
    return response.data;
  } catch (error) {
    console.error("Error: Getting all Cats: ", error);
  }
};

export const getCat = async (id) => {
  try {
    const response = await api.get(`/cats/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting one Cat: ", error);
  }
};

export const createCat = async (catData) => {
  try {
    const response = await api.post("/cats", catData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCat = async (id, catData) => {
  try {
    const response = await api.put(`/cats/${id}`, catData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCat = async (id) => {
  try {
    const response = await api.delete(`/cats/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
