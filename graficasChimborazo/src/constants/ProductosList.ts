export interface ISello  {
    name: string,
    tipo: string,
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
        tipo: "sello",
        imgUrl: "/public/sello_png.png",
        descripcion:  "sello para usar en el bolsillo",
        colores: ["blanco ", "azul ", "rojo"],
        id: 1,
        tamano: "30 x 40 mm",
    },
    {
        name: "sello de escritorio",
        tipo: "sello",
        imgUrl: "https://4.bp.blogspot.com/-jClPnGU6GS4/V41vMkKnf3I/AAAAAAAABis/gBTFF7vyHIYaqJpxEkaJLibtWhR-XJoCwCLcB/s1600/sello3.png",
        descripcion:  "Sello para usar en el escritorio",
        colores: ["negro ", " gris ", "rojo"],
        id: 2,
        tamano: "50 x 60 mm",
    },
    {
        name: "Facturas",
        tipo: "factura",
        imgUrl: "https://scontent.fuio19-1.fna.fbcdn.net/v/t45.5328-4/105479845_3285750724816180_2326899788139665482_n.gif?stp=c0.0.118.118a_dst-gif_p118x118&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHjeoCTmh_vJNTJ08LqfpbEr7t8xw-9sCGvu3zHD72wIX00DEUyZZD-mtNPgKmfTHyPDR5xQr9Ne8sDpelO4I51&_nc_ohc=kRGozZO3lDUAX-5LEZZ&_nc_ht=scontent.fuio19-1.fna&oh=00_AfBIrFMPuPYS-9k7Sd-pgnZOWqXMUKAfwL9RyRUHdI6_dQ&oe=65347BF9",
        descripcion:"Facturas de tamaño normal",
        colores: ["BLANCO y NEGRO ", " Colores"],
        id: 3,
        tamano: "A6",

    },
    {
        name: "Facturas A4",
        tipo: "factura",
        imgUrl: "https://img.freepik.com/vector-premium/vector-premium-plantillas-factura-a4-diseno-factura-comercial-moderna_606468-570.jpg",
        descripcion:"Facturas de tamaño A3",
        colores: ["BLANCO y NEGRO ", " Colores"],
        id: 4,
        tamano: "A4",
    },
    {
        name: "Facturas A3",
        tipo: "factura",
        imgUrl: "https://www.eluniverso.com/resizer/sBIF24oYZ6bP_sqSRmZtt-b53V4=/503x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/VCIRSNTC7BGVFPLIJ2RYKNV6R4.jpg",
        descripcion:"Facturas de tamaño A3",
        colores: ["BLANCO y NEGRO ", " Colores"],
        id: 5,
        tamano: "A3",
    }

]
