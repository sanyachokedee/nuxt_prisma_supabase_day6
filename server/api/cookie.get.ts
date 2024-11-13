export default defineEventHandler((event)=>{

    // สร้าง cookie ใหม่
    setCookie(event, 'myCookie','myCookieValue',{
        // httpOnly: true,   //ป้องกันอ่าน cookie จาก javascript
        maxAge: 60 * 60 *24, // cookie มีอายุ 1 วัน
        secure: process.env.NODE_ENV == 'production'  // ใช้ https เฉพาะใน production
    })

    // อ่าน Cookie จาก request
    const cookies = parseCookies(event)
    console.log('cookies = ',cookies)

    return {
        message: 'Cookies has been set',
        cookies: cookies
    }
})