import {truncateParagraph} from "./wordSlicing.js"
export function getNews(){
    let news_topic = document.getElementById('news_topic').value;
    let news_content = document.getElementById("news_div");
    const url = `https://api.worldnewsapi.com/search-news?text=${news_topic}&language=en`;
    const apiKey = '3efff69473d848daa7b030cff487c671';
    if(news_topic != ''){
        fetch(url, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.news.forEach(element => {
                console.log('------------------------------------')
                var section = document.createElement("section");
                var div = document.createElement("div");
                var h1 = document.createElement("h1");
                var paragraph = document.createElement("p");
                var image = document.createElement("img")
                var publish_date = document.createElement('p')
                var author = document.createElement('p');

                h1.textContent = element.title;
                let short_paragraph = truncateParagraph(element.text, 250)
                paragraph.textContent = short_paragraph; 
                image.setAttribute("src",element.image);
                image.setAttribute("alt","Article Image");
                publish_date.textContent = element.publish_date;
                author.textContent = element.author;
                div.appendChild(image);
                div.appendChild(h1);
                div.appendChild(paragraph);
                div.appendChild(publish_date);
                div.appendChild(author);
                section.appendChild(div)
                news_content.appendChild(section);
                console.log(`title: ${element.title}`)
                console.log(`text: ${element.text}`)
                console.log(`url: ${element.url}`)
                console.log(`image: ${element.image}`)
                console.log(`publish-date: ${element.publish_date}`)
                console.log(`author: ${element.author}`)
                console.log(" ")
            });
        })
        // .then()
        .catch(error => console.error('There was a problem with the fetch operation:', error));
        
    }
    else{
        console.log("input empty");
    }
    
}