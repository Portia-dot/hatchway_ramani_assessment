<template>
    <div class="student-header">
        <div
            class="students-header"
            v-for="student in students"
            :key="student.name"
        >
            <div class="image-holder">
                <img :src="student.pic" alt="student-img" class="image" />
            </div>
            <div class="info-wrapper">
                <div class="student-name">
                    <b>
                        Full Name:{{ student.firstName }}
                        {{ student.lastName }}
                    </b>
                </div>
                <div class="student-email">
                    <b>Email:{{ student.email }}</b>
                </div>
                <div class="student-company">
                    <b>Company:{{ student.company }}</b>
                </div>
                <div class="student-skill">
                    <b>Skill:{{ student.skill }}</b>
                </div>
                <div class="student-average">
                    <b>Average:{{ averageGrade(student) }}</b>
                </div>
                <div class="average-list" v-if="isActive">
                    <b>Grades:</b>
                    <ul v-for="(grade, index) in student.grades" :key="index">
                        <li>
                            <b>Test Score {{ index + 1 }} :</b>
                            {{ grade }}
                        </li>
                    </ul>
                </div>
                <input
                    type="text"
                    placeholder="Add a tag"
                    class="student-tag"
                />
            </div>
            <button class="student-btn" @click="isActive = !isActive">
                <i :class="[isActive ? 'fas fa-minus ' : 'fas fa-plus']"></i>
            </button>
        </div>
    </div>
</template>

<script>
import studentService from '../services/studentServices.js'
export default {
    name: 'studentList',
    props: {
        student: Object,
    },
    data() {
        return {
            isActive: false,
            students: null,
        }
    },
    created() {
        studentService
            .getStudents()
            .then((response) => {
                this.students = response.data.students
                console.log(this.students)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        averageGrade(student) {
            return (
                student.grades.reduce(
                    (total, grade) => (total += parseInt(grade)),
                    0
                ) / student.grades.length
            )
        },
        searchByName() {
            console.log('hello')
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.students-header {
    display: flex;
    transition: all 0.5s ease;
    padding: 40px 0;
    justify-content: space-between;
}
/* .student-header {
    position: relative;
} */
.student-name {
    font-size: 24px;
    font-weight: 600;
}
.image {
    border: 1px solid lightgrey;
    border-radius: 50%;
}
.image-holder {
    @media screen and (min-width: 768px) {
        width: 100%;
        height: auto;
    }
}
.info-wrapper {
    text-align: left;
    margin-left: 20px;
    margin: 10px 0;
}
@media screen and (max-width: 767px) {
    .info-wrapper {
        font-size: 20px;
    }
}

.student-btn {
    background: none;
    border: none;
    padding: 0;
    transition: all 0.5s ease;
    position: relative;
}
.student-btn-active {
    transform: rotate(180deg);
    translate: all 0.5s ease;
}
.student-name {
    font-weight: 600;
    font-size: 24px;
}
ul {
    list-style-type: none;
    padding: 0;
}
.student-tag {
    padding: 10px;
    border: 1px solid;
    border-color: #fff #fff #ccc;
    width: 200px;
    outline: none;
    font-size: 16px;
    margin-left: 20px;
    color: #8f8f8f;
}
</style>
