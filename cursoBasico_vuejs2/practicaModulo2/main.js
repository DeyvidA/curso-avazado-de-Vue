Vue.component('modal', {
    props:['toggleModal'],
   data:function(){
      
       return{
           title:'kaizoku ore wa naru ',
       }
   },
   methods:{
     
       closeModal:function(){
           this.$emit('close')
       }
   },
   template: `
     <div class="modal-mask">
       <div class="modal-wrapper">
         <div class="modal-container">
           <h3>{{title}}</h3>

           <slot name="body"></slot>
           <footer>
             <button v-on:click="closeModal">Cerrar</button>
           </footer>
         </div>
       </div>
       
     </div>`
 })
 
 new Vue({
   el: '#app',
   data:function(){
       return{
           showModal:false
       }
   },
   methods:{
       toggleModal:function(){
           this.showModal=!this.showModal
       }
   }
 })