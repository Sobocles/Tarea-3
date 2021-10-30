export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
    destacado:boolean;
}

export let ListaNoticias:Array<Noticias>=[
{ id:1,
  idCategoria:1,
  titulo:"Noticia 1",
  autor:"autor noticia 1",
  fecha:Date().toString(),
  imagen:"1.png",
  texto: "texto de la noticia 1",
  destacado:true
},

{ id:2,
    idCategoria:2,
    titulo:"Noticia 2",
    autor:"autor noticia 2",
    fecha:Date().toString(),
    imagen:"2.png",
    texto: "texto de la noticia 2",
    destacado:true
  },
  { id:3,
    idCategoria:3,
    titulo:"Noticia 3",
    autor:"autor noticia 3",
    fecha:Date().toString(),
    imagen:"3.png",
    texto: "texto de la noticia 3",
    destacado:true
  },
    { id:4,
      idCategoria:4,
      titulo:"Noticia 4",
      autor:"autor noticia 4",
      fecha:Date().toString(),
      imagen:"4.png",
      texto: "texto de la noticia 4",
      destacado:true
    },
    
    { id:5,
        idCategoria:5,
        titulo:"Noticia 5",
        autor:"autor noticia 5",
        fecha:Date().toString(),
        imagen:"5.png",
        texto: "texto de la noticia 5",
        destacado:true
      },
      { id:6,
        idCategoria:6,
        titulo:"Noticia 6",
        autor:"autor noticia 6",
        fecha:Date().toString(),
        imagen:"6.png",
        texto: "texto de la noticia 6",
        destacado:true
      },
      { id:7,
        idCategoria:7,
        titulo:"Noticia 7",
        autor:"autor noticia 7",
        fecha:Date().toString(),
        imagen:"7.png",
        texto: "texto de la noticia 7",
        destacado:true
      },
  
];
