import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

        const [categories, setCategories] = useState(['Overwatch'])

        const onAddCategory = (newCategory) => {
            //categories.push(onNewCategory);

            if (categories.includes(newCategory) ) return;

            //console.log(newCategory);
            setCategories ([newCategory,...categories]);
        }

        return (
            <>
                {/* Titulo */}
                <h1>Gif para los panas</h1>

                {/* Input */}
                <AddCategory 
                    //setCategories= {setCategories} 
                    onNewCategory = {onAddCategory}
                
                />

                    {/* Listado de gif */}
                    

                   
                {
                        categories.map( (category) => (
                                <GifGrid
                                key={category}
                                category={category} />
                            ))
                            
                }
                        
                    


                    {/* Gif Item */}
                        
                
            
            </>
  )
}
