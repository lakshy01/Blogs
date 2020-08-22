
import blog from '../api/blog';

export const fetchBlogs = () => async dispatch => {
    const response = await blog.get('/blog');
    dispatch({ type: 'FETCH_BLOGS', payload: response.data });
};

