import React, {useState, useEffect} from "react";
import storeItems from "../../datos/productos.json";
import { Item } from "./Item";
import { ButtonList } from "../filtro/botonFiltro";
import { Link } from "react-router-dom";

export const ItemList = () => {

//localstorage
  const [idLibro, setIdLibro] = useState("");

  useEffect(() => {
      localStorage.setItem("idLibro", JSON.stringify(idLibro));
  }, [idLibro]);

//listar items
  const allCategories = [
		'Todos',
		...new Set(storeItems.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(storeItems);

	const filterCategory = (category) => {
		if (category === 'Todos'){
			setArticles(storeItems)
			return
		}

		const filteredData = storeItems.filter(article => article.category === category);
		setArticles(filteredData)
	}


  return (
    <div className="d-flex flex-column">
      <ButtonList categories={categories} filterCategory={filterCategory}/>
      <div className="items-list">
        {articles.map((product) => {
          return(
            <Link to={"/descripcion"} onMouseOver={() => {setIdLibro(product.id)}}>
              <Item {...product} />
            </Link>
          )
          ++id;
        })}
      </div>
    </div> 
  );
};
