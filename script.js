
function getNews(country , category){
    document.getElementById("newsId").innerHTML=''


fetch("https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=09c00411fe4b4aa1bad8313691e1c358").then((res)=>{
    return res.json()
}).then((data)=>{
  let news=data.articles;
//   console.log(news);
news.forEach((n,index)=>{
    let newsCard=document.createElement("div");
    newsCard.classList.add("news-card");

    // news img div 
    let newsImg=document.createElement("div");
    newsImg.classList.add("news-img")

    // article img 
    let img=document.createElement("img");
    img.setAttribute("src","n.img");
    img.setAttribute("alt" , "img")

    // adding img in news img div 
    newsImg.appendChild(img);

    // news details div 
    let newsDetails=document.createElement("div");
    newsDetails.classList.add("news-detail");

    // title h1 
    let title=document.createElement("h1");
    title.classList.add("title");
    title.append(n.title);

    // author p 
    let author=document.createElement("p");
    author.classList.add("author");
    author.append(n.author);

    // content p 
    let content=document.createElement("p");
    content.classList.add("content");
    
    content.append("Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus rem aliquid odit illo minus beatae. ");

    let link=document.createElement("a");
    link.setAttribute("href",n.url);
    link.setAttribute("target","blank");
     // button read 
     let button=document.createElement("button");
     button.classList.add("btn");
     button.append("Read More")

     // adding button in link 
     link.appendChild(button);

     // adding content in news details 
     newsDetails.appendChild(title);
     newsDetails.appendChild(author);
     newsDetails.appendChild(content);
     newsDetails.appendChild(link);

     // addind news img and news details to card 

     newsCard.appendChild(newsImg);
     newsCard.appendChild(newsDetails);


     document.getElementById("newsId").appendChild(newsCard);

})

})
.catch((err)=>{
    console.log(err)
}) 

}



// header button function
function search(){
    let country=document.getElementById("country").value;
    let category=document.getElementById("category").value;
    console.log(country , category)
    getNews(country , category)

}