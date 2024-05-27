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
            news_content.innerHTML = "";
            data.news.forEach(element => {
                var section = document.createElement("section");
                var div = document.createElement("div");
                var img_div = document.createElement("div");
                var text_div = document.createElement("div");
                var btn_div = document.createElement("div");
                var btn_div_nd = document.createElement("div");
                var h1 = document.createElement("h1");
                var paragraph = document.createElement("p");
                var image = document.createElement("img")
                var publish_date = document.createElement('p')
                var author = document.createElement('p');
                var link_to_new = document.createElement('button');
                h1.textContent = element.title;
                let short_paragraph = truncateParagraph(element.text, 250)
                paragraph.textContent = short_paragraph; 
                paragraph.classList.add('paragraph');
                author.classList.add('paragraph');
                publish_date.classList.add('paragraph');
                image.setAttribute("src",element.image);
                image.setAttribute("alt","Article Image");
                image.setAttribute("width","500");
                image.setAttribute("height","400");
                image.setAttribute("loading","lazy");
                publish_date.textContent = element.publish_date;
                author.textContent = `Author: ${element.author}`;
                div.classList.add('news_div');
                h1.classList.add('title_news');
                link_to_new.textContent = 'see more  🔎'
                link_to_new.classList.add("link")
                link_to_new.classList.add("btn-animation")
                img_div.appendChild(image);
                div.appendChild(img_div);
                img_div.classList.add('img-news')
                div.appendChild(h1);
                text_div.appendChild(paragraph)
                btn_div.appendChild(link_to_new)
                btn_div_nd.appendChild(btn_div);
                btn_div.classList.add('link');
                div.appendChild(text_div);
                text_div.classList.add('text_center');
                div.appendChild(link_to_new);
                div.appendChild(author);
                div.appendChild(publish_date);
                section.appendChild(div)
                section.classList.add('section_news')
                news_content.appendChild(section);
                // console.log(`title: ${element.title}`)
                // console.log(`text: ${element.text}`)
                // console.log(`url: ${element.url}`)
                // console.log(`image: ${element.image}`)
                // console.log(`publish-date: ${element.publish_date}`)
                // console.log(`author: ${element.author}`)
                // console.log(" ")
                link_to_new.addEventListener("click", function(){
                    window.location.href = element.url;
                })
            });
        })
        // .then()
        .catch(error => console.error('There was a problem with the fetch operation:', error));
        
    }
    else{
        console.log("input empty");
    }
    
}