export const deleteHabit = (e, dispatch, id) => {
  e.stopPropagation();
  dispatch({ type: "DELETE_HABBIT", payload: id });
};

export const updateHabit = (e, dispatch, id, data) => {
  dispatch({ type: "UPDATE_HABBIT", payload: { id, data } });
};

export const addHabit = (dispatch, data) => {
  dispatch({ type: "ADD_HABBIT", payload: data });
};

// export const moveToArchive = ()
