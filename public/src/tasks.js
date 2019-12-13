import axios from 'axios';

const url = "http://localhost:5000/v1/todos/";

class tasks {
    static getPosts() {
        return new Promise (async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data= res.data.data;
                resolve(data.map(task => ({
                    ...task,
                    createdAt: new Date(task.createdAt)
                }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }

    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default tasks;