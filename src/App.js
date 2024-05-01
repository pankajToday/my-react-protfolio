import './App.css';
import React from "react";

import NavCompo from './components/landing/nav';
import LendingHeader from './components/landing/header';
import ServicesCom from './components/landing/services';
import PortfolioCom from './components/landing/portfolio';
import IntroCom from './components/landing/intro.js';
//import AboutUsCom from './components/landing/about';
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
      "feature_img":"data:image/jpeg;base64,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",
      'post_title':"What is Vue JS?",
      'post_description':"Vue.js is a progressive JavaScript framework designed for building user interfaces. With a focus on simplicity and flexibility, it allows developers to create dynamic, reactive applications. Vue.js is incrementally adoptable and integrates seamlessly with other libraries, making front-end development efficient and enjoyable.",
      'tags':[{"tag_name":"VUE JS"},{"tag_name":"NodeJS"},{"tag_name":"VUE JS-3"},{"tag_name":"TypeScript"}],
      'edit_permission':false,
      'delete_permission':false,
    },
    {
      'post_slno' : 2 ,
      'category_name' :"language",
      'post_title':"What is  REACT-JS?",
      "feature_img":"data:image/png;base64,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",
      'post_description':"React.js is a declarative JavaScript library for building user interfaces. Developed by Facebook, it allows developers to create reusable UI components that efficiently update and render in response to data changes, making front-end development scalable, efficient, and interactive.",
      'tags':[{"tag_name":"REACT-JS"},{"tag_name":"NodeJS"},{"tag_name":"NPM"}],
      'edit_permission':false,
      'delete_permission':false,
    },
    {
      'post_slno' : 3 ,
      'category_name' :"language",
      'post_title':"Basic differences in REACT-JS and VUE JS?",
      'post_description':"React and Vue.js are popular JavaScript frameworks for building user interfaces. React is known for its declarative and component-based approach, with a steeper learning curve and a larger ecosystem relying on external libraries. In contrast, Vue.js embraces a progressive framework philosophy, offering a gradual learning curve and integrated features. Vue.js is recognized for its simplicity, flexibility, and cohesive ecosystem within the core library, making it ideal for smaller to medium-sized projects. While React is widely adopted in large-scale applications, Vue.js caters to developers seeking an approachable yet powerful framework for scalable and efficient front-end development.",
      'tags':[{"tag_name":"VUE JS"},{"tag_name":"NodeJS"},{"tag_name":"VUE JS-3"},{"tag_name":"REACT-JS"},{"tag_name":"NodeJS"},{"tag_name":"NPM"},{"tag_name":"TypeScript"},{"tag_name":"Javascript"}],
      'feature_img':"data:image/jpeg;base64,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",
      'edit_permission':false,
      'delete_permission':false,
    },
    {
      'post_slno' : 4 ,
      'category_name' :"language",
      'post_title':"Which is best in REACT-JS and VUE JS for front-end?",
      'post_description':"The choice between React.js and Vue.js depends on project requirements and personal preferences. React is favored for large-scale applications, offering a robust ecosystem. Vue.js is praised for its simplicity and gradual learning curve, making it suitable for smaller projects and developers seeking ease of use and flexibility.",
      'tags':[{"tag_name":"VueFramework"},{"tag_name":"VueComponents"},{"tag_name":"ReactComponents"},{"tag_name":"ReactFrontend"}],
      'feature_img':"data:image/jpeg;base64,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",
      'edit_permission':false,
      'delete_permission':false,
    },
    {
      'post_slno' : 5 ,
      'category_name' :"language",
      'post_title':"Which will be the best front-end framework language in the coming days?",
      'post_description':"In my opinion and experience, choosing the `best` front-end framework going forward will be difficult because it will rely on developing technology, developer preferences, and changing market trends. These days, React.js and Vue.js are popular options, and they might stay that way. To make well-informed judgments based on project requirements and ecosystem improvements, stay up to current on updates and community comments.",
      'tags':[{"tag_name":"VueFramework"},{"tag_name":"VueComponents"},{"tag_name":"futureFramework"},{"tag_name":"ReactFrontend"}],
      'feature_img':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuDv6L-_u1YxjpkosY9eRZeMOCLBd_tnNpQ&usqp=CAU",
      'edit_permission':false,
      'delete_permission':false,
    }
  ];
  return (
    <div className="App">

      <div id="page-top">
        <NavCompo title={authorName} searchBar="false"/>
        <LendingHeader />
        <IntroCom />
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
