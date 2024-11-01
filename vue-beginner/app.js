const app = Vue.createApp({
    data(){
        return{
            url: 'https://www.espncricinfo.com/',
            showBooks: true,
            books:[
                {title:'The final empire', author: 'Brandon Sanderson',age: 45, img:'assets/1.jpg',isFav:true},
                {title:'Harry Potter', author: 'JK Rowling',age: 50, img:'assets/2.jpg',isFav:false},
                {title:'Lord of the rings', author: 'JRR Tolkien',age: 80, img:'assets/3.jpg',isFav:true}
            ],
            x:0,
            y:0,
        }
    },
    methods: {
        changeTitle(){
            this.title = "Words of Dragon"
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e,data){
            console.log(e,e.type);
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX,
            this.y = e.offsetY
        },
        handleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=>book.isFav)
        }
    }
})

app.mount('#app')