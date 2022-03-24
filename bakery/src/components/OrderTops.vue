<template>
    <div class='OrderTops'>

        <h2>Pick a topping:</h2>
            <input type="checkbox" id="frosting" value="Frosting" v-model="checkedTops">
            <label for="frosting">Frosting</label>

            <input type="checkbox" id="fondant" value="Fondant" v-model="checkedTops">
            <label for="fondant">Fondant</label>

            <input type="checkbox" id="caramel" value="Caramel" v-model="checkedTops">
            <label for="caramel">Caramel</label><br>
            <button @click="mutateTops">Add toppings</button>
           
        </div>
</template>

<script>
export default {
    name: 'OrderTops',
    data () {
        return {
            checkedTops: [],            
        }
    },
    methods: {
        mutateTops() {
            this.$store.state.checkedTops = this.checkedTops;
            this.$store.dispatch('addTops');
            this.checkedTops = [];
        }
    }
}
</script>

<style scoped>
.OrderTops {
    background-color: #ff000008;
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
    font-size: 17px;
    margin: 15px;
    background-color: rgb(255, 239, 252);
}

</style>