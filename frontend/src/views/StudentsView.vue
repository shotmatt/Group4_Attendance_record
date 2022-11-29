<template>
    <div class="student">
        <Attendance msg="Welcome to Your Vue.js App" />

        <div class="list">
            <div class="col-md-8">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search by name"
                           v-model="name" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"
                                @click="searchName">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h4>student List</h4>
                <ul class="list-group">
                    <li class="list-group-item"
                        :class="{ active: index == currentIndex }"
                        v-for="(student, index) in student"
                        :key="index"
                        @click="setActivestudent(student, index)">
                        {{ student.Name }}
                    </li>
                </ul>

                <button class="m-3 btn btn-sm btn-danger" @click="removeAllstudent">
                    Remove
                </button>
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

                    <router-link :to="'/students/' + currentstudent._id" class="badge badge-warning">Edit</router-link>
                </div>
                <div v-else>
                    <br />
                    <p>Please click on an student...</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
export default {
        name: "student-list",
        data() {
            return {
                student: [],
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

            refreshList() {
                this.retrievestudent();
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
                        name:that.currentstudent.Name
                    }
                }).then(function (response) {
                    console.log(response.data);
                    that.refreshList();
                }).catch(function (error) {
                    console.log(error);
                });
            },
            searchName() {
                const that = this
                axios.get('http://localhost:9000/StudentIDs/getAll', {
                    params: {
                        name:this.name
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
        }
};
</script>

<style>

    .student {
        color: black;
        background: linear-gradient(to left,#9c88ff,#3cabeb);
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
