import User from "../models/user.js";

export async function getUser(req, res) {

    try {
        const userList = await User.find();
        res.json({
            list: userList
        })
    } catch (error) {
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
    } catch (error) {
        res.json({
            message: "User creation failed"
        })
    }
}

export async function updateUser(req, res) {

    const { firstName } = req.params; 
    const updatedData = req.body; 
  
    try {
      const user = await User.findOneAndUpdate(
        { firstName }, 
        updatedData, 
        { new: true } 
      );
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({
        message: "User updated successfully",
        updatedUser: user,
      });
    } catch (error) {
      console.error("Error updating user:", error); 
      res.status(500).json({
        message: "User update failed",
        error: error.message,
      });
    }
}
   
  export async function deleteUser(req, res) {
    
    try {
      const { firstName } = req.params;
  
      const result = await User.deleteMany({ firstName });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User(s) deleted successfully" });
    } catch (error) {
      console.error("Error deleting user(s):", error);
      res.status(500).json({ message: "User deletion failed", error: error.message });
    }
}                                                         