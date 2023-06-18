export const deleteHabit = (e, dispatch, id) => {
  e.stopPropagation();
  dispatch({ type: "DELETE_HABBIT", payload: id });
};

export const updateHabit = (dispatch, id, data) => {
  dispatch({ type: "UPDATE_HABBIT", payload: { id, data } });
};

export const addHabit = (dispatch, data) => {
  dispatch({ type: "ADD_HABBIT", payload: data });
};

export const moveToArchive = (dispatch, id, data) => {
  dispatch({ type: "MOVE_TO_ARCHIVE", payload: { id, data } });
};
