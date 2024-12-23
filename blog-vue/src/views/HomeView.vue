<script setup>
import PostItem  from "@/components/PostItem.vue"
import MyWrapper from "@/components/MyWrapper.vue"



const posts = [
  {
    id: 1,
    title: "This great book!",
    body: "teel sfsk skdfkls skldfmslkd skdlfsdklf",
    author: "jon doe",
    created_at: "11/06/2023",
    is_saved: false,
  },
  {
    id: 2,
    title: "ASfsd sdf",
    body: "sdfsd sdxc lksdf slkdfns ldfksdnflk sdfkls klsdfnskldf sdklf sdlkfsdklfjslfsdlkf sklfsdklf sldkfmsf",
    author: "jon doe",
    created_at: "11/06/2024",
    is_saved: false,
  },
  {
    id: 3,
    title: "fdgdff sdf sdf",
    body: "fgjrtfg sdxc lksdf slkdfns ldfksdnflk sdfkls klsdfnskldf sdklf sdlkfsdklfjslfsdlkf sklfsdklf sldkfmsf",
    author: "jon doe 2",
    created_at: "11/06/2024",
    is_saved: false,
  },
];
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <MyWrapper>
      <PostItem :post="post"/>
    </MyWrapper>
  </div>
</template>


<style lang="scss" scoped>

</style>
