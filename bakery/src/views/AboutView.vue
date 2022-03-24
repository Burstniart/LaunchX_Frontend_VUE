<template>
  <div class="panel">
        <h1>Cake mix inventory</h1>
        <div class='tableDiv'>
          <table class='orderTable'>
          <tr class='titles'>
            <td>{{ $store.getters.getMenuFlavors.chocolate.name}}</td>
            <td>{{ $store.getters.getMenuFlavors.tresLeches.name}}</td>
            <td>{{ $store.getters.getMenuFlavors.mocha.name}}</td>
          </tr>
          <tr>
            <td>{{ $store.getters.getMenuFlavors.chocolate.stock}}</td>
            <td>{{ $store.getters.getMenuFlavors.tresLeches.stock}}</td>
            <td>{{ $store.getters.getMenuFlavors.mocha.stock}}</td>
          </tr>
          </table>
        </div>
        <h1>Decoration inventory</h1>
        <div class='tableDiv'>
          <table class='orderTable'>
          <tr class='titles'>
            <td>{{ $store.getters.getMenuTops.frosting.name}}</td>
            <td>{{ $store.getters.getMenuTops.fondant.name}}</td>
            <td>{{ $store.getters.getMenuTops.caramel.name}}</td>
          </tr>
          <tr>
            <td>{{ $store.getters.getMenuTops.frosting.stock}}</td>
            <td>{{ $store.getters.getMenuTops.fondant.stock}}</td>
            <td>{{ $store.getters.getMenuTops.caramel.stock}}</td>
          </tr>
          </table>
        </div>

        <h1>Orders received</h1>
        <div class='tableDiv'>
        <table class='orderTable'>
          <tr class='titles'>
            <td>Flavors</td>
            <td>Toppings</td>
            <td>Instructions</td>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
          </tr>
          <tr v-for="(fullOrder,index) in $store.getters.getAllOrders" :key="index">
            <td>{{fullOrder.flavors}}</td>
            <td>{{fullOrder.toppings}}</td>
            <td>{{fullOrder.instructions}}</td>
            <td>{{fullOrder.name}}</td>
            <td>{{fullOrder.phone}}</td>
            <td>{{fullOrder.mail}}</td>
          </tr>

        </table>
        </div>


  </div>
</template>

<script>
export default {
  name: 'panel',
  data () { 
    return {
      fullOrder: {},
      }
    },
    methods: {
       
  }
}
</script>

<style scoped>
.titles {
  font-weight: bold;
}
.orderTable {
  border: 2px solid #002233;
  width: 100%;
}
.orderTable tr {
  background-color: rgb(51, 255, 51, 0.4);
}
.orderTable tr:nth-child(even){
  background-color: rgb(51, 155, 251, 0.4);
}
@media only screen and (max-width: 600px) {
  .tableDiv {
    overflow-x:auto;
    border-spacing: 0;
    width: 100%;
  }
}
</style>
