import{a as L,i as c,S as v}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const b=r=>r.reduce((t,{tags:o,webformatURL:n,largeImageURL:e,likes:s,views:i,comments:y,downloads:g})=>t+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${n}" alt="${o}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${i}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${y}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${g}</span>
        </div>
    </div>
</li>
    `,""),w="https://pixabay.com/api/",P="43940404-366b9d94bf735917b74c3de1b",S=async(r,t)=>(await L(w,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,f=document.querySelector(".gallery"),E=document.querySelector(".search-form"),l=document.querySelector(".loader"),a=document.querySelector(".photo-btn");let d=1,q=15,p="";function h(){a.classList.add("is-hidden-btn")}function A(){a.classList.remove("is-hidden-btn")}async function m(r,t){l.classList.remove("is-hidden");try{const o=await S(r,t);o.hits.length===0?(c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),h(),a.removeEventListener("click",u)):(f.insertAdjacentHTML("beforeend",b(o.hits)),new v(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*q>=o.totalHits?(h(),a.removeEventListener("click",u),c.info({message:"We're sorry, but you've reached the end of search results."})):A())}catch{c.error({message:"An error occurred while fetching photos. Please try again later."})}finally{l.classList.add("is-hidden")}}async function u(){d++,await m(p,d),$()}a.addEventListener("click",u);async function M(r){r.preventDefault();const t=r.target.elements.searchKeyword.value.trim();if(f.innerHTML="",t==="")return h(),a.removeEventListener("click",u),c.error({message:"Please enter a search query before searching!"});p=t,l.classList.remove("is-hidden");try{d=1,await m(t,d)}catch{c.error({message:"An error occurred while performing the search. Please try again later."})}finally{r.target.reset(),l.classList.add("is-hidden")}}E.addEventListener("submit",M);function $(){const{height:r}=document.querySelector(".photo-container").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
