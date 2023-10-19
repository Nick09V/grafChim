export interface ISello {
    name: string,
    imgUrl: string,
    descripcion: string,
    colores: string[],
    id: number,
    tamano: string,
}
//caracterisiticas de cada sello



 export const SelloList = [
    {
        name: "sello de bolsillo",
        imgUrl: "/public/sello_png.png",
        descripcion:  "sello para usar en el bolsillo",
        colores: ["blanco ", "azul ", "rojo"],
        id: 1,
        tamano: "30 x 40 mm",
    },
    {
        name: "sello de escritorio",
        imgUrl: "https://4.bp.blogspot.com/-jClPnGU6GS4/V41vMkKnf3I/AAAAAAAABis/gBTFF7vyHIYaqJpxEkaJLibtWhR-XJoCwCLcB/s1600/sello3.png",
        descripcion:  "Sello para usar en el escritorio",
        colores: ["negro ", " gris ", "rojo"],
        id: 2,
        tamano: "50 x 60 mm",
    },

]
