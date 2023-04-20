[mitm]
hostname = biz.caiyunapp.com,biz.cyapi.cn,cdn-w.caiyunapp.com,ad.cyapi.cn,gateway.caixin.com

[rewrite_local]
https?:\/\/biz\.(caiyunapp|cyapi)\.(com|cn)\/(membership_rights|v2\/user) url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/cyw.js
https:\/\/cdn-w\.caiyunapp\.com\/p\/app\/activity url reject
https:\/\/biz\.cyapi\.cn\/p\/v1\/entries url reject-dict

^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth) url script-request-header https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/CaiXin/Script/CaiXin.js

