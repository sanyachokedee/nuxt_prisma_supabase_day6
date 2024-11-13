// GET:  http://localhost:3000/api/posts?title=xxx

import { PrismaClient } from "@prisma/client"

// Instance of PrismaClient
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    // รับ title จาก query string ที่ส่งมาจาก client
    // http://localhost:3000/api/posts?title=xxx
    // const title = getQuery(event).title as string
    const query = getQuery(event)
    const title = query.title as string
    

    // Fetch all posts
    const posts = await prisma.post.findMany({
        where: {
            title: {
                contains: title,   // ใช้ "contains" ในการค้นหาคำใน title
                mode: 'insensitive' // ไม่สนใจตัวพิมพ์ใหญ่-เล็ก
            }
        },
        select: {
            id: true,
            title: true,
            content: true,
            published: true,
            authorId: true,
            createdAt: true,
            updatedAt:true
        },
        orderBy: {
            id: 'desc'    // เรียงลำดับจากมากไปน้อย
        }
    })
        return posts
  
})