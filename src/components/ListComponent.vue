<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="row justify-center mb-3 h1 font-semibold">ข้อมูลพนักงาน</div>
            <div class="row justify-content-center">
                <div class="col-10">
                    <table class="table table-striped ">
                        <thead class="thead-dark">
                            <tr>
                                <th colspan="2">Name</th>
                                <th >วันเกิด</th>
                                <th >เพศ</th>
                                <th >ที่อยู่</th>
                                <th >ตำบล</th>
                                <th >อำเภอ</th>
                                <th >จังหวัด</th>
                                <th >วันที่บัตปชช.หมดอายุ</th>
                                <th >ข้อมูล</th>
                                <th >แก้ไข/ลบ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="employee in employees" :key="employee._id">
                                <td>{{ employee.name }}</td>
                                <td>{{ employee.surname }}</td>
                                <td>{{ dayjs(employee.birthD).format('DD/MMM/YYYY') }}</td>
                                <td>{{ employee.sex }}</td>
                                <td>{{ employee.address }}</td>
                                <td>{{ employee.sub }}</td>
                                <td>{{ employee.district }}</td>
                                <td>{{ employee.province }}</td>
                                <td >{{ dayjs(employee.personalCardD).format('DD/MMM/YYYY') }}</td>
                                <td style="text-align: center;">
                                    <router-link :to="{name: 'data', params: {id: employee._id}}" class="btn btn-success mr-2"> <i class="fa-solid fa-magnifying-glass"></i> </router-link>
                                </td>
                                <td style="text-align: center;">
                                    <router-link :to="{name: 'edit', params: {id: employee._id}}" class="btn btn-success mr-2"> <i class="fa-solid fa-user-pen"></i> </router-link>
                                    <button @click.prevent="deleteemployee(employee._id)" class="btn btn-danger "><i class="fa-solid fa-eraser"></i> </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';
import th from 'dayjs/locale/th';

 
dayjs.locale(th);

export default{
    data() {
        return {
            employees: []
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api`;
        
        axios.get(apiURL).then(res => {
            this.employees = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        dayjs,
        deleteemployee(id) {

            let apiURL = `http://localhost:4000/api/delete-employee/${id}`;

            let indexOfArrayitem = this.employees.findIndex(i => i._id === id);

            if(window.confirm("Do you really want to delete this employee?")){
                axios.delete(apiURL).then(()=> {
                    this.employees.splice(indexOfArrayitem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    },
}
</script>

<style scoped>
    th {
        text-align: center;
    }
</style>