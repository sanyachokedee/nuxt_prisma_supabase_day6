// GET:  http://localhost:3000/api/users

import { PrismaClient } from "@prisma/client"

// Instance of PrismaClient
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const users = await prisma.user.findMany({
        include: {
            posts: true // รวมข้อมูล posts ที่ผู้ใช้เขียนด้วย
        }
    })
    return users
})