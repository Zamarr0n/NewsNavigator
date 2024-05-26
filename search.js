import { getNews } from "./getNews.js";
export function search(){
    let bt_searcher = document.getElementById('search');
    let news_topic = document.getElementById('news_topic').value;
    if(news_topic === " "){
        console.log('the input is blank')
    }
    else{
        bt_searcher.addEventListener('click', getNews)
    }
}