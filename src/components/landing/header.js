import React from 'react'

export default function lendingHeader() {
  return (
    <header class="masthead">
    <div class="container" style={{ 
         backgroundColor: 'darkmagenta',
         opacity: 0.8,
         padding: '20px' ,
         borderRadius: '80% 80%',
        }}>
        <div class="masthead-subheading">Thanks for your visiting!</div>
        <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
        {/* <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a> */}
    </div>
</header>
  )
}
