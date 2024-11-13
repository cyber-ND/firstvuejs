<template>
  <p>This is the about page</p>

  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/gallery">Gallery</RouterLink>
  <RouterLink to="/contact">Contact</RouterLink>
  
  
  
  <button @click="count++">You clicked Me {{ count }} times </button>

</template>


<script>
export default{
  data(){
    return { count:0 }
  }
}
</script>