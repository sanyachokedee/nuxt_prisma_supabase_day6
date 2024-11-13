export default defineEventHandler((event)=>{
    console.log('Log middleware log new request : '+ getRequestURL(event))
})