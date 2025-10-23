import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const songs = [
  {
    author: "Ed Sheeran ft. Post Malone",
    title: "Home",
    url: "https://www.youtube.com/embed/rQm0SlVNnkw?si=YvetMI3SdIPd7YA2"
  },
  {
    author: "Post Malone",
    title: "Circles",
    url: "https://www.youtube.com/embed/wXhTHyIgQ_U?si=koFtuhUkofUWQjXX"
  },
  {
    author: "Ed Sheeran",
    title: "Saphire",
    url: "https://www.youtube.com/embed/JgDNFQ2RaLQ?si=TbrvSOhTe4_jjvQO"
  },
  {
    author: "U2",
    title: "With Or Without You",
    url: "https://www.youtube.com/embed/ujNeHIo7oTE?si=y7qKxpvA5xWCTrbX"
  },
  {
    author: "Phil Collins",
    title: "You'll Be In My Heart",
    url: "https://www.youtube.com/embed/Qt2mbGP6vFI?si=lZWQeG2QWVeuZ3XR"
  },
  {
    author: "Linkin Park",
    title: "The Emptiness Machine",
    url: "https://www.youtube.com/embed/SRXH9AbT280?si=RwfvBiBvGGa631mq"
  },
  {
    author: "KPop Demon Hunters",
    title: "Your Idol",
    url: "https://www.youtube.com/embed/cWppAbqm9I8?si=UyXPMEeMgKOaYyv6"
  },
  {
    author: "LISA",
    title: "Opening Theme 1",
    url: "https://www.youtube.com/embed/CwkzK-F0Y00?si=JM2EJDXazP_KXdvD"
  },
  {
    author: "Spy X Family",
    title: "Ending",
    url: "https://www.youtube.com/embed/ewWHPqteg38?si=zUNRhFTfhtFI0vLX"
  }
];

app.get("/", (req, res) => {
  res.send("🎧 API Playlist Top 2025 funcionando correctamente");
});

app.get("/api/songs", (req, res) => {
  res.json(songs);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
