<!-- <template>
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
                        {{ student.name }}
                    </li>
                </ul>

                <button class="m-3 btn btn-sm btn-danger" @click="removeAllstudent">
                    Remove All
                </button>
            </div>
            <div class="col-md-6">
                <div v-if="currentstudent">
                    <h4>student</h4>
                    <div>
                        <label><strong>Name:</strong></label> {{ currentstudent.name }}
                    </div>
                    <div>
                        <label><strong>Species:</strong></label> {{ currentstudent.species }}
                    </div>
                    <div>
                        <label><strong>Breed:</strong></label> {{ currentstudent.breed }}
                    </div>
                    <div>
                        <label><strong>Age:</strong></label> {{ currentstudent.age }}
                    </div>
                    <div>
                        <label><strong>Colour:</strong></label> {{ currentstudent.colour }}
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
                studentDataService.getAll()
                    .then(response => {
                        this.student = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
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
                studentDataService.deleteAll()
                    .then(response => {
                        console.log(response.data);
                        this.refreshList();
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },

            searchName() {
                studentDataService.findByName(this.name)
                    .then(response => {
                        this.student = response.data;
                        this.setActivestudent(null);
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
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
</style> -->
