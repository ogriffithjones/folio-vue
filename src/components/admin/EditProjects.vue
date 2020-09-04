<template>

<div>

    <h2>{(mode)}Edit Project</h2>
  <form v-on:submit.prevent="checkForm">
      <div></div>
     <div>
       <label for="title">Title</label>
       <input 
       v-model="user.title" 
        name="description" 
        id="description" 
        type="text" 
       placeholder="Enter the Title"/>
     </div>

      <div>
       <label for="description">Description</label>
       <input 
       v-model="user.title" 
        name="description" 
        id="description" 
        type="text" 
       placeholder="Enter the Description"/>
     </div>

      <div>
          <label for="email">Email</label>
          <input v-model="user.email" type="text" name="email" id="email" />
      </div>
     
     <div>
         <input type="submit" value="submit"/>
     </div>
  </form>
    
</div>
  
</template>

<script>
export default {
    name:"EditProject",
    data: function () {
        return{
            mode:"New",
            errors:[],
            article:{
                title:null,
                description:null,
                email:null
            },
        };
    },
    methods: {
        checkForm: function() {
           if (this.editProject.tittle && this.edit) 
        },
    }
}
</script>

<style>

</style>