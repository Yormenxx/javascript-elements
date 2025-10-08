const {Router} = require('express');
const fs = require("fs");
const path = require("path");
const { route } = require('./router');
const _ = require('underscore');
const router = Router();

// const movies = require("../db.json");

const dbPath = path.join(__dirname,"..","db.json");
let movies = require(dbPath);

router.get("/", (req, res) => {
    res.status(200).json({
        message: "movies route",
        status: 200,
        data:movies
    })
})


router.post("/",(req,res)=>{

    const {id,titulo,genero,año}=req.body;

    if(!id || !titulo || !genero || !año){
        return res.status(400).json({
            message:"missing data",
            status:400
        })
    }else{
        movies.push({id,titulo,genero,año});
        try{
            const jsonMovies = JSON.stringify(movies,null,2)
            fs.writeFileSync(dbPath,jsonMovies,"utf-8");
            res.status(201).json({
                message:"movie added",
                status:201,
                data:movies
            })  
        }catch(error){
            return res.status(500).json({
                message:"internal server error",
                status:500
            })
        }
    }

    res.send("received");
})


router.delete("/:id",(req,res)=>{
    const idToDelete = parseInt(req.params.id);

    const index = movies.findIndex(movie => movie.id === idToDelete)

    if(index === -1){
        return res.status(404).json({
            message:"Movie was not found",
            status:404
        })
    }else{
        movies.splice(index,1)
        return res.status(200).json({
            message:"Movie deleted",
            status:200,})
    }

   
})


router.put("/:id",(req,res)=>{
    const idToUpdate = parseInt(req.params.id);
    const { titulo, genero, año } = req.body;
    const index = movies.findIndex(movie => movie.id === idToUpdate)

    if(index === -1){
        return res.status(404).json({
            message:"Movie was not found",
            status:404
        })
    }else{
        
        movies[index].titulo=titulo || movies[index].titulo;
        movies[index].genero=genero || movies[index].genero;
        movies[index].año=año || movies[index].año;

        return res.status(200).json({
            message:"Movie updated",
            status:200,
            data:movies[index]
        })


    }

})

module.exports= router;