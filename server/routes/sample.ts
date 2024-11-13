// GET http://localhost:3000/sample

export default defineEventHandler((event)=> {

    if(event.context.auth.role !== 'admin') {
        throw createError({
            statusCode: 403,
            message: 'Unauthorized'
        })
    }
    // ดำเนินการตต่อหากผ่านการตรวจสอบสิทธิ์แล้ว

    return {
        message: `Welcome user ${event.context.auth.user},
        You have permission to ${event.context.auth.permissions}`
    }

    // return {
    //     name: 'sample API from server/sample.ts no API name',
    // }
})