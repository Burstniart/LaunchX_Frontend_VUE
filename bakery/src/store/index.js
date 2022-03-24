import { createStore } from 'vuex'

export default createStore({
  state: {
    menuFlavors: {
      chocolate: {
        name: 'Chocolate',
        price :'24.99',
        stock: 30,
      },
      tresLeches: {
        name: 'Tres Leches',
        price:'19.99',
        stock: 20,
      },
      mocha: {
        name: 'Mocha',
        price:'29.99',
        stock: 10,
          },
    },
    menuTops: {
      frosting: {
        name: 'Buttercream frosting',
        price:'4.99',
        stock: 30,
      },
      fondant: {
        name: 'Fondant figurines',
        price:'14.99',
        stock: 20,
      },
      caramel: {
        name: 'Caramel and nuts',
        price:'9.99',
        stock: 10,
      }
    },

    checkedFlavors : null,
    orderedFlavors : [],


    checkedTops : null,
    orderedTops : [],

    name: null,
    phone: null,
    mail: null,
    instructions: null,
    flavors:  null,
    toppings: null,

    fullOrder : {},
    orders: [],
  },
  getters: {
    getMenuTops (state) {
      return state.menuTops
    },
    getMenuFlavors(state) {
      return state.menuFlavors
    },

    getFlavors (state) {
      return state.checkedFlavors;
    },
    getOrderedFlavors (state) {
      return state.orderedFlavors;
    },

    getTops (state) {
      return state.checkedTops;
    },
    getOrderedTops (state) {
      return state.orderedTops;
    },

    getOrder (state) {
      return state.fullOrder;
    },
    getAllOrders (state) {
      return state.orders;
    }

  },
  mutations: {

    mutateFlavors (state) {
      state.orderedFlavors = [...state.orderedFlavors,state.checkedFlavors];
    },

    mutateTops (state) {
      state.orderedTops = [...state.orderedTops, state.checkedTops];
    },

    mutateOrder ( state ) {
      state.orders = [...state.orders, state.fullOrder];
      for (let x in state.fullOrder.flavors) {
        switch(state.fullOrder.flavors[x]) {
          case 'Chocolate':
            state.menuFlavors.chocolate.stock -=1;
            break;
          case 'Tres Leches':
            state.menuFlavors.tresLeches.stock -=1;
            break;
          case 'Mocha':
            state.menuFlavors.mocha.stock -= 1;
        }
      };
      for (let y in state.fullOrder.toppings) {
        switch (state.fullOrder.toppings[y]) {
          case 'Frosting':
            state.menuTops.frosting.stock -= 1;
            break;
          case 'Fondant': 
            state.menuTops.fondant.stock -= 1;
            break;
          case 'Caramel':
            state.menuTops.caramel.stock -= 1;
            break;
        }
      }
    },
  },
  actions: {
    addFlavors (context) {
      context.commit('mutateFlavors');
    },

    addTops (context) {
      context.commit('mutateTops');
    },

    addOrder (context) {
      context.commit('mutateOrder');
    },
  },
  modules: {
  }
})
