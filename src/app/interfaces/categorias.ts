export interface Categorias {
    id:number;
    titulo:string;
    color: string;
}

export let ListaCategorias:Array<Categorias>=[
    { id:1,
      titulo: "entretenimiento",
      color: "verde"
    },
    { id:2,
        titulo: "tecnologia",
        color: "rojo"
    },
    { id:3,
        titulo: "deporte",
        color: "rojoOscuro"
      },
      { id:4,
          titulo: "economia",
          color: "violeta"
      },
      { id:5,
        titulo: "salud",
        color: "azulOscuro"
    },
    { id:6,
        titulo: "mundo",
        color: "blue"
    },
    { id:7,
        titulo: "mundo",
        color: "blue",
    }

]