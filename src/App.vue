<template>
    <div id="wechat">
        <div class="header">
            
        </div>

        <div class="main">
            <div class="main-inner">
                <div class="panel">
                    <div class="user-info">

                    </div>
                    <div class="search-bar"></div>
                    <div class="tab"></div>

                    <div class="nav-view">
                        <div class="scroll-wrapper chat-list">
                            <div class="chat-item slide-left active">
                                <div class="ext">
                                    <p class="attr">21:49</p>
                                </div>
                                <div class="avatar">
                                    <img class="img" src="/cgi-bin/mmwebwx-bin/webwxgetheadimg?seq=0&amp;username=@@e17d5877971a1021b06249e978e31821a8e01ceced60886ef8ed2c2953c76100&amp;skey=@crypt_ffc1d3cf_a099ab1763414360393fe3af17ff8e27" mm-src="/cgi-bin/mmwebwx-bin/webwxgetheadimg?seq=0&amp;username=@@e17d5877971a1021b06249e978e31821a8e01ceced60886ef8ed2c2953c76100&amp;skey=@crypt_ffc1d3cf_a099ab1763414360393fe3af17ff8e27" alt="">
                                </div>
                                <div class="info">
                                    <h3 class="nickname">
                                        <span class="nickname-text ">东望厨房推门改移门群</span>
                                    </h3>

                                    <p class="msg">
                                        <span>美梦成真3-903:那肯定是移门好前题就是能放冰箱</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="copyright">© 2017</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'wechat',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
}
</script>

<style lang="scss">
    @import "./assets/style";
</style>
