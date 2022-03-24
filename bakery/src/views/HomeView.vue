<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Mercury Bakery"/>
    <Flavors/>
    <Decorations/>
    <OrderFlavor/>
    <OrderTops/>
    <OrderDetails/>
    <TheInfo/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheInfo from '../components/TheInfo.vue'
import Flavors from '../components/Flavors.vue'
import Decorations from '../components/Decorations.vue'
import OrderFlavor from '../components/OrderFlavor.vue'
import OrderTops from '../components/OrderTops.vue'
import OrderDetails from '../components/OrderDetails.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TheInfo,
    Flavors,
    Decorations,
    OrderFlavor,
    OrderTops,
    OrderDetails
  }
}
</script>

<style scoped>
.logo {
  border: 2px solid rgba(59, 16, 41, 0.623);
  box-shadow: 2px #301131;
  border-radius: 50%;
  width:200px;
  object-fit: contain;
}

</style>