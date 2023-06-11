
import { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import storeItems from "../../datos/productos.json";

export default function AutoCompletado() {

//localstorage
const [datoBuscar, setBuscar] = useState("");

useEffect(() => {
    localStorage.setItem("buscar", JSON.stringify(datoBuscar));
    if(datoBuscar !== ""){
        localStorage.setItem("guardarBuscador", JSON.stringify(datoBuscar));
    }
}, [datoBuscar]);

//auto completado buscador
const[libros, setlibros]= useState(storeItems);
const[value, setValue]= useState("");
const[libroSeleccionado, setlibroSeleccionado]= useState({});

const onSuggestionsFetchRequested=({value})=>{
  setlibros(filtrarlibros(value));
}

const filtrarlibros=(value)=>{
    const inputValue=value.trim().toLowerCase();
    const inputLength=inputValue.length;

    let filtrado = storeItems.filter((libros)=>{
    let textoCompleto = libros.name;

    if(textoCompleto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes(inputValue)){
      return libros;
    }
  });

  return inputLength===0 ? [] : filtrado;
}

const onSuggestionsClearRequested = () =>{
  setlibros([]);
}

const getSuggestionValue=(suggestion)=>{
  return `${suggestion.name}`;
}

const renderSuggestion=(suggestion)=>(
  <div className='sugerencia' onClick={()=>seleccionarlibro(suggestion)} >
    {`${suggestion.name}`}
  </div>
);

const seleccionarlibro=(libro)=>{
  setlibroSeleccionado(libro);
}

const onChange=(e, {newValue})=>{
  setValue(newValue);
  setBuscar(newValue.toLocaleLowerCase());
}

const inputProps={
placeholder:"buscar libro...",
value,
onChange
};

const eventEnter=(e)=>{
if(e.key == "Enter"){
  let split = e.target.value.split('-');
  let libro ={
    name: split[0].trim(),
  };
  seleccionarlibro(libro);
}
}

  return (
     <Autosuggest 
      suggestions={libros}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={eventEnter}
     />
  );
}