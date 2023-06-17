import React, { useEffect, useState } from 'react';
import getData from '../../services/api';
import Card from '../Card';

const List = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
          .then(data => {
            setData(data.results)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            {data.map((card) => (
                <Card  item={card} />
            ))}
        </div>
    )
}

export default List