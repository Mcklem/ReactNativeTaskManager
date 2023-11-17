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
        creator: apiTask.creator, //e.g remap creator to owner
        asignedTo: apiTask.asignedTo
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
        creator: appTask.creator, //e.g remap creator to owner
        asignedTo: appTask.asignedTo
        //e.g ignore project and other properties -> APP wont work with non required properties
    }
}

const TaskAdapter = {
    getTasks: () => {
            return api.tasks.getTasks()
            .then(response => response.json())
            .then((json)=>{
                
                let data = json;
                if(data!=null){
                    data = data.map((element)=>adaptAPITaskToAPPTask(element));
                }
                return data;
            })
    },
    setTask: (task) => {
        try {
            return api.setTask(adaptAPPTaskToAPITask(task))
            .then(response => response.json())
        }
        catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    },
    updateTask: (task) => {
        try {
            return api.updateTask(adaptAPPTaskToAPITask(task))
            .then(response => response.json())
        }
        catch (error) {
            console.error('Error updating task:', error);
            throw error;
        }
    },
    deleteTask: (task) => {
        try {
            return api.deleteTask(adaptAPPTaskToAPITask(task))
            .then(response => response.json())
        }
        catch (error) {
            console.error('Error deleting task:', error);
            throw error;
        }
    },
};

export default TaskAdapter;