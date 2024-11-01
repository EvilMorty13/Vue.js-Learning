<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme=='sale'}">
            <h1>{{header}}</h1>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>

export default{
    props:['header','text','theme'],
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}

</script>

<style scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: rgb(8, 243, 149);
    border-radius: 10px;
}

.modal.sale{
    background: rgb(255, 2, 53);
}

.sale h1{
    color: white;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(63, 61, 61, 0.5);
    width: 100%;
    height: 100%;
}

</style>