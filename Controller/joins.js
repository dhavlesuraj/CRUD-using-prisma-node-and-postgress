import { error } from "console";
import prisma from "../DB/db.config.js";
import fs from "fs";


export const fetchMatchUser = async (req, res) => {
  try {

    const data =
    await prisma.$queryRaw`select public.concept.concept,public.concept.is_deleted,public.skill.skill_name,
    public.skill.skill_description from public.concept Left Join skill ON concept.skill_id = public.skill.id`;
    res.json({ status: 200, data: data });
    fs.writeFile("./skill&concept Data.txt",JSON.stringify(data),(error)=>{
        console.log("skill and concept left join data is not save in file",error);
    })

  } catch (error) {
    console.log("Error in joins=", error);
  }
};


