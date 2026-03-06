
let page=2;
let limit=20;

var linkone="";

var loremarray=[];

var loremdata=async function loremdatas(){

    var responsedata=await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    var data=await responsedata.json();
     loremarray=data;

     if(loremarray.length>0){
        console.log("data is there");
        loremmapping();
        
     }else{
        console.log("no data ");
        
     }
    
}

const pageinput=document.getElementById("pageno");

pageinput.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        page=parseInt(pageinput.value);

        if(page>100){
            alert("This is the maximum")
            return;
        }else{
            document.getElementById("main_section2").innerHTML = "";
            
            loremdata();
            pageinput.value="";
        }
    }
})


loremdata();

function loremmapping(){
    loremarray.forEach((ele)=>{
        document.getElementById("main_section2").innerHTML+=
        `<div class="gallary_card">
        <img src=${ele.download_url} alt="img" />
        <p><strong>Author :</strong> ${ele.author}</p>
        <p><a href="${ele.url}">Visit here </a></p>

        </div>`
    })
}