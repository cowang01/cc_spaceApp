<template lang="html">
  <div class="">
    <h1>BBC DiscoverED</h1>
    <div class="planet-fact">
      <h2><u>Question</u></h2>
      <p>  As you approach a black hole does time:</p>
        <p v-on:click="question(false)">A:  Speed up</p>
        <p v-on:click="question(true)">B:  Slow down</p>
        <p v-on:click="question(false)">C:  Stay the same</p>
      <h4 id="move">{{result}}</h4>
    </div>
  </div>
</template>

<script>

export default {

  data(){
    return {
      result: ''
    }
  },
  mounted(){
    SpaceServices.getSpace()
    .then( space => this.all_planets = space );

  },
  methods: {
    question(boolean) {
      if (boolean) {
        this.result = "CORRECT"
      } else {
        this.result = "Sorry, that's incorrect.  Why not look around the site to see if you can find the answer."
      }

    }
  }
}
</script>

<style lang="css" scoped>


.planet-fact {
  position: relative;
  bottom: 0px;
  margin-top: 30px;
  text-align: center;
  apgn-items: center;
  height: 0;
  border-radius: 16px;
}


ul {
  pst-style: none;
  font-size: 20px;
}

p {
  font-size: 20px;
}


h1 {
  text-align: center;
  font-size: 75px;

}

#move {
position: fixed;
top: 80%;
left: 45%;
width: 200px;
color: green;
font-size: 20px;
border-color: white;
/* border-style: solid; */
border-radius: 5px;
border-width: thin;
background-color: rgba(255, 255, 255, 0.1);
}


</style>
