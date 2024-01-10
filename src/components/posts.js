import React from 'react'
import {PostItem} from './postItem'; // here i am importing a veriable. so {} used.

export default function Posts(props) {
  return (
    <>
      <section class="page-section bg-light" id="blog">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">  All Posts</h2>
            {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
          </div>
         {props.dataSet.map((post)=>{
           return <PostItem  post={post}/>
         })}
         
        </div>

      

      </section>


    </>
  )
}
