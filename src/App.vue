<template>
    <div id="wechat">
        <chat-header title="wechat"></chat-header>

        <div class="main">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <div class="copyright">© 2017</div>
    </div>
</template>

<script>
    import chatHeader from './components/header.vue'

    export default {
        name: 'wechat',
        components: {
            chatHeader
        }
    }

</script>

<style lang="scss">
    @import "./assets/style";
</style>