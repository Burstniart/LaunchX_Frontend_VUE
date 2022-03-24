<template>
<!-- Componente de formulario debe de cont general del pastel y la selección de sabores y adornos -->
    <div class="OrderDetails">
        <h2>Order details:</h2>
       
            <label for="name">Full name:</label><br><br>
            <input v-model="name" id="name" type="text"><br><br>
            <label for="phone">Phone number:</label><br><br>
            <input v-model="phone" id="phone" type="number"><br><br>
            <label for="mail">E-mail:</label><br><br>
            <input v-model="mail" id="mail" type="email"><br>
   
        <h3>Your order:</h3>
        <div class="cakeDesc">
            <p>Flavor:</p>
            <li v-for="(checkedFlavors, index) in $store.state.checkedFlavors" :key="index">
            {{ checkedFlavors }}
        </li>
        <p>Toppings:</p>
        <li v-for="(checkedTops, index) in $store.state.checkedTops" :key="index">
            {{ checkedTops }}
        </li>
        </div>
        <br><br>
        <label for="instructions">Indicate names, messages and indications about the cake:</label><br><br>
        <textarea v-model="instructions" id="instructions"  maxlength="300" cols='30' row='10'></textarea><br>
        <button @click="mutateOrder">Place Order</button>            
    </div>
</template>

<script>
export default {
    name: 'OrderDetails',
    data () {
        return {
            name: null,
            phone: null,
            mail: null,
            instructions: null,
            flavors:  null,
            toppings: null,

        }
    },
    methods: {
        mutateOrder() {
            this.$store.state.fullOrder = {
                name: this.name,
                phone: this.phone,
                mail:  this.mail,
                instructions:this.instructions,
                flavors: this.$store.state.checkedFlavors,
                toppings: this.$store.state.checkedTops
            }
            this.$store.dispatch('addOrder');
            this.name= '';
            this.phone = '';
            this.mail = '';
            this.instructions = '';
            this.$store.state.checkedFlavors = '';
            this.$store.state.checkedTops = '';
        }
    }
}
</script>

<style scoped>
.OrderDetails {
    background-color: rgba(255, 0, 234, 0.04);
    font-size:18px;
}
.OrderDetails label{
    font-size:18px;
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
    background-color: rgb(246, 251, 255);
}
.cakeDesc {
    list-style: none;   
}
.cakeDesc p {
    font-weight: bold;
}
#instructions {
    height: 100px;
    width:300px;
}

/* Remove arrow inside inpute type number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
@media only screen and (max-width: 600px) {
    input {
        width: 75%;
        height: 30px;
        font-size: 20px;
    }
    #instructions {
    height: 100px;
    width: auto;
}
}
</style>