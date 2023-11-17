import api from "../services/api";

/**
 * Transforms full api task object into concrete and reliable app task object
 * @param {*} apiTask 
 * @returns 
 */
function adaptAPITaskToAPPTask(apiTask){
    return {
        id: apiTask.id,
        title: apiTask.title,
        shortDescription: apiTask.shortDescription,
        startTime: apiTask.startTime,
        endTime: apiTask.endTime,
        priority: apiTask.priority,
        status: apiTask.status,
        comment: apiTask.comments, //e.g remap comments to comment
        owner: apiTask.creator, //e.g remap creator to owner
        //e.g ignore project and other properties
    }
}

/**
 * Transforms app task object into concrete and reliable api task object
 * @param {*} appTask 
 * @returns 
 */
function adaptAPPTaskToAPITask(appTask){
    return {
        id: appTask.id,
        title: appTask.title,
        shortDescription: appTask.shortDescription,
        startTime: appTask.startTime,
        endTime: appTask.endTime,
        priority: appTask.priority,
        status: appTask.status,
        comments: appTask.comment, //e.g remap comments to comment
        creator: appTask.owner, //e.g remap creator to owner
        //e.g ignore project and other properties -> APP wont work with non required properties
    }
}

const ApiAdapter = {
    getTasks: async () => {
        try {
            const response = await api.getTasks();
            let data = await response.json();
            if(data!=null){
                data = data.map((element)=>adaptAPITaskToAPPTask(element));
            }
            return data;
        }
        catch (error) {
            console.error('Error fetching tasks:', error);
            throw error;
        }
    },
    setTask: async (task) => {
        try {
            const response = await api.setTask(adaptAPPTaskToAPITask(task));
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    },
    updateTask: async (task) => {
        try {
            const response = await api.updateTask(adaptAPPTaskToAPITask(task));
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Error updating task:', error);
            throw error;
        }
    },
    deleteTask: async (task) => {
        try {
            const response = await api.deleteTask(adaptAPPTaskToAPITask(task));
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Error deleting task:', error);
            throw error;
        }
    },
};

export default ApiAdapter;