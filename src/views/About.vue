<template>
  <div style="margin: 0 10px;">
    <h1>Tabang</h1>

    <Row class="container" :gutter="20">
      <i-col :xs="5" :md="5" :lg="5">
        <Menu
          theme="dark"
          active-name="1"
          style="height: 100vh; overflow: auto;"
        >
          <MenuGroup title="Emergencies">
            <MenuItem :name="i" v-for="(rep,i) in report" :key="i" @click.native="currentRep(rep)">
              <h3>{{rep.desc}}</h3>
              <!-- <p>Sugbo Mercado</p> -->
              <p>{{rep.time}}</p>
            </MenuItem>
            <!-- <MenuItem name="2">
              <h3>Fever</h3>
              <p>Sudlon, Lahug</p>
              <p>00:001</p>
            </MenuItem> -->
          </MenuGroup>
        </Menu>
      </i-col>

      <i-col :xs="14" :md="14" :lg="14" class="detail-wrapper" v-if="show">
        <h3>Name:</h3>
        <p>John Doe</p>
        <h3>Phone #:</h3>
        <p>0909099</p>
        <h3>Address:</h3>
        <p>Sugbo Mercado</p>

        <!-- <div id="map"></div> -->
        <Map></Map>

        <h3>Details:</h3>
        <p>
          {{current.desc}}
        </p>
      </i-col>

      <i-col :xs="5" :md="5" :lg="5" v-if="show">
        <div v-show="initial">
          <h2>Near correspondants</h2>

          <div class="cor-wrapper">
            <Form :model="form">
              
              <div v-for="(res, index) in responder" :key="index" style="width: 100%">
                <CheckboxGroup v-model="form.checkbox">
                  <Checkbox :label="res.id">{{res.fullName}}</Checkbox>
                </CheckboxGroup>
              </div>
            </Form>
            
          </div>

          <Button type="success" long @click="send">Send Respondents</Button>
        </div>
        <div v-show="!initial">
          <h2>Status</h2>
          <Status/>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>

import {getAllResponder, getReports, sendResponder} from '../services/report'
import Map from '@/components/Map.vue';
import Status from '@/components/Status.vue';

export default {
  data() {
    return {
      
      initial: true,
      report: '',
      current: {},
      show: false,
      responder: {},
      form: {
        checkbox: [],
        
      },
    };
  },
  components: {
    Map, Status
  },
  updated () {
    console.log(this.form);
  },
  methods: {
    getAllResponder() {
      getAllResponder((err, result) => {
        console.log("Responders: ", result)
        this.responder = result;
      })
    },
    getAllReports() {
      getReports((err, result) => {        
        this.report = result;
      })
    },
    send(){
      let data = {check: this.form.checkbox, id: this.current.reportReference}
      console.log(data)
      sendResponder((data), (error, cb)  => {
        console.log("zzzzzz")
      })
      this.initial = false;
    },
    currentRep(rep){
      this.current = rep;
      this.show = true;
      this.initial = true;
      console.log(this.current)
    },
    currentResponder(){

    }
  },
  mounted() {
    this.getAllReports()
    this.getAllResponder();
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 200px;
  background: url(../assets/img/map.png);
  background-position: center;
}
h2 {
  padding: 10px;
}
h3{
  padding-top: 8px;
}
.cor-wrapper {
  height: 70vh;
  overflow: auto;
  text-align: left;
}
.inline {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
}
</style>
