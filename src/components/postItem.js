/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

// Direct access of resource data. so i used {post} like an onject.
export const PostItem = ({ post }) => {
  return (
    <> 
    {/* last video :  1:4:20 */}
      <div class="row mb-5">
        <div className='col-lg-12 col-sm-12 mb-12 text-center'>
          <h1>  {post.post_title}  </h1>
        </div>
        <div class="col-lg-12 col-sm-12 mb-12">
          <div class="portfolio-item">
            <a class="portfolio-link" href="#">
              <img class="img-fluid" src="images/thumbnail-3.jpg" alt="..." />
            </a>
          </div>
        </div>
        <div className='col-lg-12 col-sm-12 mb-12 text-justify'>
          {post.post_description}
        </div>
      </div>

    </>
  )
}

