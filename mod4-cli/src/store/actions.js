import axios from 'axios'

export default{
    async getPostsAction({commit}){
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts?_limit=5'
        )
        commit('getPosts' , response.data);
    },
    async addPostAction({commit} , post){
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/posts', post
        )
        commit('insertPost' , response.data);
    }
}