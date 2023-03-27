const trackproduct = [
    {
      "Image": {
        source: "../../assets/img/cover4.png",
      },
      "trackname": "beat001",
      "artistname": "justin",
    },
    {
      "Image": {
        source: "../../assets/img/cover1.png"
      },
      "trackname": "beat002",
      "artistname": "thamim",
    },
    {
      "Image": {
        source: "../../assets/img/cover2.png"
      },
      "trackname": "hard 001",
      "artistname": "tommy",
    },
    {
      "Image": {
        source: "../../assets/img/cover3.png"
      },
      "trackname": "fresh beat",
      "artistname": "vignesh",
    },
    {
      "Image": {
        source: "../../assets/img/cover5.png"
      },
      "trackname": "beatsworld",
      "artistname": "ajun",
    },
    {
      "Image": {
        source: "../../assets/img/cover6.png"
      },
      "trackname": "soultype",
      "artistname": "j cole",
    },
    {
      "Image": {
        source: "../../assets/img/cover7.png"
      },
      "trackname": "Blue eyes",
      "artistname": "ji ji",
    },
    {
      "Image": {
        source: "../../assets/img/cover10.png"
      },
      "trackname": "post type",
      "artistname": "modi ji",
    },
    {
      "Image": {
        source: "../../assets/img/cover5.png"
      },
      "trackname": "sixnine",
      "artistname": "anil",
    },
    {
      "Image": {
        source: "../../assets/img/cover7.png"
      },
      "trackname": "good",
      "artistname": "turtle",
    },
    {
      "Image": {
        source: "../../assets/img/cover4.png"
      },
      "trackname": "ariana",
      "artistname": "beyonce",
    },
    {
      "Image": {
        source: "../../assets/img/cover1.png"
      },
      "trackname": "T-gan",
      "artistname": "painkiller",
    }


  ]

let track;
let imageContainer;
let TrackImage;
let textContainer;
let trackName;
let edit;



{/* <div class="spread">
              <div class="card">
                <img loading="lazy"src="https://i.scdn.co/image/ab67616d00001e02b6b3b7f26f0bc0e0197163a0" alt="track poster">
                </div>
                <div class="text1">
                  <h3>Track Name</h3>
                </div>
                <button type="button" class="btn1" style="background-color: rgb(159, 0, 0); width: 20%;">Edit</button> */}

    let loadData = JSON.parse(localStorage.getItem("trackName"))
    

for(let i=0;i<loadData.length;i++){

    track=document.createElement("div");
    track.setAttribute("class","spread1");

    imageContainer=document.createElement("div");
    imageContainer.setAttribute("class","card");
    track.append(imageContainer);

    TrackImage=document.createElement("img");
    TrackImage.setAttribute("loading","lazy");
    TrackImage.setAttribute("class","trackPoster")
    TrackImage.setAttribute("src",trackproduct[i]["Image"]["source"]);
    TrackImage.setAttribute("alt","trackPoster");
    imageContainer.append(TrackImage)

    textContainer=document.createElement("div");
    textContainer.setAttribute("class","text1");
    track.append(textContainer);

    trackName=document.createElement("h3")
    trackName.innerText=loadData[i]["trackname"];
    textContainer.append(trackName);

    edit=document.createElement("button");
    edit.setAttribute("type","button");
    edit.setAttribute("class","btn_edit");
    edit.setAttribute("data-id", loadData[i]["productId"])
    edit.setAttribute("style","background-color: rgb(159, 0, 0); width: 20%;");
    edit.innerText=["edit"]
    track.append(edit)


    document.querySelector(".recent2").append(track)
    console.log(track)




}

// function findTrack(){
//     document.querySelector(".btn1").addEventListener("click",()=>{
        
//     })
// }

let edit_button = document.querySelectorAll("button.btn_edit")

    edit_button.forEach(function (findId){
        findId.addEventListener("click", function (){
            let dataId = this.dataset.id;
            localStorage.setItem("productId",JSON.stringify(dataId))
            location.href="../seller profile and upload a track/upload a track .html"
            console.log(dataId)
            
})

})