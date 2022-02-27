<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">

    <b-table
      hover
      striped
      dark
      :items="heroes"
      :fields="fields"
      stacked="sm"
      small
    >

      <!-- v-slot:nombre-del-slot(nombre del campo que hemos definido en la variable fields)="variable a como queremos obtener esos ítems emitidos por el scoped slot" -->
      <template #cell(name)="data">
        <HeroIco :hero="data.item"/>
      </template>

      <template #cell(class)="data">
        <HeroClassLevel :hero="{ classSlug: data.item.classSlug, level: data.item.level }"/>
      </template>

      <template #cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>

    </b-table>

  </div>
</template>

<script>

import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'
import { formatNumber } from '../../../../filters/numeral'

export default {

  name: 'HeroesList',

  filters: {
    formatNumber
  },

  components: { HeroIco, HeroClassLevel },

  data () {
    return {
      fields: [
        {
          key: 'name', // <- La key es para decir cuál es la propiedad del objeto JSON que le pasamos en donde tiene que buscar
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  },

  props: {
    heroes: {
      required: true,
      type: Array
    }
  }

}
</script>
