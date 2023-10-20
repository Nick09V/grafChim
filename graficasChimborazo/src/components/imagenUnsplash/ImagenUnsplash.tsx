
type UnsplashImage = {
    id: string;
    name: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  };
  
  import { useEffect, useState } from 'react';

  const UnsplashImages = () => {
    const [images, setImages] = useState<UnsplashImage[]>([]);
    const accessKey = 'r8JtlDyglHJGzhD5X_1Emg4KIpryH7jjoEJHyo6CrAs'; // Reemplaza con tu clave de API de Unsplash
    const numberOfImages = 1; // Cantidad de imágenes que deseas obtener
  console.log(numberOfImages); 
    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Client-ID ${accessKey}`
        }
      };
  
      const fetchImages = async () => {
        try {
          const imagePromises = [];
          for (let i = 0; i < numberOfImages; i++) {
            const response = await fetch('https://api.unsplash.com/photos/random', requestOptions);
            const data = await response.json();
  
            // Verifica si la respuesta es un mensaje de error
            if (data.errors) {
              if (data.errors[0].code === "RateLimitExceeded") {
                console.error("Excediste el límite de solicitudes. Espera antes de hacer más solicitudes.");
              } else {
                console.error("Error desconocido:", data.errors[0].code);
              }
            } else {
              imagePromises.push(data);
            }
          }
          const imageResults = await Promise.all(imagePromises);
          setImages(imageResults);
        } catch (error) {
          console.error('Error al cargar las imágenes', error);
        }
      };
  
      fetchImages();
    }, [accessKey, numberOfImages]);
  
    return (
      <div>
        <h1>Imágenes de Unsplash</h1>
        <div className="image-container">
          {images.map(image => (
            <><img key={image.id} src={image.urls.small} alt={image.alt_description} /><p>Fotografo: {image.name}</p></>
          ))}


        </div>
      </div>
    );
  }
  
  export default UnsplashImages;
  
