import {defineStore} from 'pinia'


export const usePostsStore = defineStore('posts-store',{
  //Data
  state(){
    return{
      posts: [
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
          created_at: "12/06/2024",
          is_saved: false,
        },
        {
          id: 3,
          title: "fdgdff sdf sdf",
          body: "fgjrtfg sdxc lksdf slkdfns ldfksdnflk sdfkls klsdfnskldf sdklf sdlkfsdklfjslfsdlkf sklfsdklf sldkfmsf",
          author: "jon doe 2",
          created_at: "10/06/2024",
          is_saved: false,
        },
      ]
    }
  },

  //Computed
  getters:{
    sorted() {
      return this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },
    saved: (state) => state.posts.filter(p=>p.is_saved).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  },
  //Methods
  actions: {
    addPost(post){
      this.posts.push({
        id: this.posts.length+1,
        title: post.title,
        body: post.body,
        author: 'Iron man',
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      })
    },
    deletePost(id){
      this.posts = this.posts.filter((p)=>p.id!==id)
    },
    savePost(id){
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved
    }
  }
})
