// alert("Hello Vue! Noussair Ja!")
// console.log("Hello Vue! Noussair Ja!");
const OtherComponent = {
  props: ['person'],
  emits: ['changeName'],
  template:`
  <div>
    {{ this.person.name }}
    {{ this.person.age }}
    </div>
    <button @click="changeName">
    Change name
    </button>
    `,
  data() {
    return {
    };
  },
  methods:{
    changeName(){
      //envoyez un evenement a l'autre component
      this.$emit('changeName', 'Noussair Ja o Jab');
    }
  }
}

const App = Vue.createApp({
  template: `
  <h1>{{ count }}</h1>
  <button value="increment" @click="increment">+</button>
  <button value="decrement" @click="decrement" >-</button>
  <p v-if="count >=18">majeur </p>
  <p v-else-if="count >= 16">presque majeur</p>
  <p v-else-if="count <0">pas en vie vous etes just idée</p>
  <p v-else>mineur</p>

  <ul>
    <li v-for="(name, index) in names" :key="index" :class="addClass(name)">{{ name }}</li>
    {{ lengthChange }}
    <button @click="addName">ajouter</button>
  </ul>
  <br>
  <div>
    <input type="text" :value="value" @input="handleInputChange" />
    <input type="checkbox"  v-model="checkBoxValue" />
    <!-- Lier un modèle avec une valeur (v-model) -->
    </div>
    {{ checkInput }}
    {{ checkBoxValue }}
    <div>
    <OtherComponent @changeName="setName" :person="person" />
     
    </div>
     `,
    components:{ OtherComponent }
    ,
  data() {
    return {
      message: "",
      count : 0,
      names: ['Noussair', 'Ja', 'Noussair Ja'],
      value: "",
      check:"Enter your password",
      checkBoxValue: false,
      person:{
        name: "Noussair",
        age:22,
      }
    };
  }
  ,
  computed: {
    lengthChange(){
      return this.names.length > 3 ? "yes" : "non";
    },
    checkInput(){
      if(this.value.length > 5){
        return "password valid";}else{
          return "password invalid";
        }
    }
  }
  ,
  methods: {
    setName(name){
      this.person.name = name;
    }
    ,
    increment() {
      this.count++;
    },
    decrement(){
      this.count--;
    },
    addName(){
      this.names.push('ahmed');
    },
    addClass(name){
      if(name === "Noussair Ja"){
        return "red";
      }else if(name === "Noussair"){
        return "purple";
      }else{
        return "yellow";
      }
    },
    handleInputChange($event){
      console.log($event.target.value);
      this.value = $event.target.value;
      //i want to show in console the leght of the input
      console.log($event.target.value.length);
    }
  }

});



App.mount('#app');

