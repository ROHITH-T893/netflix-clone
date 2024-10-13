const pl=document.getElementById("pl")
const lam=document.getElementById("con-lan")
pl.addEventListener('click',(event)=>{
    var val=event.target.value
    if(val=="Indai"){
lam.innerHTML=`<option value="Movies">Movies</option>
          <option value="TV-shows">TV-shows</option>
          `
    }
    else{
        lam.innerHTML=`<option value="Movies-English">Movies-English</option>
        <option value="Movies-other lan">Movies-other lan</option>
        <option value="TV-shows-English">TV-shows-English</option>
        <option value="TV-shows-other lan">TV-shows-other lan</option>
        ` 
    }
    
})
const data = [{
    d1: {
        q: "What is Netflix?",
        a1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices.",
        a2: "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    d2: {
        q: "How much does Netflix cost?",
        a1: "Netflix offers several membership plans to suit your needs, starting from a basic plan to more premium options.",
        a2: "Prices may vary by region and are subject to change. Check the Netflix website for the latest pricing information."
    },
    d3: {
        q: "Can I watch Netflix offline?",
        a1: "Yes, Netflix allows you to download select titles for offline viewing on your mobile device.",
        a2: "Simply look for the download icon next to the title you wish to download."
    },
    d4: {
        q: "What devices can I use to watch Netflix?",
        a1: "You can watch Netflix on a variety of devices, including smart TVs, game consoles, streaming media players, and mobile devices.",
        a2: "Netflix is also available on web browsers on your computer."
    },
    d5: {
        q: "Is Netflix available in my country?",
        a1: "Netflix is available worldwide, with a few exceptions. You can check the Netflix website to see if it’s available in your region.",
        a2: "Content libraries may vary by country."
    }
}];

const mcq=document.getElementById("mcq")
Object.values(data[0]).forEach((v,i)=>{
    var de=document.createElement("details")
    const sum=`
        
        <summary>
          <h1>${v.q}</h1>
        </summary>
        <hr color=" #3b3939">
        <p>
         ${v.a1}
        </p>
        <p>
          ${v.a2}
        </p>
     ` 
     de.innerHTML=sum;
     mcq.append(de)
      

})
