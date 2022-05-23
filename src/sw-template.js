importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.loadModule('workbox-background-sync');

workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );

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


// posteo de email offline

const backgroundSyncPlugin = new BackgroundSyncPlugin('emails',{
    maxRetentionTime: 60 * 48
});

// registerRoute(
//     new RegExp('https://api.emailjs.com/api/v1.0/email/send'),
//     new NetworkOnly({
//         plugins:[backgroundSyncPlugin]
//     }),
//     'POST'
// );

registerRoute(
    ({request, url})=>{
        if( 'https://api.emailjs.com/api/v1.0/email/send' == url.href ){
            console.log('se registro')
            return true
        }
        return false
    },
    new NetworkOnly({
        plugins:[backgroundSyncPlugin]
    }),
    'POST'
);