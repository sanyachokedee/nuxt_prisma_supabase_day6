<script setup lang="ts">

// Fetch data from API
const { data } = await useFetch('/api/sample')

// สร้างฟังก์ชั่น submit สำหรับส่งข้อมูลไปยัง API
async function submit() {
    // ใช้ $fetch แทน useFetch เพราะจะโหลดเมื่อเรียกข้อมูลหลังจากที่คอมโพเนนต์ได้ mount ไปแล้ว
    const response = await $fetch('/api/submit', {
        method: 'POST',
        body: {
            test: 1234
        }
    })
    console.log('body  = ',response)
}
    // ทดสอบเรียก cookies จากฝั่ง Client
    const cookieValue = ref('')
    function getCookies() {
        // พยายามดึงคุกกี้ทั้งหมดจากฝั่ง Client
        const cookies = document.cookie
        console.log('Client-side Cookies : ', cookies)

        // แสดงผลลัพธ์ในหน้าจอเพื่อให้เห็นค่าคุกกี้
        cookieValue.value = cookies.includes('myCookie') ? 'myCookie is found' : 'myCookie is not found'
    }

</script>


<template>
    <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
    <pre>{{ data }}</pre>
    <button @click = "submit">Submit</button>
    
    <p><button @click = "getCookies">GEt Cookies</button></p>
    <p> {{  cookieValue  }}</p>
</template>



<style scoped></style>