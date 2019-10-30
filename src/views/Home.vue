<template>
  <Row :gutter="20" style="margin: 0;">
    <i-col span="24"><h1>Tabang Dashboard</h1></i-col>

    <i-col :xs="8" :md="8" :lg="8" class="dashboard-section">
      <div class="container">
        <h3>New Emergency</h3>

        <div class="new">
          <Card
            :bordered="false"
            class="card-new"
            @click.native="modal1 = true"
          >
            <div slot="title" class="title">
              <h4 class="name">Name</h4>
              <a class="address">purok 11, Cebu city <Icon type="md-open"/></a>
              <p class="contact">Contact #</p>
            </div>

            <Row :gutter="20">
              <i-col :xs="24" :md="24" :lg="24">
                <p>Text info</p>
              </i-col>
            </Row>
          </Card>

          <Card
            :bordered="false"
            class="card-new"
            @click.native="modal1 = true"
          >
            <div slot="title" class="title">
              <h4 class="name">Name</h4>
              <a class="address">purok 11, Cebu city <Icon type="md-open"/></a>
              <p class="contact">Contact #</p>
            </div>

            <Row :gutter="20">
              <i-col :xs="24" :md="24" :lg="24">
                <p>Text info</p>
              </i-col>
            </Row>
          </Card>

          <Card
            :bordered="false"
            class="card-new"
            @click.native="modal1 = true"
          >
            <div slot="title" class="title">
              <h4 class="name">Name</h4>
              <a class="address">purok 11, Cebu city <Icon type="md-open"/></a>
              <p class="contact">Contact #</p>
            </div>

            <Row :gutter="20">
              <i-col :xs="24" :md="24" :lg="24">
                <p>Text info</p>
              </i-col>
            </Row>
          </Card>

          <Card
            :bordered="false"
            class="card-new"
            @click.native="modal1 = true"
          >
            <div slot="title" class="title">
              <h4 class="name">Name</h4>
              <a class="address">purok 11, Cebu city <Icon type="md-open"/></a>
              <p class="contact">Contact #</p>
            </div>

            <Row :gutter="20">
              <i-col :xs="24" :md="24" :lg="24">
                <p>Text info</p>
              </i-col>
            </Row>
          </Card>

          <Card
            :bordered="false"
            class="card-new"
            @click.native="modal1 = true"
          >
            <div slot="title" class="title">
              <h4 class="name">Name</h4>
              <a class="address">purok 11, Cebu city <Icon type="md-open"/></a>
              <p class="contact">Contact #</p>
            </div>

            <Row :gutter="20">
              <i-col :xs="24" :md="24" :lg="24">
                <p>Text info</p>
              </i-col>
            </Row>
          </Card>

          <Card
            :bordered="false"
            class="card-new"
            @click.native="modal1 = true"
          >
            <div slot="title" class="title">
              <h4 class="name">Name</h4>
              <a class="address">purok 11, Cebu city <Icon type="md-open"/></a>
              <p class="contact">Contact #</p>
            </div>

            <Row :gutter="20">
              <i-col :xs="24" :md="24" :lg="24">
                <p>Text info</p>
              </i-col>
            </Row>
          </Card>

          <Card
            :bordered="false"
            class="card-new"
            @click.native="modal1 = true"
          >
            <div slot="title" class="title">
              <h4 class="name">Name</h4>
              <a class="address">purok 11, Cebu city <Icon type="md-open"/></a>
              <p class="contact">Contact #</p>
            </div>

            <Row :gutter="20">
              <i-col :xs="24" :md="24" :lg="24">
                <p>Text info</p>
              </i-col>
            </Row>
          </Card>
        </div>
      </div>
    </i-col>

    <i-col :xs="8" :md="8" :lg="8" class="dashboard-section">
      <div class="container">
        <h3>Help is on the way</h3>

        <div class="new">
           <Status></Status>
        </div>
      </div>
    </i-col>

    <i-col :xs="8" :md="8" :lg="8" class="dashboard-section">
      <div class="container">
        <h3>Done</h3>

        <div class="new">
          <Map></Map>
        </div>
      </div>
    </i-col>

    <Modal v-model="modal1" title="Emergency ">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </Row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Status from '@/components/Status.vue';
import Map from '@/components/Map.vue';

export default {
  data() {
    return {
      modal1: false
    };
  },
  components: {
    Map, Status
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  }
};
</script>
