const fs = require('fs');

const colors = require('colors');

let toDoList = [];


const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err)
            throw new Error(err);

    });
}

const loadData = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }

}

const create = (description) => {

    loadData();
    let toDo = {
        description,
        complete: false
    };

    toDoList.push(toDo);
    saveDB();
    return toDo;
}

const getList = () => {
    loadData();
    return toDoList;
}

const update = (description, complete = true) => {
    loadData();
    let index = toDoList.findIndex(work => work.description === description);

    if (index >= 0) {
        toDoList[index].complete = complete;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteWork = (description) => {
    loadData();
    let lengthBefore = toDoList.length;
    toDoList = toDoList.filter(work => work.description != description);
    if (toDoList.length < lengthBefore) {
        saveDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    create,
    getList,
    update,
    'delete': deleteWork
}