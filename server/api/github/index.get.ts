export default defineEventHandler((event)=>{

    // อ่าน Config จาก runtimeConfig
    const config = useRuntimeConfig(event)

    const data = {
        githubToken: config.githubToken,
        githubUsername: config.githubUsername,
        githubRepo: config.githubRepo
    }
    
    return data
})