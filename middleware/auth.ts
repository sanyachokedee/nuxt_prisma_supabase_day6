import { useSupabaseClient }  from '#imports'

export default defineNuxtRouteMiddleware(async (to, from) => {
    // เข้าถึง ค่า cookie
    const token = useCookie('auth_token').value

    // ตรวจสอบว่ามี token หรือไม่
    if(!token) {
        return navigateTo('/login')
    }

    // ตรวจสอบ token กับ supabase (optional)
    const supabase = useSupabaseClient()
    const { data: user , error } = await supabase.auth.getUser(token)

    if( error || !user ) {
        return navigateTo('/login')
    }



})