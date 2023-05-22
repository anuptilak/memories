import axios from 'axios';


const url = "http://localhsot:4000/posts";

export const fetchPosts = () => axios.get(url);