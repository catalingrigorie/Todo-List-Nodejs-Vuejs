import axios from 'axios';

const url = "http://localhost:5000/v1/todos/";

class todosService {
    static getTodos() {
        return new Promise (async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data.todos;
                resolve(data);
            } catch (err) {
                reject(err);
            }
        });
    }

    static insertPost(todo) {
        return axios.post(url, {
            name: todo.name,
            description: todo.description,
            priority: parseInt(todo.priority)
        });
    }

    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

    static editPost(id, text) {
        return axios.put(`${url}${id}`, text);
    }
}

export default todosService;