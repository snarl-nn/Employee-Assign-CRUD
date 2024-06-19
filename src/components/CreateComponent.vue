<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div class="mb-3 h1 font-semibold">ลงทะเบียนพนักงาน</div>
            <form @submit.prevent="handleSubmitForm" class="bg-green-500 bg-opacity-50 rounded-3xl">
                <div class="row m-3">
                    <div class="form-group col-4 my-2">
                        <label for="name">ชื่อ</label>
                        <input type="text" class="form-control" v-model="employee.name" required>
                    </div>
                    <div class="form-group col-4 my-2">
                        <label for="surname">นามสกุล</label>
                        <input type="text" class="form-control" v-model="employee.surname" required>
                    </div>
                    <div class="form-group col-4 my-2">
                        <label for="birthD">วันเกิด</label>
                        <input type="date" class="form-control" v-model="employee.birthD" required>
                    </div>
                    <div class="form-group col-3">
                        <label for="sex">เพศ</label>
                        <select class="form-control selectpicker" title="SelectSex"  v-model="employee.sex" required>
                            <option value="ชาย">ชาย</option>
                            <option value="หญิง">หญิง</option>
                        </select>
                    </div>
                    <div class="form-group col-9">
                        <label for="address">ที่อยู่</label>
                        <input type="text" class="form-control" v-model="employee.address" required>
                    </div>
                    <div class="form-group col-6">
                        <label for="amphoe">ตำบล</label>
                        <input type="text" class="form-control" v-model="employee.sub" required>
                    </div>
                    <div class="form-group col-6">
                        <label for="district">อำเภอ</label>
                        <input type="text" class="form-control" v-model="employee.district" required>
                    </div>
                    <div class="form-group col-6">
                        <label for="province">จังหวัด</label>
                        <input type="text" class="form-control" v-model="employee.province" required>
                    </div>
                    <div class="form-group col-6">
                        <label for="personalCardD">วันที่บัตรประชาชนหมดอายุ</label>
                        <input type="date" class="form-control" v-model="employee.personalCardD" required>
                    </div>
                </div>
            <div class="row justify-content-center">
                <div class="form-group col-2">
                    <button class="btn btn-success btn-block" type="submit">Submit</button>
                </div>
                <div class="form-group col-2">
                    <button class="btn btn-danger btn-block"  type="reset">Cancel</button>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data() {
        return {
            employee: {
                name: '',
                surname: '',
                sex: '',
                birthD: '',
                address: '',
                sub: '',
                district: '',
                province: '',
                personalCardD: ''
            }
        }
    },
    methods:{
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-employee';

            axios.post(apiURL, this.employee).then(() =>{
                this.$router.push('/view');
                this.employee = {
                    name: '',
                    surname: '',
                    sex: '',
                    birthD: '',
                    address: '',
                    sub: '',
                    district: '',
                    province: '',
                    personalCardD: ''
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
    
    
}
</script>
