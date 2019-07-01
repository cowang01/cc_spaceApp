<template>
  <div id="app">
    <map name="planetmap">
      <img src="../dist/img/planet.jpeg"  alt="Planets" usemap="#planetmap">
      <area shape="poly" coords="0,144,26,158,47,170,83,196,129,236,163,277,188,316,211,364,228,418,233,473,235,510,229,547,220,596,209,632,192,668,174,699,148,736,129,760,94,788,61,812,19,835,1,843" alt="Sun" href="sun.htm">
      <area shape="poly" coords="0,144,26,158,47,170,83,196,129,236,163,277,188,316,211,364,228,418,233,473,235,510,229,547,220,596,209,632,192,668,174,699,148,736,129,760,94,788,61,812,19,835,1,843" alt="Mercury" href="mercur.htm">
      <area shape="poly" coords="471,490,482,493,490,498,499,505,507,516,511,527,513,537,513,546,511,555,508,563,504,571,498,577,492,581,486,585,478,589,470,591,461,590,452,587,446,583,438,577,431,570,425,560,421,548,419,533,422,520,429,509,441,498,458,492" alt="Venus" href="venus.htm">
      <area shape="poly" coords="649,479,675,489,692,503,701,519,704,541,703,558,691,575,679,588,659,596,636,597,619,591,605,581,596,570,590,558,586,540,589,522,593,510,607,492,623,482" alt="Earth" href="Earth.htm">
      <area shape="poly" coords="826,496,842,499,853,503,862,510,870,517,875,529,879,542,878,560,869,577,853,589,837,594,818,594,806,591,793,579,784,566,779,548,780,534,785,521,796,505,813,497" alt="Mars" href="Mars.htm">
      <area shape="poly" coords="1038,447,1061,450,1078,455,1095,467,1106,476,1116,489,1123,508,1128,531,1123,556,1115,577,1097,597,1076,609,1055,616,1034,615,1011,611,995,603,986,593,972,575,964,559,960,540,960,520,964,498,977,478,998,459,1018,450" alt="Jupiter" href="Jupiter.htm">
      <area shape="poly" coords="1198,506,1215,497,1238,489,1268,485,1293,488,1314,487,1321,488,1334,484,1347,485,1360,486,1370,489,1380,494,1387,501,1394,506,1411,512,1432,521,1447,527,1465,539,1479,553,1490,568,1492,581,1484,591,1470,599,1443,604,1424,605,1400,607,1380,605,1371,606,1360,607,1346,608,1334,609,1319,606,1308,600,1298,588,1294,582,1289,585,1282,584,1270,579,1258,573,1247,569,1235,563,1221,555,1210,545,1201,535,1195,522" alt="Jupiter" href="Jupiter.htm">
      <area shape="poly" coords="" alt="Jupiter" href="Jupiter.htm">
      <area shape="poly" coords="" alt="Jupiter" href="Jupiter.htm">
      <area shape="poly" coords="" alt="Jupiter" href="Jupiter.htm">
    </map>
    <!-- <router-link :to="{ name: 'ether'}">Ether</router-link> -->
    <router-view id="App"></router-view>
  </div>
</template>

<script>

import SpaceBody from './components/SpaceBody.vue';
import SpaceFact from './components/SpaceFact.vue';


export default {
  name: 'app',
  data () {
    return {
      bodies: [],
      selectedBody: null
    }
  },
  mounted(){
    // fetch('http://localhost:3000/')
    // .then(res => res.json())
    // .then(json => this.serverMessage = json.message);
  },
}
</script>

<style>
#planetmap {
  /* background-image: url("../dist/img/planet.jpeg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  background-image:100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #white;
  margin-top: 60px;
}
</style>
