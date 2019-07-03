<template>
  <div id="app">

    <router-link :to="{ name: 'ether'}"><map name="planetmap">
      <img class="map" src="../dist/img/planet.jpeg"  alt="Planets" usemap="#planetmap">
      <area shape="poly" coords="0,144,26,158,47,170,83,196,129,236,163,277,188,316,211,364,228,418,233,473,235,510,229,547,220,596,209,632,192,668,174,699,148,736,129,760,94,788,61,812,19,835,1,843" alt="Sun" v-on:click="sendName('Sun')">
      <area shape="poly" coords="321,515,329,517,335,519,340,524,344,531,345,539,344,547,340,558,330,563,318,564,307,561,301,553,297,544,297,536,301,526,309,519" alt="Mercury" v-on:click="sendName('Mercury')">
      <area shape="poly" coords="471,490,482,493,490,498,499,505,507,516,511,527,513,537,513,546,511,555,508,563,504,571,498,577,492,581,486,585,478,589,470,591,461,590,452,587,446,583,438,577,431,570,425,560,421,548,419,533,422,520,429,509,441,498,458,492" alt="Venus" v-on:click="sendName('Venus')">
      <area shape="poly" coords="649,479,675,489,692,503,701,519,704,541,703,558,691,575,679,588,659,596,636,597,619,591,605,581,596,570,590,558,586,540,589,522,593,510,607,492,623,482" alt="Earth" v-on:click="sendName('Earth')">
      <area shape="poly" coords="696,422,703,421,709,424,713,427,717,433,717,440,714,447,707,453,698,455,692,454,687,448,684,441,685,435,688,428" alt="Moon" v-on:click="sendName('Moon')">
      <area shape="poly" coords="826,496,842,499,853,503,862,510,870,517,875,529,879,542,878,560,869,577,853,589,837,594,818,594,806,591,793,579,784,566,779,548,780,534,785,521,796,505,813,497" alt="Mars" v-on:click="sendName('Mars')">
      <area shape="poly" coords="1038,447,1061,450,1078,455,1095,467,1106,476,1116,489,1123,508,1128,531,1123,556,1115,577,1097,597,1076,609,1055,616,1034,615,1011,611,995,603,986,593,972,575,964,559,960,540,960,520,964,498,977,478,998,459,1018,450" alt="Jupiter" v-on:click="sendName('Jupiter')">
      <area shape="poly" coords="1198,506,1215,497,1238,489,1268,485,1293,488,1314,487,1321,488,1334,484,1347,485,1360,486,1370,489,1380,494,1387,501,1394,506,1411,512,1432,521,1447,527,1465,539,1479,553,1490,568,1492,581,1484,591,1470,599,1443,604,1424,605,1400,607,1380,605,1371,606,1360,607,1346,608,1334,609,1319,606,1308,600,1298,588,1294,582,1289,585,1282,584,1270,579,1258,573,1247,569,1235,563,1221,555,1210,545,1201,535,1195,522" alt="Saturn" v-on:click="sendName('Saturn')">
      <area shape="poly" coords="1609,495,1624,497,1638,504,1645,512,1653,523,1660,539,1659,556,1655,568,1647,578,1636,588,1624,594,1605,594,1591,590,1577,580,1569,568,1563,553,1562,537,1567,521,1577,506,1595,496" alt="Uranus" v-on:click="sendName('Uranus')">
      <area shape="poly" coords="1812,479,1830,484,1848,496,1858,510,1868,527,1870,541,1867,559,1860,572,1851,585,1842,592,1832,598,1818,602,1797,601,1778,596,1766,585,1757,575,1751,565,1747,553,1746,538,1748,519,1756,505,1768,492,1783,482" alt="Neptune" v-on:click="sendName('Neptune')">
    </map></router-link>

    <router-link :to="{ name: 'ether'}"><img id="comet-img" src="../dist/img/comet2.jpg" alt="imposed comet image" v-on:click="sendName('Comet')"></router-link>

    <a id="pluto-img" href="/dwarfPlanets.html"><img id="dwarfPlanets" src="../dist/img/pluto.png" alt="Dwarf Planets"></a>

    <a id="black-hole" href="/black-hole.html"><img class="black-hole" src="../dist/img/black hole.jpg" width="170" height="170" alt="Black Hole"></a>

    <router-link id="asteroid-img" :to="{ name: 'question1'}"> <img src="../dist/img/asdteroid2.jpg"> </router-link>

    <a id="shuttle-img" href="/shuttle.html"><img src="../dist/img/shuttle2.jpg" alt="Space Shuttle"></a>

    <router-view id="App"></router-view>

    <div class="form">
      <form v-on:submit.prevent="createAsteroid">
        <input type="text" placeholder="Name Your Comet" name="title">
        <input id="buttoned" type="submit" value="Name">
      </form>
      <p id="cometName" v-if="cometShow">{{cometTitle}}</p>
    </div>

  </div>
</template>

<script>

import SpaceBody from './components/SpaceBody.vue';
import SpaceFact from './components/SpaceFact.vue';
import {eventBus} from './main.js'

export default {
  name: 'app',
  data () {
    return {
      bodies: [],
      selectedBody: null,
      cometTitle: '',
      cometShow: false
    }
  },
  methods: {
    sendName(name){
      // console.log('test-function_', name)
      eventBus.$emit('body-name', name);
    },
    createAsteroid(submitEvent){
      this.cometTitle = submitEvent.target.elements.title.value
      this.cometShow = true
    }
  }
}
</script>

<style>
body{
  font-family: 'Raleway', sans-serif;
}

.map {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}

.black-hole {
  position: absolute;
  right: 50px;
  top: 100px;
  /* z-index: -1; */
  animation-name: rotate;
  animation-duration: 40s;
  animation-iteration-count: 10;
  animation-delay: 0s;
  border-radius: 450px;

}

#comet-img {
  width: 7vw;
  height: 7vw;
  position: absolute;
  top: 80%;
  left: 80%;
  animation-name: rotate;
  animation-duration: 40s;
  animation-iteration-count: 10;
  animation-delay: 0s;
  border-radius: 16px;
}

@keyframes rotate {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

.form {
  position: fixed;
  left: 2%;
  top: 95%;
  width: auto;
}

#buttoned {
  background-color: #bec246;
}

#cometName {
  position: fixed;
  left: 82%;
  top: 92%;
  color: #d7d7d9;
  font-family: tahoma;
}

#shuttle-img {
  position: absolute;
  border-radius: 18px;
  right: 69%;
  top: 9%;
  /* z-index: -1; */

}

#dwarfPlanets{
  width: 150px;
  position: absolute;
  left: 350px;
  bottom: 5%;
  z-index: -1;
  animation-name: rotate;
  animation-duration: 40s;
  animation-iteration-count: 10;
  animation-delay: 0s;
  border-radius: 630px;
}

#asteroid-img{
  position: absolute;
  border-radius: 20px;
  right: 18%;
  top: 22%;
}
</style>
