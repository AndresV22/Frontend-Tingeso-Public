import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
    state:
    {
    serverURL: 'http://projecthunter.tk:8080/symbiose',
    },
    actions: 
    {
        async getAllProposals() {
            try {
                await axios
                    .get(this.state.serverURL + '/proposals/')
                    .then(response => {
                        //console.log(response)
                        //console.log(response.data)
                        const proposals = response.data
                        if (proposals.length != 0) {
                            this.state.proposalList = proposals
                            var proplist = this.state.proposalList;
                            //console.log(proplist)
                        } else {
                            console.log('No se han encontrado propuestas')
                        }
                    })
                    .catch(e => {
                        console.log(e.response)
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }
})