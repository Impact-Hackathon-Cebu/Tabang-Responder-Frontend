<template>
  <div style="margin: 0 -10px;">
    <h1>Tabang</h1>

    <Row class="container" :gutter="20">
      <i-col :xs="5" :md="5" :lg="5">
        <Menu
          theme="dark"
          active-name="1"
          style="height: 100vh; overflow: auto;"
        >
          <MenuGroup title="Emergencies">
            <MenuItem name="1">
              <h3>Heart Attack</h3>
              <p>Sugbo Mercado</p>
              <p>00:00</p>
            </MenuItem>
            <MenuItem name="2">
              <h3>Fever</h3>
              <p>Sudlon, Lahug</p>
              <p>00:001</p>
            </MenuItem>
          </MenuGroup>
        </Menu>
      </i-col>

      <i-col :xs="14" :md="14" :lg="14" class="detail-wrapper">
        <h3>Name:</h3>
        <p>John Doe</p>
        <h3>Phone #:</h3>
        <p>0909099</p>
        <h3>Address:</h3>
        <p>Sugbo Mercado</p>

        <div id="map"></div>

        <h3>Details:</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A facilis
          aliquam, suscipit obcaecati, rerum eius sunt exercitationem
          consequatur possimus, ex minus asperiores perferendis dolorem
          excepturi praesentium quasi placeat maxime animi!
        </p>
      </i-col>
      <i-col :xs="5" :md="5" :lg="5">
        <div v-if="initial">
          <h2>Near correspondants</h2>

          <div class="cor-wrapper">
            <ul>
              <li>
                <Checkbox v-model="cor1">
                  <div class="inline">
                    <h3>John doe</h3>
                    <p>Contact #</p>
                  </div>
                </Checkbox>
              </li>
              <li>
                <Checkbox v-model="cor2">
                  <div class="inline">
                    <h3>John doe</h3>
                    <p>Contact #</p>
                  </div>
                </Checkbox>
              </li>
            </ul>
          </div>

          <Button type="success" long @click="send">Send Respondents</Button>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>

import {getResponderById, getReports} from '../services/report'


export default {
  data() {
    return {
      cor1: false,
      cor2: false,
      initial: true
    };
  },
  methods: {    
    getCurrentResponder() {
      getResponderById("U85Obd8cEmvvBuoXruwa").then(user => {
        console.log("Callback: ", user)
      })
    },
    getAllReports() {
      getReports((err, result) => {
        console.log("Callback result: ", result)
      })
    },
    send(){}    
  },
  mounted() {
    this.getAllReports()
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
