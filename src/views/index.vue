<template>
    <div class="main-inner">
        <div class="panel">
            <div class="user-info">
                <div class="avatar">
                    <img class="img" src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=963058185&amp;username=@f5ee90154afa3cd0c4b3855e6dfcfe32&amp;skey=@crypt_ffc1d3cf_9f5aa873cae15d930d1f88ef99a99907" mm-src="/cgi-bin/mmwebwx-bin/webwxgeticon?seq=963058185&amp;username=@f5ee90154afa3cd0c4b3855e6dfcfe32&amp;skey=@crypt_ffc1d3cf_9f5aa873cae15d930d1f88ef99a99907" ng-click="showProfile($event)">
                </div>
                <div class="info">
                    <h3 class="nickname">
                        <span class="display-name ng-binding">ken</span>
                        <a class="opt" href="javascript:;"><i class="web_wechat_add"></i></a>
                    </h3>
                </div>
            </div>
            <div class="search-bar" id="searchBar">
                <i class="web_wechat_search"></i>
                <input class="frm-search" type="text" placeholder="搜索">
            </div>
            <div class="tab">
                <div class="tab-item">
                    <a class="chat" ui-sref="chat" title="聊天" href="#">
                        <i class="web_wechat_tab_chat web_wechat_tab_chat_hl"></i>
                    </a>
                </div>
                <div class="tab-item ng-scope" ng-if="isShowReader">
                    <a class="chat" ui-sref="read" title="阅读" href="#">
                        <i class="web_wechat_tab_public"></i>
                    </a>
                </div>
                <div class="tab-item no_extra">
                    <a class="chat" ui-sref="contact" title="通讯录" href="#">
                        <i class="web_wechat_tab_friends"></i>
                    </a>
                </div>
            </div>

            <div class="nav-view">
                <div class="scroll-wrapper chat-list">
                    <div class="chat-item slide-left active">
                        <div class="ext">
                            <p class="attr">21:49</p>
                        </div>
                        <div class="avatar">
                            <img class="img" src="/cgi-bin/mmwebwx-bin/webwxgetheadimg?seq=0&amp;username=@@e17d5877971a1021b06249e978e31821a8e01ceced60886ef8ed2c2953c76100&amp;skey=@crypt_ffc1d3cf_a099ab1763414360393fe3af17ff8e27"
                                mm-src="/cgi-bin/mmwebwx-bin/webwxgetheadimg?seq=0&amp;username=@@e17d5877971a1021b06249e978e31821a8e01ceced60886ef8ed2c2953c76100&amp;skey=@crypt_ffc1d3cf_a099ab1763414360393fe3af17ff8e27"
                                alt="">
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
</template>