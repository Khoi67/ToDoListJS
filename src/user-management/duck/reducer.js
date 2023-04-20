import data from "./../data.json";

const initialState = {
  userList: data,
  keyword: "",
  editedUser: null,

};

const userReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "DELETE_USER": {
      const userList = [...state.userList];
      const index = userList.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        //xoá phần tử tìm thấy
        userList.splice(index, 1);
      }
      //Cập nhật lại state
      state.userList = userList;

      return { ...state };
    }

    case "SEARCH_USER": {
      state.keyword = action.payload;
      return { ...state };
    }

    case "SUBMIT_USER": {
      const userList = [...state.userList];
      if(action.payload.id){
        //Update
        const index = userList.findIndex(
          (user) =>user.id === action.payload.id);
        if(index!==-1){
          userList[index] = action.payload;
        }
      }else{
        //Add
        const user = { ...action.payload, id: new Date().getTime() };
        userList.push(user);
      }

      state.userList = userList;
      return { ...state };
    }

    case "EDITED_USER":{
      state.editedUser = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
