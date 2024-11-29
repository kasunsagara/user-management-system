import User from "../models/user.js";

export async function getUser(req, res) {

    try {
        const userList = await User.find();
        res.json({
            list: userList
        })
    } catch {
        res.json({
            message: "User fetch failed"
        })
    }
}

export async function getUserByName(req, res) {

    const name = req.params.name;

    try {
        const userList = await User.find({name: name});
        if(userList.length == 0) {
            res.json({
                message: "User not found"
            })
        } else {
            res.json({
                list: userList
            })
        }
    } catch {
        res.json({
            message: "User fetch failed"
        })
    }
}  

export async function createUser(req, res) {

    const user = new User(req.body);

    try {
        await user.save();
        res.json({
            message: "User created successfully"
        })
    } catch {
        res.json({
            message: "User creation failed"
        })
    }
}

export async function updateUser(req, res) {

    try {
        await User.updateOne({name: req.params.name});
        res.json({
            message: "User updated successfully"
        })
    } catch {
        res.json({
            message: "User update failed"
        })
    }
}

export async function deleteUser(req, res) {

    try {
        await User.deleteOne({name: req.params.name});
        res.json({
            message: "User deleted successfully"
        })
    } catch {
        res.json({
            message: "User deletion failed"
        })
    }
}
