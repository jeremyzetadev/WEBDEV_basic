import user from "../model/userModel.js"

export const createUser = async(req,res)=>{
    try{
        const userData = new user(req.body);
        const {email} = userData;
        const userExist = await user.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser);
    } catch(error){
        res.status(500).json({error:"Internal Server error."})
    }
};

export const getAllUsers = async(req,res)=>{
    try{
        const users = await user.find();
        if(users.length===0){
            return res.status(404).json({message:"User Not Found"})
        }
        return res.status(200).json(users);
    } catch(error){
        res.status(500).json({error:"Internal Server error."})
    }
};

export const updateUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message:"User Not Found!"});
        }
        const updateUser = await user.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json({updateUser});
    } catch(error){
        res.status(500).json({error:"Internal Server error."})
    }
};

export const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message:"User Not Found!"});
        }
        await user.findByIdAndDelete(id);
        res.status(201).json({message:"User deleted successfully!"});
    } catch(error){
        res.status(500).json({error:"Internal Server error."})
    }
}