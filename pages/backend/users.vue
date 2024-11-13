<script setup lang="ts">

const { data : Users, error} = await useFetch(('api/users')) 
console.log('users = ',Users)

    const viewUser = (id: number) => {
        alert(`View User with ID: ${id}`)
    }

    const editUser = (id: number) => {
        alert(`Edit User with ID: ${id}`)
    }

    const deleteUser = (id: number) => {
        if (confirm('Are you sure you want to delete this User?')) {
            alert(`Deleted User with ID: ${id}`)
        }
    }

    definePageMeta({
        layout: 'backend',
    })

    useHead({
        title: 'Users',
        meta: [
        { 
            name: 'keywords', 
            content: 'Users, Nuxt 3, Backend'
        },
        {
            name: 'Description',
            content: 'Users Nuxt 3,  IT Genius Engineering'
        }
        ]
    })

</script>


<template>
    <div>
        <h2 class="text-2xl font-bold mb-6">Users</h2>
        <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Manage</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="User in Users" :key="User.id">
                <td>{{ User.id }}</td>
                <td>{{ User.name }}</td>
                <td>{{ User.email  }}</td>
                <td>{{ User.createdAt }}</td>
                <td class="space-x-2">
                <button class="btn btn-sm btn-primary" @click="viewUser(User.id)">View</button>
                <button class="btn btn-sm btn-warning" @click="editUser(User.id)">Edit</button>
                <button class="btn btn-sm btn-error" @click="deleteUser(User.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<style scoped>

</style>