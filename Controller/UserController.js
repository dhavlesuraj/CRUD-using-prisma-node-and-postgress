

import prisma from "../DB/db.config.js";



function getTimeStamp() {
  var dateUTC = new Date();
  dateUTC.setHours(dateUTC.getHours() + 5);
  dateUTC.setMinutes(dateUTC.getMinutes() + 30);
  console.log(typeof dateUTC);
  return dateUTC;
}


//* Fetch Singale User
export const fetchSingleUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const singleUser = await prisma.user.findFirst({
      where: {
        id: Number(userId),
      },
    });
    res.json({ status: 200, data: singleUser });
  } 
  catch (err) {
    console.log(err);
  }
};

//*Fetch All User
export const fetchUser = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      include:{
        _count:{
          select:{
            post:true,
            comment:true
          }
        }
      }
    }); //it is return all users in array

    res.json({ status: 200, data: allUsers });
  }
  catch (err) { 
    console.log("Error=", err.message);
  }
};

//*Create User
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body; //destructuring

    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) {
      return res.json({
        status: 400,
        message: "Email Alredy Taken,Plese Anather Email.",
      });
    }

    const newUser = await prisma.user.create({
      data: {
        // name:name,
        // email:email,
        // password:password
        //OR
        name,
        email,
        password,
        created_at:getTimeStamp()
        
      },
    });
    return res.json({ status: 200, data: newUser, message: "New User Created" });
  } 
  catch (err) {
    console.log("Error=", err.message);
  }
};


//*Update User
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id; //return string
    const { name, email, password } = req.body;

    await prisma.user.update({
      where: {
        id: Number(userId), //id converted to number
      },
      data: {
        name,
        email,
        password,
      },
    });
    res.json({ status: 200, message: "User updated successfully" });
  } catch (err) {
    console.log("Error=", err.message);
  }
};

//* Delete User

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    });
    res.json({ status: 200, message: `ID Number${userId} is Deleted` });
  } catch (err) {
    console.log("Error=", err.message);
  }
};
