<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs10 md8 lg8>
        <v-row justify="center" xs6 md6 lg6>
            <v-text-field
              name="name"
              label="Nombre"
              v-model=student.name
            ></v-text-field>
        </v-row>
        <v-row xs6 md6 lg6>
            <v-text-field
              name="rut"
              label="Rut"
              v-model=student.rut
            ></v-text-field>
        </v-row>
        <v-row xs6 md6 lg6>
            <v-text-field
              name="birthday"
              label="Fecha de nacimiento"
              v-model=student.birthday
            ></v-text-field>
        </v-row>
        <v-row xs6 md6 lg6>
            <v-text-field
              name="career"
              label="Carrera"
              v-model=student.career
              @keypress.enter="createStudent()"
            ></v-text-field>
        </v-row>
        <v-btn color="success" @click="createStudent()">Inscribir</v-btn>
      </v-flex>
      </v-layout>

      <br>

      <v-layout justify-center>
      <v-flex xs12 md12 lg12>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Nombre</th>
              <th class="text-left">Rut</th>
              <th class="text-left">Nacimiento</th>
              <th class="text-left">Carrera</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in students" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.rut }}</td>
              <td>{{ item.birthday }}</td>
              <td>{{ item.career }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'student-create',
  data () {
    return {
      student : {},
      students: []
    }
  },
  created() {
    this.getAllStudents()
  },
  methods: {
    getAllStudents(){
      axios
      .get(this.serverURL + '/students/')
      .then(response => {
        this.students = response.data
      })
    },
    createStudent(){
      this.student.name
      this.student.rut
      this.student.birthday
      this.student.career
      axios
      .post(this.serverURL + '/students/create', this.student)
      .then(response => {
        this.getAllStudents()
        this.student.name=null
        this.student.rut=null
        this.student.birthday=null
        this.student.career=null
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