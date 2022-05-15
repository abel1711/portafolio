import { Lenguaje } from "../interfaces/lenguaje";

export const lenguajeIN: Lenguaje ={
        isEnglish: true,
        home:['"Hello world"',
            "My name's Abel Amieva",
            "I'm a developer in training, open to work",
            'And this is my portfolio'],
        navbar:{
            link1:'Start',
            link2:'About me',
            link3:'Practices',
            link4:'Contact me',
        },
        aboutMe:{
            title:"Hi, I'm ",
            strong:"Abel 👋",
            p1:"I study Web Development in a self-taught way, through online courses and tutorials, this is how I have managed to create this page.",
            p2:"I love learning new things every day, and being able to contribute valuable ideas.",
            p3:"I am passionate about technologies, and I am fascinated with the uses that we can give them, it has no limits.",
            title2:"My knowledge",
            p4:"I am very excited to be able to put my knowledge into practice, and contribute to the growth of my work team."
        },
        practices:{
            title:"Hi, on this page I want to show you a little of the practices that I have done.",
            p1:"I have done these practices by following online courses, which cover topics such as ReactJS, NodeJS, Javascript, Typescript, handling the state of React applications with Redux or Context, tests with Jest, Socket.io, CRUD, JWT, MongoDb, Firebase, Services Worker and many more technologies, in my LinkedIn account I have the certificates of these courses.",
            title2:"Some practices",
            p2:"For more visit my "
        },
        modalEmail:{
            title1:'Contact',
            title2: 'ME!',
            label1: 'Name',
            label2: 'Email',
            label3: 'Message',
            button: 'Send',
            msgOk: 'Email sent successfully',
            msgErr: 'Something went wrong',
            msgSW: 'We will send your Email when you have connection'
        }
};
export const lenguajeES: Lenguaje = {
        isEnglish: false,
        home:['"Hola mundo"',
            "Mi nombre es Abel Amieva",
            "Soy un desarrollador en entrenamiento, buscando trabajo",
            'y este es mi portafolio'],
        navbar:{
            link1:'Inicio',
            link2:'Acerca de mi',
            link3:'Practicas',
            link4:'Contactame',
        },
        aboutMe:{
            title:"Hola, soy ",
            strong:"Abel 👋",
            p1:"Estudio Desarrollo Web de forma autodidacta, a través de cursos online y tutoriales, así he logrado crear esta página.",
            p2:"Me encanta aprender cosas nuevas cada día, y poder aportar ideas valiosas.",
            p3:"Me apasionan las tecnologías, y me fascinan los usos que les podemos dar, no tiene límites.",
            title2:"Mis conocimientos",
            p4:"Me emociona mucho poder poner en práctica mis conocimientos, y contribuir al crecimiento de mi equipo de trabajo."
        },
        practices:{
            title:"Hola, en esta página les quiero mostrar un poco de las prácticas que he hecho.",
            p1:"Estas prácticas las he realizado siguiendo cursos en línea, que abarcan temas como ReactJS, NodeJS, Javascript, Typescript, manejo del estado de aplicaciones de React con Redux o Context, pruebas con Jest, Socket.io, CRUD, JWT, MongoDb, Firebase, Services Worker y muchas tecnologías más, en mi cuenta de LinkedIn tengo los certificados de estos cursos.",
            title2:"Algunas practicas",
            p2:"Para más visita mi "
        },
        modalEmail:{
            title1:'Contactame!',
            title2: '',
            label1: 'Nombre',
            label2: 'Email',
            label3: 'Mensaje',
            button: 'Enviar',
            msgOk: 'Email enviado exitosamente',
            msgErr: 'Algo salio mal',
            msgSW: 'Enviaremos tu Email cuando tengas conexión'
        }
}