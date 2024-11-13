export default defineEventHandler((event)=>{
    // console.log('Auth middleware new request : '+ getRequestURL(event))
    event.context.auth = { 
        user: 'John ',
        role: 'admin',
        permissions: ['read','write']
    }
    // console.log(event.context.auth)
})