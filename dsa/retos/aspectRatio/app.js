const express = require("express");
const axios = require("axios");
const { imageSize } = require("image-size");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

function gcm(a, b) {
    if (!b) return a;
    return gcm(b, a % b);
}

app.get("/api/resize", async (req, res) => {
  
    const imageUrl = req.query.img ? req.query.img.trim() : null;

    if (!imageUrl) {
        return res.status(400).json({ error: "Falta la URL (?img=...)" });
    }

    console.log("Intentando descargar URL:", imageUrl); 

    try {
        const response = await axios.get(imageUrl, { 
            responseType: "arraybuffer",
    
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
            }
        });
        
        const imageBuffer = Buffer.from(response.data);
        const dimensions = imageSize(imageBuffer);
        
        const width = dimensions.width;
        const height = dimensions.height;
        const divisor = gcm(width, height);

        res.json({
            ancho_real: width,
            alto_real: height,
            aspect_ratio: `${width / divisor}:${height / divisor}`,
            imagen: imageUrl
        });

    } catch (error) {
        console.error("ERROR REAL:", error.message);
        
        if (error.response) {
            console.error("Datos del error:", error.response.data.toString());
            return res.status(error.response.status).json({ 
                error: `El servidor de la imagen rechazó la conexión (${error.response.status}). Intenta con otra imagen.` 
            });
        }
        
        return res.status(500).json({ error: "Error interno procesando la imagen." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});