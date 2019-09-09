<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      wrap
    >
      <v-flex 
      xs12 
      md8 
      lg8
      >
        <v-card>

            <v-card-title primary-title>
            <div>
                <div class="headline font-weight-black text-uppercase">{{ student.name }}</div>
                <br>
                <v-flex xs6>
                <v-textarea
                  name="nombre"
                  label="Nombre"
                  v-model=student.name
                ></v-textarea>
              </v-flex>
              <v-flex xs6>
                <v-textarea
                  name="descripción"
                  label="Descripción"
                  v-model=student.rut
                ></v-textarea>
              </v-flex>
              <v-flex xs6>
                <v-textarea
                  name="descripción"
                  label="Descripción"
                  v-model=student.birthday
                ></v-textarea>
              </v-flex>
              <v-flex xs6>
                <v-textarea
                  name="descripción"
                  label="Descripción"
                  v-model=student.career
                ></v-textarea>
              </v-flex>
              <v-btn color="success" @click="createProposal()">Actualizar</v-btn>
              <v-btn color="error" @click="eliminarPropuesta()">Eliminar</v-btn>
            </div>
            </v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

/* eslint-disable */

import axios from 'axios';
import router from '@/router';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'student-create',
  data () {
    return {
      student : {}
    }
  },
  created() {
    this.createStudent();
  },
  methods: {
    createStudent(){
      this.student.name
      this.student.rut
      this.student.birthday
      this.student.career
      axios
      .put(this.serverURL + '/students/', this.student)
      .then(response => {
        console.log(response)
        //router.push({ name: 'home' })
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  computed: {
    ...mapState([
      'serverURL'
    ])
  }
}
</script>