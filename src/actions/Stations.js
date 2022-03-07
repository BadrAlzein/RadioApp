import * as api from "./../api/Stations";

export const get = () => async (dispatch) => {
  try {
    await api.get(dispatch);
  } catch (error) {
    console.log(error.message);
  }
};
