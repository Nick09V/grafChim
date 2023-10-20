import React from "react"

    export const DispleyHome: React.CSSProperties = {
        maxWidth: "1280px",
        minWidth: "1280px",

        minHeight: "720px",
        maxHeight: "720px",


        border: "1px solid red",
    }

    export const ulHome: React.CSSProperties = {
        display: 'flex',
        backgroundColor: 'rgba(100,222,40,0.8)',
        border: '1px solid black',
        padding: '20px',
        margin: '20px',
        borderRadius: '10px',
        flexWrap: 'wrap',
        justifyContent:'center',
        listStyle: 'none',
    }

    export const liHome: React.CSSProperties = {
        backgroundColor: 'white',
        display: 'flex',
        marginRight: "80px", listStyle: "none",
        padding:"10px",
        border: "1px solid black",
        minHeight: "30px",
        minWidth: "100px",
        maxWidth: "200px",
        maxHeight: "60px",
        borderRadius: "10px",

        justifyContent: "center",
        alignItems: "center",

    }

    export const ImgHome: React.CSSProperties = {
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
    }