importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.loadModule('workbox-background-sync');

workbox.precaching.precacheAndRoute( [{"revision":"d2653d88527861213a198bcd7fd8da95","url":"asset-manifest.json"},{"revision":"4e50f157a1f4d27fd6be1884d17fe2af","url":"icons8-code-32.png"},{"revision":"31e378a2352330bf83e01a7ac004e37c","url":"index.html"},{"revision":"34d40a0886b3a0785de2f6324c04f348","url":"manifest.json"},{"revision":"72937933d2e81081864fe4935d21f53f","url":"portfolio-96.png"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"337a6a6dd68bf3d44df6e09242504247","url":"static/css/main.90ecbc80.css"},{"revision":"23aca06ceec6db021bbf2169b1714c31","url":"static/js/937.659100b1.chunk.js"},{"revision":"fdab6a50551e132131b03b5009502db5","url":"static/js/main.23416dee.js"},{"revision":"1945b5f52a42e525fe0a8c1410f1de22","url":"static/js/main.23416dee.js.LICENSE.txt"},{"revision":"e8cbb99826c014184fb83423f54abee3","url":"static/media/1200px1200-React.svg.7789dd4f6f153f56d0a7.png"},{"revision":"5f5d1928d1c8489acb1b5f62fa190bf5","url":"static/media/1280px-Node.js_logo.svg.a7bb19c7bf548aa8d385.png"},{"revision":"2e3777ba2de08272d3cf714af04316a9","url":"static/media/1452px-CSS3_logo_and_wordmark.svg.137e4615d8ae97e3cf04.png"},{"revision":"8cce726134f156ff63ea14eb6259b4e3","url":"static/media/480px-HTML5_logo_and_wordmark.svg.82e676751caeb2930a23.png"},{"revision":"521cfe410751a1281bd246999739a3b9","url":"static/media/600px-Whatsapp_logo_svg.330aaf3d533c959581e5.png"},{"revision":"313fa45cd9547b9a034ac4382c66e2d4","url":"static/media/Bootstrap_logo.svg.f55d21f2f95dd616b7b2.png"},{"revision":"0c8fadee1990067b6ac667812ca7ccaf","url":"static/media/captura-heroes-app.cbd50e228f2c3a25b6a2.jpg"},{"revision":"b43eafcb4958dbfdce1197d0e00384b5","url":"static/media/captura-map-app.222d8992d4749561eb8f.jpg"},{"revision":"ba5a1c449902ff71af57f68d7e09d275","url":"static/media/captura-nodejs-clima-app.86054c40de93f3860706.jpg"},{"revision":"e1c688740d73eb9e4effc5b2b197665f","url":"static/media/captura-portfolio-app.22c2bf755bda43581efd.jpg"},{"revision":"1ca97f9ac33f2d052435ec8cf7b4d323","url":"static/media/captura-react-gifapp.f778faa3cbc843cad4c7.jpg"},{"revision":"e713fa3ea8de1f5787fe33994995c831","url":"static/media/captura-storybook-react.7a519d834f3df7cc9bfe.jpg"},{"revision":"c3742eb7509bc5206371d46e36604d75","url":"static/media/captura-turnero-app.9dc611d555cfe1a607fa.jpg"},{"revision":"98eb3432f0cfe9c4c37db1755144ea46","url":"static/media/Gmail_icon_(2020).svg.0ecbfce4670434edf6fd.png"},{"revision":"0cded3a3276425911d55a2552bf361bf","url":"static/media/JavaScript-logo.266bd9fb2663dcc057b4.png"},{"revision":"772175ff1df43fd3c0bd3b594574cd68","url":"static/media/kisspng-node-js-javascript-react-logo-express-js-javascript-logo-5b4ca5c70f0195.6239386615317498310615.478c590a266bed215577.png"},{"revision":"5130d87c289b34bfc33d47fb586d365f","url":"static/media/LinkedIn_logo_initials.bb933d6809d6410387a0.png"},{"revision":"95e75b81fe9d8bdc1aa317e6319d0dbc","url":"static/media/Octicons-mark-github.50b995ed6606464b4f1d9976934fc66e.svg"},{"revision":"6ea3050f601eaf4ad5375348b43ff67d","url":"static/media/profile-abel.01deecc6d1c83566b85d.jpg"},{"revision":"b4e23a502e44692d9f3c8b427ac23e01","url":"static/media/react-redux-logoPNG.1edba70acbe0a2484e24.png"},{"revision":"ce62bb02d90a3aa332a21b94573f2448","url":"static/media/Typescript_logo_2020.svg.a66f27784365c9bb593e.png"}] );

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;  

const urlRecording = [
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
];

registerRoute(
    ({request, url})=>{
        
        if( urlRecording.includes( url.href )){
            return true
        }
        return false
    },
    new CacheFirst()
)

// registerRoute(
//     new RegExp('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'),
//     new CacheFirst()
// );
// registerRoute(
//     new RegExp('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css'),
//     new CacheFirst()
// );
// registerRoute(
//     new RegExp('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'),
//     new CacheFirst()
// );
// registerRoute(
//     new RegExp('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'),
//     new CacheFirst()
// );

// posteo de email offline

const backgroundSyncPlugin = new BackgroundSyncPlugin('emails',{
    maxRetentionTime: 60 * 48
});

registerRoute(
    new RegExp('https://api.emailjs.com/api/v1.0/email/send'),
    new NetworkOnly({
        plugins:[backgroundSyncPlugin]
    }),
    'POST'
);
