import User from "../models/user.js";

export function getUser(req, res) {

    User.find()
    .then((userList) => {
        res.json({
            list: userList
        })
    }).catch(() => {
        res.json({
            message: "User fetch failed"
        })
    })  
}

export function getUserByName(req, res) {

    const name = req.params.name;

    User.find({name: name})
    .then((userList) => {
        if(userList.length == 0) {
            res.json({
                message: "User not found"
            })
        } else {
            res.json({
                list: userList
            })
        }
    }).catch(() => {
        res.json({
            message: "User fetch failed"
        })
    })  
}

export function createUser(req, res) {

    const user = new User(req.body);

    user.save()
    .then(() => {
        res.json({
            message: "User created successfully"
        })
    }).catch(() => {
        res.json({
            message: "User creation failed"
        })
    })
}

export function updateUser(req, res) {

    User.updateOne({name: req.params.name})
    .then(() => {
        res.json({
            message: "User updated successfully"
        })
    }).catch(() => {
        res.json({
            message: "User update failed"
        })
    })
}

export function deleteUser(req, res) {

    User.deleteOne({name: req.params.name})
    .then(() => {
        res.json({
            message: "User deleted successfully"
        })
    }).catch(() => {
        res.json({
            message: "User deletion failed"
        })
    })
}