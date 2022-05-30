import './App.css';
import React from "react";

import NavCompo from './components/landing/nav';
import LendingHeader from './components/landing/header';
import ServicesCom from './components/landing/services';
import PortfolioCom from './components/landing/portfolio';
import AboutUsCom from './components/landing/about';
import ContactCom from './components/landing/contact';
import FooterCom from './components/landing/footer';
import PageModelCom from './components/landing/page_model';
import PostsCom from './components/posts'
function App() {
  let authorName = "Pankaj Kumar";
  let blogsPost =[
    {
      'post_slno' : 1 ,
      'category_name' :"language",
      'post_title':"What is Lorem Ipsum",
      'post_description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      'tags':[{"tag_name":"C#"},{"tag_name":"Javascript"}],
      'edit_permission':false,
      'delete_permission':false,
    },
    {
      'post_slno' : 2 ,
      'category_name' :"language",
      'post_title':"Why do we use it?",
      'post_description':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      'tags':[{"tag_name":"C#"},{"tag_name":"Javascript"}],
      'edit_permission':false,
      'delete_permission':false,
    },
    {
      'post_slno' : 3 ,
      'category_name' :"language",
      'post_title':"Where does it come from?",
      'post_description':"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      'tags':[{"tag_name":"C#"},{"tag_name":"Javascript"}],
      'edit_permission':false,
      'delete_permission':false,
    }
  ];
  return (
    <div className="App">

      <div id="page-top">
        <NavCompo title={authorName} searchBar="false"/>
        <LendingHeader />
        <ServicesCom />
        <PostsCom  dataSet={blogsPost}/>
        <PortfolioCom />
        {/* <AboutUsCom /> */}
        <ContactCom />
        <FooterCom />
        <PageModelCom />

        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>

        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </div>

    </div>
  );
}




export default App;
