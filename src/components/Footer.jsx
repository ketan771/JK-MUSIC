import React from 'react'
const Footer = () => {
  return (
    <>

<footer class="text-center " style={{backgroundColor:'rgb(61, 12, 17)',
color:'rgb(247, 140, 162)'}}>

  <div class="container p-4">

    <section class="mb-4">
    
      
    </section>

    <section class="">
      <form action="">
   
        <div class="row d-flex justify-content-center">
    
          <div class="col-auto">
            <p class="pt-2" >
              Connect with us for new song notifications
            </p>
          </div>

          <div class="col-md-5 col-12" >
            
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example21" class="form-control" placeholder='Email address'/>
              
            </div>
          </div>

          <div class="col-auto">
    
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
      
        </div>
        
      </form>
    </section>

    <section className="mb-4 fs-1">
      <p style={{fontFamily:'Philosopher,Ubuntu'}}>
        <span >JK MUSIC!  </span>
        The Best Way to Listen to Music and Upload your own Songs!
      </p>
    </section>

    <section class="" style={{fontFamily:'Philosopher,Ubuntu'}}>
    
      {/* <div class="row"> */}
      <div class="mx-auto">
       
        {/* <div class="col-lg-3 col-md-6 mb-4 mb-md-0"> */}
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 mx-auto" >

        </div>
       
      </div>
 
    </section>

  </div>

</footer>
    </>
  )
}

export default Footer