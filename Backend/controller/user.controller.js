import { User } from "../model/User.model.js";

const registeruser= async (req, res) => {
   try {
    const user=await User.create(req.body);
    console.log(user)
    return res.status(201).json({ user, message: "successful" });

   } catch (error) {
    console.log(error);
    return res.status(500).json({message:"error in creating the user"})
   }
 };
 const loginuser= async(req,res)=>{
  const { email, password } = req.body;
      console.log(req.body);
    // Find user by email

   try {
    const user = await User.findOne({email});

    // Check if user exists
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Check if password is correct (In a real application, you would compare hashed passwords)
    if (user.password !== password) {
       return res.status(401).json({ message: "Invalid password" });
    }

    // Successful login
    return res.json({ message: "Login successful" ,user});
   } catch (error) {
    console.log("error occured in loggining");
    return res.status(500).json({message:"error ocuured in logged in ",ok:false})
   }
 }
 
 export {registeruser,loginuser};