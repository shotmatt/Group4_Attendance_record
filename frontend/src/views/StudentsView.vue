<template>
    <div class="student">
        <Attendance msg="Welcome to Your Vue.js App" />

        <div class="list">
            <div class="col-md-8">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search by name" v-model="name" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="searchName">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div style="display:flex">
                <div class="col-md-6">
                    <h4>Student List</h4>
                    <ul class="list-group">
                        <li class="list-group-item" :class="{ active: index == currentIndex }"
                            v-for="(student, index) in student" :key="index" @click="setActivestudent(student, index)">
                            {{ student.Name }}
                        </li>
                    </ul>

                    <button class="m-3 btn btn-sm btn-danger" @click="removeAllstudent">
                        Remove
                    </button>
                    <button class="m-3 btn btn-sm btn-primary" @click="addStudent">
                        Add
                    </button>
                    <button class="m-3 btn btn-sm btn-primary" @click="exportStudent">
                        Generate Report
                    </button>
                </div>
                <div class="col-md-6" style="margin-left:20px">
                    <h4>Attendance List</h4>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(student, index) in attendanceStudent" :key="index">
                            {{ student.Name }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-md-6">
                <div v-if="currentstudent">
                    <h4>student</h4>
                    <div>
                        <label><strong>Name:</strong></label> {{ currentstudent.Name }}
                    </div>
                    <div>
                        <label><strong>Password:</strong></label> {{ currentstudent.Password }}
                    </div>
                    <div>
                        <label><strong>Privlege:</strong></label> {{ currentstudent.Privlege }}
                    </div>
                    <div>
                        <label><strong>Coarse:</strong></label> {{ currentstudent.Coarse }}
                    </div>
                    <div>
                        <label><strong>Attendance:</strong></label> {{ currentstudent.Attendance }}
                    </div>
                    <button class="m-3 btn btn-sm btn-info" @click="editStudent(currentstudent._id)">
                        Edit
                    </button>
                </div>
                <div v-else>
                    <br />
                    <p>Click on a student for additional information</p>
                </div>
            </div>
        </div>


    </div>
</template>
<script>

import axios from 'axios';
import * as XLSX from "xlsx";
export default {
    name: "student-list",
    data() {
        return {
            student: [],
            attendanceStudent: [],
            currentstudent: null,
            currentIndex: -1,
            name: ""
        };
    },
    methods: {
        retrievestudent() {
            const that = this
            axios.get('http://localhost:9000/StudentIDs/getAll', {

            }).then(function (response) {
                that.student = response.data;
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        },
        retrievestudent1() {
            const that = this
            axios.get('http://localhost:9000/StudentIDs/getAll?Attendance=Attendance', {
            }).then(function (response) {
                that.attendanceStudent = response.data;
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        },

        refreshList() {
            this.retrievestudent();
            this.retrievestudent1();
            this.currentstudent = null;
            this.currentIndex = -1;
        },

        setActivestudent(student, index) {
            this.currentstudent = student;
            this.currentIndex = student ? index : -1;
        },

        removeAllstudent() {
            const that = this
            axios.get('http://localhost:9000/StudentIDs/removeAll', {
                params: {
                    name: that.currentstudent.Name
                }
            }).then(function (response) {
                console.log(response.data);
                that.refreshList();
            }).catch(function (error) {
                console.log(error);
            });
        },
        addStudent() {
            this.$router.push({
                path: 'studentInfo',
                query: {
                    type: 'add'
                }
            })
        },
        editStudent(id) {
            this.$router.push({
                path: 'studentInfo',
                query: {
                    type: 'edit',
                    id: id
                }
            })
        },
        exportStudent() {
            const fdArrayList = this.student;
            const fdArray = [];
            fdArrayList.forEach(function (data, index) {
                var obj = {
                    Name: data.Name,
                    Password: data.Password,
                    Privlege: data.Privlege,
                    Coarse: data.Coarse,
                    Attendance: data.Attendance,
                };
                fdArray.push(obj);
            });
            // create a new .xlsx
            var wb = XLSX.utils.book_new();
            // encapsulation JSON data
            var fdXslxws = XLSX.utils.json_to_sheet(fdArray);
            XLSX.utils.book_append_sheet(wb, fdXslxws, "sheet");
            XLSX.writeFile(wb, "student List" + ".xlsx");
        },
        searchName() {
            const that = this
            axios.get('http://localhost:9000/StudentIDs/getAll', {
                params: {
                    name: this.name
                }
            }).then(function (response) {
                that.student = response.data;
                that.setActivestudent(null);
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });

            // studentDataService.findByName(this.name)
            //     .then(response => {
            //         this.student = response.data;
            //         this.setActivestudent(null);
            //         console.log(response.data);
            //     })
            //     .catch(e => {
            //         console.log(e);
            //     });
        }
    },
    mounted() {
        this.retrievestudent();
        this.retrievestudent1();
    }
};
</script>

<style>
.student {
    color: black;
    background: linear-gradient(to left, #9c88ff, #3cabeb);
    position: fixed;
    height: 100%;
    width: 100%;
}

.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>
