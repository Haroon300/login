/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";

function Login(){
  return(
    <div class="main">
      <div>
          <img src="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg" />
      </div>
      <div class="form-main">
          <div class="form">
              <h1>Login to continue</h1>
              <div class="form-floating mb-3">
                  <input type="email" class="form-control input" id="floatingInput" placeholder="Email"/>
                  <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating mb-3">
                  <input type="password" class="form-control input" id="floatingInput" placeholder="password"/>
                  <label for="floatingInput">Password</label>
              </div>
              <div class="flex">
                <div>
                  <input type="checkbox" id="radio"/><label>Remember me</label></div>
                  <div class="flex">
                      <a href="#" >Forgot Password?</a>
                  </div>
              </div>
              <button>LOGIN</button>
              <p>or sign up using</p>
              <div>
              <a href="#"><img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png" class="fb" alt="facebook icon png background" /></a>
              <a href="#"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="twitter logo vector png clipart" class ="fb" /></a>
              </div>
          </div>
      </div>
    </div>
  )
}

const getApi = async()=>{
  let url = "'https://newsapi.org/v2/top-headlines?' +'sources=bbc-news&' +'apiKey=71ea4b119fe34276ab4d63e31daa51d3'";
  const news = await fetch(url);
   
    if(news){
      news.json().then((data)=>{
        displayNews(data.articles);
      })
    }

}
getApi();

const displayNews = (articles)=>{
}
  
const Con = ()=>(
  <div>
    <div>
      <img src=""/>
    </div>
  </div>
)
const Sec = ()=>(
  <Con />
)


ReactDOM.render(<Login/>, document.querySelector('#root'));