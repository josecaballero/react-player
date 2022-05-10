import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Looking in",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
      artist: "Smile High, Teddy Roxpin",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23335",
      color: ["#438991, #2E7180"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Montauk Paddling",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/50d1e8b673f1afde1fefeb1c8cc895139def15c5-1024x1024.jpg",
      artist: "auv",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=34372",
      color: ["#DFD3BD, #C43453"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Drift",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
      artist: "Somni",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30133",
      color: ["#5B373D, #326A70"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Soulsounds",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      artist: "Parkbench Epiphany",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
      color: ["#557282, #DF9695"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Conflicted",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      artist: "Conflicted",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24642",
      color: ["#4D402F, #2C3849"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Far from home",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8127",
      color: ["#5C5B59, #689C9A"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
