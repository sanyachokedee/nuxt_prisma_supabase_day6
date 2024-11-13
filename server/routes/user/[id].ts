export default defineEventHandler((event)=> {
    //  รับ parameter ที่ส่งมาจาก URL
    const id = getRouterParam(event, 'id')

    // รับ query string ที่ส่งมาจาก client
    // http://localhost:3000/users/samit?type=admin&page=1
    const query = getQuery(event) 

    return {
        id: id,        
        name: 'Paramenter User API from server/routes/user/[id]',
        query: {a : query.type , b: query.page}
    }
})