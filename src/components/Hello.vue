<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model='name'>
        </div>
        <div class="form-group">
          <label for="hierarchy">Hierarchy</label>
          <input type="text" class="form-control" id="hierarchy" placeholder="Hierarchy" v-model='hierarchy'>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model='email'>
        </div>
        <div class="form-group">
          <label for="employeeid">Employee Id</label>
          <input type="text" class="form-control" id="employeeid" placeholder="Enter Id" v-model='eid'>
        </div>
        <button type="button" v-on:click="addEmployee" class="btn btn-default">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Add Details',
      name: '',
      hierarchy: '',
      email: '',
      eid: ''
    }
  },
  methods: {

    addEmployee () {
      var data = {
        name: this.name,
        hierarchy: this.hierarchy,
        email: this.email,
        eid: this.eid
      }
      this.$http.post(
        'http://localhost:3000/addEmployee',
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}
</style>
