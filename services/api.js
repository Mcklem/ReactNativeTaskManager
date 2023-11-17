
const baseURL = "https://my-json-server.typicode.com/Mcklem/ReactNativeTaskManager";

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

const defaultRequestConfiguration = {
    GET: {
        method: 'GET',
        headers: defaultHeaders
    },
    POST: {
        method: 'POST',
        headers: defaultHeaders
    },
    PUT: {
        method: 'PUT',
        headers: defaultHeaders
    },
    DELETE: {
        method: 'DELETE',
        headers: defaultHeaders
    }
}

const api = {
    tasks: {
        getTasks: async () => {
            return fetch(baseURL + "/tasks", {...defaultRequestConfiguration.GET})
        },
        setTask: async (task) => {
            return fetch(baseURL + "/tasks", {...defaultRequestConfiguration.POST, body: task})
        },
        updateTask: async (task) => {
            const id = task.id;
            return fetch(taskURL + "/tasks/" + id, {...defaultRequestConfiguration.PUT, body: task})
        },
        deleteTask: async (task) => {
            const id = task.id;
            return fetch(taskURL+ "/tasks/" + id, {...defaultRequestConfiguration.DELETE})
        }
    }
}
export default api;