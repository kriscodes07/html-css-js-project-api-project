
var arraydaat=[];
var getdata= async function getss(){

    var response=await fetch(`https://jsonplaceholder.typicode.com/posts`);
    var response_data=await response.json();

    arraydaat=response_data;

    if(arraydaat.length>0){
        console.log("data is there ");
        mapping();
        
    }else{
        console.log("no data found");
        
    }


}

getdata();

function mapping(){
    arraydaat.map((ele)=>{

        document.getElementById("main_section2").innerHTML+= `
        <div class="card">
        <h2> User id :${ele.id}</h2>
        <p > <b>Title :</b> :${ele.title}</p>
        <p > <b>Body :</b> :${ele.body}</p>
        </div>
        `
    })
}