import bcrypt from "bcrypt";
import prisma from "../DB/db.config.js";
import getTimeStamp from "../timeStamp.js";
import logResponseTime from "./Log.js";

//* Fetch Singale User
export const fetchSingleUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const singleUser = await prisma.user.findFirst({
      where: {
        id: Number(userId),
      },
      include: {
        post: {
          select: {
            title: true,
            comment: true,
          },
        },
      },
    });
    if (!singleUser) {
      res.json({ status: "failed", message: "User Not Found" });
    }
    logResponseTime(req, res);
    res.json({ status: 200, data: singleUser });
  } catch (err) {
    console.log(err);
  }
};

//*Fetch All User
export const fetchUser = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      // include:{
      //   _count:{
      //     select:{
      //       post:true,
      //       comment:true
      //     }
      //   }
      // }
    }); //it is return all users in array
    logResponseTime(req, res);
    res.json({ status: 200, data: allUsers });
  } catch (err) {
    console.log("Fech all user Error=", err.message);
  }
};

//*Create User
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; //destructuring
    if(name !=null && email!=null && password!=null){
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) {
      return res.json({
        status: 400,
        message: "Email Already Taken,Please Anther Email.",
      });
    }
    //* For password Security
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(password, salt);

      const newUser = await prisma.user.create({
        data: {
          // name:name,
          // email:email,
          // password:securePassword,
          // created_at:getTimeStamp()
          //OR
          name,
          email,
          password: securePassword,
          created_at: getTimeStamp(new Date()),
        },
      });
    logResponseTime(req, res);
    //return res.json({status: 200,data: newUser,message: "New User Created"});
    return res.redirect("/"); 
  }else return res.json({status:"failed",message:"All field are required!!"});
  } catch (err) {
    console.log("User Created Error=", err.message);
  }
};

//*Update User
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id; //return string
    const { name, email, password } = req.body;

    //* For password Security
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(password, salt);

    await prisma.user.update({
      where: {
        id: Number(userId), //id converted to number
      },
      data: {
        name,
        email,
        password:securePassword,
      },
    });
    logResponseTime(req, res);
    res.json({ status: 200, message: "User updated successfully" });
  } catch (err) {
    console.log("User updated Error=", err.message);
  }
};

//* Delete User

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    });
    res.json({ status: 200, message: `ID Number${userId} is Deleted` });
  } catch (err) {
    console.log("User Deleted Error=", err.message);
  }
};
