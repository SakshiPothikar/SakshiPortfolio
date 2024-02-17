import React from 'react'
import sakshi from "./resume.pdf"
const Home = () => {
    return <div className=' p-4'>
        <div class="container px-4 text-start text-secondary shadow-lg alert alert-danger" >
            <div class="row gx-5 ">
                <div class="col">
                    <div class="p-5 m-5">
                        <h1 className='fst-italic fw-bold '>Hello,</h1>
                        <h4 className='fst-italic fw-semibold ms-5'>I'm Sakshi</h4>
                        <p className='fst-italic fw-medium ms-5'>A passionate full-stack developer dedicated to crafting exceptional web experiences from end to end. With a keen eye for design, a love for problem-solving, and a knack for innovation, I thrive in the dynamic world of web development.</p>
                        <div class="container text-center">
                            <div class="row row-cols">

                                <div class="col">
                                    <a className='nav-link' href='https://www.linkedin.com/in/sakshi-pothikar-5a63aa2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><i class="bi bi-linkedin fs-3"></i></a> </div>
                                <div class="col">
                                    <a className='nav-link' href='https://www.instagram.com/sakshhi.i?igsh=eGt5c2QzbmQ1cXlx' ><i class="bi bi-instagram fs-3"></i></a> </div>
                                <div class="col">
                                    <a className='nav-link' href='https://github.com/SakshiPothikar' ><i class="bi bi-github fs-3 "></i></a> </div>
                                {/* <div class="col">
                                    <div className=' text-center'><button type="button" class="btn btn-outline-secondary"> View Resume</button></div>

                                </div> */}
                                <a className='nav-link' href='https://drive.google.com/file/d/10fcv2ShtaUfLY--AkMqQMnnue1ipakXT/view?usp=drivesdk' ><i class="bi bi- fs-3 "></i> View Resume</a>
                                {/* <button type="button" href="https://drive.google.com/file/d/10fcv2ShtaUfLY--AkMqQMnnue1ipakXT/view?usp=drivesdk" download class="download-btn btn btn-outline-secondary p-2 m-3 text-center">View Resume</button> */}
                            </div>

                        </div>

                    </div>
                </div>
                <div class="col ">
                    <div class=" p-1 slide">
                        <img src="image.png" alt="" height={450} />

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home