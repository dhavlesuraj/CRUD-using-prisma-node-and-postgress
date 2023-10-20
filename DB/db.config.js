import {PrismaClient}from "@prisma/client"

const prisma = new PrismaClient({
  log: ["query"], //return query in console
  
});
export default prisma;