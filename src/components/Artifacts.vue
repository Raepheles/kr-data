<template>
  <div class="artifacts">
    <b-card style="margin-bottom: 2em; text-align: center;" no-body bg-variant="dark">
      <b-tabs card>
        <b-tab class="artifactTab" v-for="letter in firstLetters" :title="letter" v-bind:key="letter">
          <img class="artifactIcon" v-for="artifact in artifactsJson" v-if="artifact.name.substring(0, 1) === letter" :key="artifact.name" :src="getArtifactImg(artifact.name)" @click="selectedArtifact = artifact"/>
        </b-tab>
      </b-tabs>
      <hr>
      Type artifact name below. Recommendations will appear.
      <b-form-input class="searchBox" v-model="searchEntry"/>
      <hr>
      <span style="text-align: center;">
      <img class="artifactIcon"
      v-for="artifact in artifactsJson"
      v-if="artifact.name.toLowerCase().includes(searchEntry.toLowerCase()) && searchEntry != ''" :key="artifact.name"
      :src="getArtifactImg(artifact.name)"
      @click="selectedArtifact = artifact"/>
      </span>
    </b-card>
    <!-- Artifact Display -->
    <b-card bg-variant="dark">
      <img :src="getArtifactImg(selectedArtifact.name)" width="128" height="128" style="margin-right: 0.5em; margin-bottom: 0.0em; border: 0.2em solid white;" align="left"/>
      <p>{{selectedArtifact.name}}</p>
      <p>{{selectedArtifact.description}}</p>
      <p style="clear: left" v-for="(effects, index) in selectedArtifact.effects" :key="index">
        { {{index}} }: <span v-for="(effect, index) in effects" :key="index">{{effect}}<span v-if="index != effects.length-1">, </span></span>
      </p>
    </b-card>
  </div>
</template>

<script>
import json from './data/artifacts.json'

var firstLetters = []
var selectedArtifact
var i, j
for (i = 0, j = 0; i < json.length; i++) {
  if (firstLetters.indexOf(json[i].name.substring(0, 1)) === -1) {
    firstLetters[j] = json[i].name.substring(0, 1)
    j++
  }
}
firstLetters.sort()
for (i = 0; i < json.length; i++) {
  if (json[i].name.substring(0, 1) === firstLetters[0]) {
    selectedArtifact = json[i]
    break
  }
}
export default {
  name: 'Artifacts',
  data () {
    return {
      artifactsJson: json,
      selectedArtifact: selectedArtifact,
      firstLetters: firstLetters,
      searchEntry: '',
      books: [],
      response: [],
      errors: []
    }
  },
  methods: {
    getArtifactImg (artifact) {
      var img
      try {
        img = require('./images/artifacts/' + artifact + '.png')
      } catch (err) {
        img = null
      }
      if (img == null) {
        return require('./images/placeholder.png')
      } else {
        return img
      }
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
.artifacts {
  color: white;
}
.artifactIcon {
  border: 5px solid white;
  cursor: pointer;
  transition: 0.3s;
  width: 100px;
  margin: 2px;
}
.artifactIcon:hover {
  border: 5px solid red;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.searchBox {
  width: 80%;
  margin: 10px auto;
}
@media screen and (max-width: 600px) {
    .searchBox {
        width: 100%;
    }
}
</style>
