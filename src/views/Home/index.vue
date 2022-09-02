<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <custom-header @create-account="handleAccountCreate"  @login="handleLogin"></custom-header>
    <contact></contact>
    <footer class="flex justify-center py-10 bg-brand-gray">
        <p class="font-medium text-center text-gray-800">feedbacker</p>
    </footer>
</template>

<script>
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'
import {onMounted} from 'vue'
import useModal from '../../hooks/useModal'
import {useRouter} from 'vue-router'

export default {
    components: {CustomHeader,Contact}, 
    setup() {
        const router = useRouter()
        const modal = useModal()

        onMounted(()=>{
            const token = window.localStorage.getItem('token')
            if(token)
            router.push({name:'Feedback'})
        })

        function handleLogin(){
            modal.open({
                component: 'ModalLogin'
            })
        }
        function handleAccountCreate(){
            modal.open({
                component: 'ModalAccountCreate'
            })
        }
            

        return {
            handleLogin,
            handleAccountCreate
        }
    },
}
</script>
