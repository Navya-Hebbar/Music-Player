console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let songs=[
    {songName:"Saptha Sagaradaache ello",filePath:"",coverPath:""};
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
    }
})
    
myProgressBar.addEventListener('timeipdate',()=>{
    console.log('timeupdate');
})
