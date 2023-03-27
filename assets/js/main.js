const tracks=[{"trackname":"the boss","bpm":"100","key":"G min","genre":"RAP","detail":"nothing to say ","price":"100","productId":"f80074cc-ee26-460f-8652-2651331d3b0e"},{"trackname":"the king","bpm":"130","key":"A #","genre":"HIP HOP","detail":"mmmmmmmmmmmmmmmmmmmmmmmmccccccc","price":"210","productId":"273cf35e-c08e-4c06-a144-a631639fcefb"},{"trackname":"real slim shady","bpm":"150","key":"G min","genre":"KANYE STYLE","detail":"snmnm,n,mnm,nm,nm,nmnm,n,mnmnciooijoijoijoijwd","price":"80","productId":"4c33f5b3-f41d-435a-825c-86ce359b1c6a"},{"trackname":"GOAT","bpm":"20","key":"C maj","genre":"TRAP","detail":"nothing to say son of bit","price":"800","productId":"e349b798-b714-40f7-acc8-87b7bf41888b"},{"trackname":"Snoop DOGG","bpm":"90","key":"E Flat","genre":"HIP HOP","detail":"this is snoopy doaw you dog ","price":"1000","productId":"3791549c-67cf-4936-ba94-768d876e24e5"},{"trackname":"thanos","bpm":"69","key":"E min","genre":"LO FI","detail":"na oru loosu ","price":"20","productId":"f0f6e27d-d77c-46db-ad50-4acfe49e119a"}]
const track=JSON.parse(localStorage.getItem("trackName"));

if(!track){
    localStorage.setItem("trackName",JSON.stringify(tracks))
}


