import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    // Initialize Owl Carousel after component mounts
    $('.owl-carousel').owlCarousel({
      items: 3, // Number of items to show
      loop: true, // Infinite loop
      margin: 10, // Space between items
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Time interval for autoplay
      autoplayHoverPause: true, // Pause autoplay on hover
      nav: true, // Enable navigation arrows (next/prev)
      responsive: {
        0: {
          items: 1, // Show 1 item on mobile
        },
        768: {
          items: 2, // Show 2 items on tablet
        },
        1024: {
          items: 3, // Show 3 items on desktop
        },
      },
    });

    // Cleanup the carousel instance when the component is unmounted
    return () => {
      $('.owl-carousel').trigger('destroy.owl.carousel');
    };
  }, []); // Empty dependency array to run once when the component mounts

  return (
<section class="project py-5" id="project">
        <div class="container">
                
                <div class="row">
                  <div class="col-lg-11 text-center mx-auto col-12">

                      <div class="col-lg-8 mx-auto">
                        <h2>Things I have designed for digital media agencies</h2>
                      </div>

                      <div class="owl-carousel owl-theme">
                        <div class="item">
                          <div class="project-info">
                            <img src="assets/images/project/project-image01.png" class="img-fluid" alt="project image"/>
                          </div>
                        </div>

                        <div class="item">
                          <div class="project-info">
                            <img src="assets/images/project/project-image02.png" class="img-fluid" alt="project image"/>
                          </div>
                        </div>

                        <div class="item">
                          <div class="project-info">
                            <img src="assets/images/project/project-image03.png" class="img-fluid" alt="project image"/>
                          </div>
                        </div>

                        <div class="item">
                          <div class="project-info">
                            <img src="assets/images/project/project-image04.png" class="img-fluid" alt="project image"/>
                          </div>
                        </div>

                        <div class="item">
                          <div class="project-info">
                            <img src="assets/images/project/project-image05.png" class="img-fluid" alt="project image"/>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
        </div>
    </section>
  );
};

export default Projects;
