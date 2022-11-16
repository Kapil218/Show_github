
let dataFetch = async function() {
    const res= await fetch(`https://api.github.com/users`);
     const  data = await res.json();
    for(let i=0;i<data.length;i++){
        let image = data[i].avatar_url;
        let name= data[i].login;

        
        document.getElementById("data").innerHTML +=
        `
        <article class="user_breif">
        <img class="user__img" src="${image}" />
        <div class="user__dataa">
        <h3 class="user__name">${name}</h3>
        </div>
         <div class="see_profile"> <a href="${data[i].html_url} "> View profile</a></div>
       
        
        </article>
        `
        ;
    }
}
dataFetch();
