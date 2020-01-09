import axios from 'axios'

let url = 'http://localhost:5000/v1/todos/'

class TodosService {
  static getTodos() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data.todos
        resolve(
          data.map(task => ({
            ...task,
            editing: false,
            beforeEditName: '',
            beforeEditDesc: ''
          }))
        )
      } catch (err) {
        reject(err.message)
      }
    })
  }

  static insertPost(todo) {
    return axios.post(url, {
      name: todo.name,
      description: todo.description,
      priority: parseInt(todo.priority)
    })
  }

  static deletePost(id) {
    return axios.delete(`${url}${id}`)
  }

  static updateTodo(id, text) {
    return axios.put(`${url}${id}`, text)
  }
}

export default TodosService
