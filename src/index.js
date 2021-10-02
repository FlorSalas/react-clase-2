import React from 'react';
import ReactDOM from 'react-dom';

const ArrayCompras=["Pinolux", "Manteca", "Dulce de Leche"];
const TituloPorDefecto= "Por favor inclui un titulo (titulo por defecto)";


const ListaDeCompras= ()=>{
  return <ol>
    <li>{ArrayCompras[0]}</li>
    <li>{ArrayCompras[1]}</li>
    <li>{ArrayCompras[2]}</li>
  </ol>
}

const HolaMundo= (props)=>{

const {titulo}= props;

  if (props.titulo){ 
  return (
    <>
     <h1>{titulo}</h1>
    <ListaDeCompras />
    </>
  ) 
}else{
    return (
      <>
       <h1>{TituloPorDefecto}</h1>
      <ListaDeCompras />
      </>
    )
  }
}

const TituloFlecha= (props)=>{<h1>Bienvenido a  React (esto viene desde un componente)</h1>}


const RootElement= document.getElementById("root")
ReactDOM.render(<HolaMundo titulo= "Bienvenido a React (esto viene de una prop)"/>, <TituloFlecha />, RootElement)

/*ejercicio 8*/
/*Falta el import desde react.*/


/*ejercicio  9 */
/* a) no veria nada. */
/* b) se rompe react*/
/* c) I. Segun lo que entiendo esto es porque no estas pidiendo una parte del objeto escritor sino el nombre que le asigno a Autor */
    /*II.deberia ddeclarar como constante a props y asignarle  el  valor nombre. Luego solicitar en return props*/
/*d) En el html tengo que cambiar el id del ddiv por inicio tambien */