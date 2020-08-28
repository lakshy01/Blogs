
import { combineReducers } from 'redux';
import BlogReducer from './BlogReducer';
import selectedBlogReducer from './SelectedBlog';
import UserBlogs from './UserBlogs';

export default combineReducers({
    blogs: BlogReducer,
    selectedBlog: selectedBlogReducer,
    userBlogs: UserBlogs
});