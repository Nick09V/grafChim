import { useParams } from "react-router-dom";


export const SelloDetail = () => {
    const params = useParams(); 
    console.log(params);
return (
<div>
        Producto Con ID de: {params.id}
    </div>
)

    
}