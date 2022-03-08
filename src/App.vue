<template>
    <studentSearch />
    <studentTag />
    <StudentList @searchByName="searchByName" />
</template>

<script>
import StudentList from './components/StudentList.vue'
import studentSearch from './components/studentSearch.vue'
import studentTag from './components/studentTag.vue'

export default {
    name: 'App',
    components: {
        StudentList,
        studentSearch,
        studentTag,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 300px;
    margin: 0 auto;
}
@media screen and (min-width: 768px) {
    #app {
        width: 700px;
    }
}
.searchBar,
.studentTag {
    padding-bottom: 1em;
}
</style>
