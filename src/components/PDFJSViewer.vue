<template>
<div>
  <iframe height="100%" width=100% :src="`${getFilePath}`" ></iframe>
</div>
</template>

<script>
export default {
  name: 'PDFJSViewer',
  props: {
    fileName: String,
    path:String
  },
  computed:{ 
    getFilePath: function () {
      if(this.fileName!==''){
          return this.path +'?file=' + this.fileName
      }
      return this.path 
    }
  }
}
</script>
<style scoped>
div {
  width: 50%;
  height: 79vh;
  min-width: 400px;
}
</style>