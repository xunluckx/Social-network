const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It`s my first post', likesCount: 11 },
    { id: 3, message: '121121121', likesCount: 11 },
    { id: 4, message: '1412414124', likesCount: 11 },
    { id: 4, message: '1412414124', likesCount: 11 },
  ],
  newPostText: 'text',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [...state.posts, newPost], newPostText: '' };
    }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
