
const baseURL = "https://my-json-server.typicode.com/Mcklem/ReactNativeTaskManager";
const taskURL = baseURL +"/tasks";

const api = {
    tasks: {
        getTasks: () =>{
            return fetch(taskURL)
        }
    }
}
export default api;