const apiBase = 'http://practiceapi.devmountain.com';

function* getToDoListAPI() {
    const result = yield fetch(`${apiBase}/api/tasks`)
        .then(res => res.json())
    return yield result;
}

function* addToDoItemAPI(todoItem) {
    return yield fetch(`${apiBase}/api/tasks`, {
        method: 'POST',
        body: JSON.stringify(todoItem)
    });
}

function* updateToDoItemAPI(todoItem) {
    return yield fetch(`${apiBase}/api/tasks/${todoItem.id}`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoItem)
    });
}

function* deleteToDoItemAPI(todoItem) {
    return yield fetch(`${apiBase}/api/tasks/${todoItem.id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
}

function* completeToDoItemAPI(todoItem) {
    return yield fetch(`${apiBase}/api/tasks/${todoItem.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoItem)
    });
}

export const Api = {
    getToDoListAPI,
    addToDoItemAPI,
    updateToDoItemAPI,
    deleteToDoItemAPI,
    completeToDoItemAPI
}; 