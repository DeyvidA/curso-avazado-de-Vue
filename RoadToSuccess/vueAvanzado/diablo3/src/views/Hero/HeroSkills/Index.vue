<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <b-nav pills small>
      <b-nav-item :active="!isPassiveSkillsActive" @click="changeComponent('ActiveSkills')">Active</b-nav-item>
      <b-nav-item :active="isPassiveSkillsActive" @click="changeComponent('PassiveSkills')">Passive</b-nav-item>
    </b-nav>

    <!-- Con keep-alive logramos que el componente no se vuelva a re-renderizar una vez que ya estaba renderizado -->
    <keep-alive>
      <!-- component es un componente que me permite cargar cualquier componente a través de su propiedad is, es bueno para usar lazy loading de componentes -->
      <component :is="activeComponent" :skills="componentProps"/>
    </keep-alive>

    <!-- <ActiveSkills :skills="skills.active"/>
    <hr>
    <PassiveSkills :skills="skills.passive"/> -->

  </div>
</template>

<script>
/* import ActiveSkills from './ActiveSkills'
import PassiveSkills from './PassiveSkills' */

export default {

  name: 'HeroSkills',

  data () {
    return {
      activeComponent: 'ActiveSkills'
    }
  },

  components: {
    ActiveSkills: () => import(/* webpackChunkName: "ActiveSkills" */'./ActiveSkills'),
    PassiveSkills: () => import(/* webpackChunkName: "PassiveSkills" */'./PassiveSkills')
  },

  props: {
    skills: {
      required: true,
      type: Object
    }
  },

  methods: {

    changeComponent (component) {
      this.activeComponent = component
    }

  },

  computed: {

    /**
     * Dinamyc props for async dynamic components
     * @returns {String}
     */
    // Con esto estamos generando "props" dinámicas
    // Si el componente es ActiveSkills pasa como props las activas, si no, las pasivas
    componentProps () {
      return this.activeComponent === 'ActiveSkills' ? this.skills.active : this.skills.passive
    },

    // Nos dice si el componente "HabilidadesPasivas" está activo o no
    isPassiveSkillsActive () {
      return this.activeComponent === 'PassiveSkills'
    }

  }

}
</script>
