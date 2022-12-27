import {useState, useEffect, React} from 'react'
import useContentful from '../useContenful';



const ClientManager = (props) => {


    const {modules, setModules} = useState([]);
    const { getModules } = useContentful();

    useEffect (() => {
        getModules().then((response) => console.log(response));
    }, []);

    return (
        <div className="homeCardTopSpacing mx-5" md={3}>
          
        </div>
        
    )
}

export default ClientManager;