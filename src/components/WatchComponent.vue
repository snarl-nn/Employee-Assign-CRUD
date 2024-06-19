<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div class="row justify-center h1 font-semibold">ข้อมูล {{ employee.name +" "+ employee.surname }}</div>
            <div class="row justify-center m-5 h1"><i class="fa-solid fa-user-tie fa-5x"></i></div>
            <form class="bg-emerald-400 bg-opacity-60 rounded-3xl">
                <div class="row m-3">
                    <div class="col-6 font-semibold h4">ชื่อ-สกุล : {{ employee.name +" "+ employee.surname }}</div>
                    <div class="col-6 font-semibold h4">วันเกิด : {{ dayjs(employee.birthD).format('DD/MMM/YYYY') }}</div>
                    <div class="col-6 font-semibold h4">เพศ : {{ employee.sex }}</div>
                    <div class="col-6 font-semibold h4">วันที่บัตรปชช.หมดอายุ : {{  dayjs(employee.personalCardD).format('DD/MMM/YYYY')  }}</div>
                    <div class="col-6 font-semibold h4">ที่อยู่ : {{ employee.address }}</div>
                    <div class="col-6 font-semibold h4">ตำบล : {{ employee.sub }}</div>
                    <div class="col-6 font-semibold h4">อำเภอ : {{ employee.district }}</div>
                    <div class="col-6 font-semibold h4">จังหวัด : {{ employee.province }}</div>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import dayjs from 'dayjs';
export default{
    data() {
        return {
            employee: {}
        }
    },
    created() {
        
        let apiURL = `http://localhost:4000/api/edit-employee/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.employee = res.data
        })
    },
    methods: {
        dayjs,
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-employee/${this.$route.params.id}`;
            axios.put(apiURL, this.employee).then((res) => {
                console.log(res);
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>