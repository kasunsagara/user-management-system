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

    const firstName = req.params.firstName;

    try {
        const userList = await User.find({firstName: firstName});
        if(userList.length === 0) {
            res.json({
                message: "User not found"
            });
        } else {
            res.json({
                list: userList
            });
        }
    } catch (e) {
        res.json({
            message: "User fetch failed"
        });
    }
}

export async function createUser(req, res) {

    const user = new User(req.body);

    try {
        await user.save();
        res.json({
            message: "User created successfully"
        })
    } catch (e) {
        res.json({
            message: "User creation failed"
        })
    }
}

export async function updateUser(req, res) {

    try {
        await User.updateOne({firstName: req.params.firstName});
        res.json({
            message: "User updated successfully"
        })
    } catch (e) {
        res.json({
            message: "User update failed"
        })
    }
}

export async function deleteUser(req, res) {

    try {
        await User.deleteOne({firstName: req.params.firstName});
        res.json({
            message: "User deleted successfully"
        })
    } catch (e) {
        res.json({
            message: "User deletion failed"
        })
    }
}
