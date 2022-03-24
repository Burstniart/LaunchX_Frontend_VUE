<template>
    <div class='OrderFlavor'>
        <h2>Pick a flavor:</h2>
            <input type="checkbox" id="chocolate" value="Chocolate" v-model="checkedFlavors">
            <label for="chocolate">Chocolate</label>

            <input type="checkbox" id="tresLeches" value="Tres Leches" v-model="checkedFlavors">
            <label for="tresLeches">Tres Leches</label>

            <input type="checkbox" id="mocha" value="Mocha" v-model="checkedFlavors">
            <label for="mocha">Mocha</label><br>
            <button @click="mutateFlavors">Add flavors</button>
        </div>
</template>

<script>
export default {
    name: 'OrderFlavor',
    data () {
        return {
            checkedFlavors : []
        }
    },
    methods: {
        mutateFlavors() {
            this.$store.state.checkedFlavors = this.checkedFlavors;
            this.$store.dispatch('addFlavors');
            this.checkedFlavors = [];
        }
    }
}
</script>

<style scoped>
.OrderFlavor {
    background-color: #ff000005;
}
label{
    font-size:18px;
    margin:10px;
}
input {
    transform: scale(1.5);
}
button{
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    width: 80px;
    height: 80px;
    border: 2px solid #05020583;
    font-size: 18px;
    margin: 15px;
    background-color: rgb(255, 239, 239);
}

</style>