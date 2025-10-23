# 🎵 API Playlist Top 2025

Servidor **Node.js** usando **Express** que expone una colección estática de canciones.  
Ideal para pruebas de APIs, front-end.


## 📋 Requisitos

- **Node.js** v24.2.0  
- **npm** (incluido con Node.js) v11.3.0 

Verifica tus versiones:
```bash
node -v
npm -v

cd repo
npm install
npm run start

🌐 Endpoints disponibles

GET /
Devuelve un mensaje de bienvenida:

GET /api/songs
Devuelve la lista de canciones en formato JSON. Ejemplo:

[
  {
    "author": "Ed Sheeran ft. Post Malone",
    "title": "Home",
    "url": "https://www.youtube.com/embed/rQm0SlVNnkw?si=YvetMI3SdIPd7YA2"
  },
  {
    "author": "Post Malone",
    "title": "Circles",
    "url": "https://www.youtube.com/embed/wXhTHyIgQ_U?si=koFtuhUkofUWQjXX"
  }
]

🧪 Prueba rápida

Con el servidor corriendo, abre tu navegador o Postman:

http://localhost:3000/ → Mensaje de bienvenida

http://localhost:3000/api/songs → JSON con la lista de canciones


URL RENDER :  https://api-playlist-top-2025.onrender.com/api/songs

NOTA: El servidor render es un servidor gratuito el cual entra en sleep luego de los 15 minutos de inactividad, por tanto -> tomar en cuenta este detalle a la hora de probar y recargar la pagina un par de veces y esperar unos 5 min para ver resultados satisfactorios.

👤 Autor: Andrés Medina
💼 Desarrollador Front End Angular CLI
📧 andresdmm25@gmail.com



