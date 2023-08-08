import React from 'react'
import vg from "../assets/2.webp"

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>  
      <div className="home" id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
        <p>
            We are your one and only solution to the tech problems you fave
            everyday.We are leading tech company whose aim is to increase the
            problem solving ability in children. 
        </p>
        </div>
    </div>

     <div className="home3" id='about'>
        <div>
          <h1>  Who we are?</h1>
       
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia id mollitia perspiciatis eum, odio dolores 
            repellat, dicta quaerat aspernatur dolore ducimus ipsa officiis dolor ratione est saepe 
            fuga? Perspiciatis sapiente odio aliquam. Consequuntur dolorem voluptates repellat nulla porro 
            cupiditate sequi sit quae iusto, facere laudantium exercitationem, nesciunt vitae quaerat quasi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quos laborum accusamus minima ut similique 
            ex repudiandae esse ad hic illum voluptatem nisi,
             deserunt veniam facilis aliquid quaerat animi provident nulla sed modi.
             Sunt quod culpa rerum dolore,
             a soluta dicta repellendus illum molestias autem recusandae voluptatem ab saepe necessitatibus!
        </p>
        </div>
     </div>

     <div className="home4" id='brands'>
          <div>
              <h1>Brands</h1>
        <article>
           <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
           </div>
           <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
           </div>
           <div style={{animationDelay:"0.7s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
           </div>
           <div style={{animationDelay:"0.9s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
           </div>


       </article>
       </div>

    </div>

    </>

  )
}

export default Home