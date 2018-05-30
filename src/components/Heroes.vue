<template>
  <div class="heroes">
    <b-card style="margin-bottom: 2em; text-align: center;" no-body bg-variant="dark">
      <b-tabs card>
        <b-tab class="heroTab" v-for="currentClass in classes" :title="currentClass" v-bind:key="currentClass">
          <img class="heroIcon" v-for="hero in heroesJson" v-if="hero.class === currentClass" :key="hero.id" :src="getHeroImg(hero.name)" @click="selectedHero = hero"/>
        </b-tab>
      </b-tabs>
    </b-card>
    <b-card bg-variant="dark">
      <img :src="getHeroImg(selectedHero.name)" style="width: 4em; margin-right: 0.5em; margin-bottom: 0.5em;" align="left"/>
      <h4>{{selectedHero.name}}</h4>
      <h5 style="color: lightgray; font-style: italic;">{{selectedHero.title}}</h5>
      <hr style="clear: left">
      <b-btn v-b-toggle.hero-info variant="primary" align="left">Info</b-btn>
      <b-btn v-b-toggle.hero-perks variant="primary" align="left">Perks</b-btn>
      <b-btn v-b-toggle.uw variant="primary" align="left">UW</b-btn>
      <b-btn v-b-toggle.ut variant="primary" align="left">UT</b-btn>
      <b-btn v-b-toggle.skills variant="primary" align="left">Skills</b-btn>
      <!-- HERO INFO -->
      <b-collapse id="hero-info" class="mt-2" accordion="accordion1">
        <hr>
        <div style="line-height: 0.5em; margin-top: 1em;">
          <p>Class: {{selectedHero.class}}</p>
          <p>Position: {{selectedHero.position}}</p>
          <p>Damage Type: {{selectedHero.type}}</p>
          <hr>
          <div style="float: left; margin-right: 2em;">
            <p style="color: red;">Main Stats</p>
            <p v-for="(value, key) in selectedHero['main stats']" :key="key">{{key}}: {{value}}</p>
          </div>
          <div style="float: left">
            <p style="color: red;">Sub Stats</p>
            <p v-for="(value, key) in selectedHero['additional stats']" :key="key" v-if="value != 0">{{key}}: {{value}}</p>
          </div>
        </div>
      </b-collapse>
      <!-- HERO PERKS -->
      <b-collapse id="hero-perks" class="mt-2" accordion="accordion1">
        <hr>
        <div>{{selectedHero.perks[0]}}</div>
        <div>{{selectedHero.perks[1]}}</div>
      </b-collapse>
      <!-- HERO UW -->
      <b-collapse id="uw" class="mt-2" accordion="accordion1">
        <hr>
        <img :src="getUwImg(selectedHero.name)" style="margin-right: 0.5em; margin-bottom: 0.5em; border: 0.2em solid white;" align="left"/>
        <p>{{selectedHero.uw.name}}</p>
        <p>{{selectedHero.uw.explanation}}</p>
        <p style="clear: left" v-for="(effects, index) in selectedHero.uw.effects" :key="index">
          { {{index}} }: <span v-for="(effect, index) in effects" :key="index">{{effect}}<span v-if="index != effects.length-1">, </span></span>
        </p>
      </b-collapse>
      <!-- HERO UT -->
      <b-collapse id="ut" class="mt-2" accordion="accordion1">
        <hr>
        <img :src="getUtImg(selectedHero.name)" style="margin-right: 0.5em; margin-bottom: 0.0em; border: 0.2em solid white;" align="left"/>
        <p>{{selectedHero.ut.name}}</p>
        <p>{{selectedHero.ut.description}}</p>
        <p style="clear: left" v-for="(effects, index) in selectedHero.ut.effects" :key="index">
          { {{index}} }: <span v-for="(effect, index) in effects" :key="index">{{effect}}<span v-if="index != effects.length-1">, </span></span>
        </p>
      </b-collapse>
      <!-- HERO SKILLS -->
      <b-collapse id="skills" class="mt-2" accordion="accordion1">
        <div :key="index" v-for="(skill, index) in selectedHero.skills">
          <hr>
          <p><b>{{skill.name}} [Cost: {{skill.cost}}] [Cooldown: {{skill.cooldown}}]</b></p>
          <p>{{skill.explanation}}</p>
          <p>{{skill.id}}</p>
          <b-btn v-b-toggle="'books'+index" variant="primary" align="left">Attributes</b-btn>
          <b-btn v-b-toggle="'perks'+index" variant="primary" align="left">Perks</b-btn>
          <b-collapse :id="'books'+index" class="mt-2" accordion="accordion2">
            <div v-for="attr in skill.attributes" :key="attr">{{attr}}</div>
          </b-collapse>
          <b-collapse :id="'perks'+index" class="mt-2" accordion="accordion2">
            <div>{{skill.perks[0]}}</div>
            <div>{{skill.perks[1]}}</div>
          </b-collapse>
        </div>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import json from './data/heroes.json'

var classes = []
var selectedHero = json[0]
var i, j
for (i = 0, j = 0; i < json.length; i++) {
  if (classes.indexOf(json[i].class) === -1) {
    classes[j] = json[i].class
    j++
  }
}

export default {
  name: 'Heroes',
  data () {
    return {
      heroesJson: json,
      selectedHero: selectedHero,
      classes: classes,
      books: [],
      response: [],
      errors: []
    }
  },
  methods: {
    getHeroImg (hero) {
      return require('./images/heroes/' + hero + '.png')
    },

    getUwImg (hero) {
      return require('./images/uw/' + hero + '.png')
    },

    getUtImg (hero) {
      return require('./images/ut/' + hero + '.png')
    }
  }
}
</script>

<style scoped>
hr {
  border-color: white;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.heroes {
  color: white;
}
.heroIcon {
  border: 5px solid white;
  cursor: pointer;
  transition: 0.3s;
  width: 100px;
  margin: 2px;
}
.heroIcon:hover {
  border: 5px solid red;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
