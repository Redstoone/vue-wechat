<template>
    <div class="header min-header">
        <a href="/">
            <img src="/static/img/logo.png">
            <span class="h-txt">{{ title }}</span>
        </a>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    export default {
        props: ['title'],
        // computed: {
        //     ...mapGetters(['head'])
        // },
        name: 'chat-header',
    }
</script>