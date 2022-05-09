
Vue.createApp({
    data(){      //vamos a crear todas las variables  necesarias
      return{
        personajes:[],
        personajesFiltrados: [],
        personajesFavoritos:[],
        textoIngresado:"", 
        casas: [], //guardo los filtros en un arreglo
      }
    },

    created(){      //cosas que van a suceder cuando esta cargando la pagina, etc (usamos fetch)
        fetch("http://hp-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data =>{
            this.personajes = data
            this.personajesFiltrados = this.personajes   //guardo los personajes en data
        })
        this.contador
    },
    methods:{       //una vez que tengo la pagina cargada - (metodo que nos ejecute el filtro)
      agregarFavoritos: function(personaje){
        if(!this.personajesFavoritos.includes(personaje)){ //(lo tengo que negar) si no lo incluye, que lo agregue (que lo pushee dentro del array)
          this.personajesFavoritos.push(personaje) 
        }
      },
      removerFavoritos: function(personaje){
        this.personajesFavoritos = this.personajesFavoritos.filter(pj => pj.name !== personaje.name)  //me va a devolver todos los personajes que tengan distinto nombre (Se hace un filtro a si mismo)
      },
  
    },
    computed:{  //si quiero que la funcion este escuchando todo el tiempo, y en el html tambien tengo que ponerla {{....}}, siempre del div #app
      buscar: function(){
        this.personajesFiltrados = this.personajes.filter(personaje => personaje.name.toUpperCase().includes(this.textoIngresado.toUpperCase()))
      } 
    }
  }).mount('#app')


  