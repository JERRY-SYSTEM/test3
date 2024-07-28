import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
    {text: "文档", icon: "read", link: "/docs/"},
    {text: "下载", icon: "link", link: "/download"},
    {text: "捐赠", icon: "selection", link: "/donate/"},
    {text: "友链", icon: "community", link: "/friends/"},
    {
        text: "关于", icon: "people", children: [{
            text: "Glow Studio",
            link: "https://studio.000708.xyz"
        }, {
            text: "微信公众号",
            link: "https://yanxuan.nosdn.127.net/41c14c219f06fcc1ceefc861d3c391a1.jpg"
        }, {
            text: "QQ交流群",
            link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=EEh7V2N3pRqAWGrPWW2kSTwdKmZHm2SD&authKey=wwaCNoL3F%2Bi5wbyUy7LL88G1L%2FC29ARggZ6PJa2ue5%2BAZMyLmlDsI6a9bP6%2BQfOK&noverify=0&group_code=948504002"
        }]
    }
]);

