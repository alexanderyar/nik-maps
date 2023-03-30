import axios from "axios";

export const getDatabase = async () => {
  try {
    const response = await axios.get("/db.json");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getElementById = async (id) => {
  try {
    const database = await getDatabase();
    const elementbyId = database.find((element) => element.id === id);
    return elementbyId;
  } catch (error) {
    console.log(error);
  }
};
