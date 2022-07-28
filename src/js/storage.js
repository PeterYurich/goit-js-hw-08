const saveToLocalStorage = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
};

const loadFromLocalStorage = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};

const removeFromLocalStorage = key => {
    const storageData = localStorage.getItem(key);
    if (!storageData) {
        console.log(`Local storage hasn't a key ${key}`)
    return}
    localStorage.removeItem(key);
}

export default {
    saveToLocalStorage,
    loadFromLocalStorage,
    removeFromLocalStorage
};

