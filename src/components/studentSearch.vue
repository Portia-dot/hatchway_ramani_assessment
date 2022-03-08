<template>
    <div class="searchBar">
        <input
            type="text"
            placeholder="Search By Name"
            class="searchByName"
            @keyup="searchByName"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchBar: '',
        }
    },
    props: {
        placeholder: {
            type: String,
        },
    },
    methods: {
        searchByName() {
            this.$emit('searchByName', this.searchBar)
        },
    },
}
</script>

<style scoped>
.searchByName {
    width: 100%;
    height: 50px;
    border: 1px solid;
    outline: none;
    text-align: center;
    border-color: #fff #fff #ccc;
    font-size: 20px;
}
</style>
