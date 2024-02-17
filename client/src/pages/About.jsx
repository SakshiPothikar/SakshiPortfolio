import React from 'react';

const About = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <div className="nav flex-column nav-pills me-3 mt-4 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link fw-semibold alert alert-dark  active" id="v-pills-about-tab" data-bs-toggle="pill" data-bs-target="#v-pills-about" type="button" role="tab" aria-controls="v-pills-about" aria-selected="true"><i class="bi bi-file-person"></i> About</button>
                        <button className="nav-link fw-semibold alert alert-dark " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false"> <i class="bi bi-laptop fs-5"></i> Skills</button>
                        <button className="nav-link fw-semibold alert alert-dark " id="v-pills-profile-tab text-danger" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="bi bi-filetype-jsx"></i> Project</button>
                        <button className="nav-link fw-semibold alert alert-dark " id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="bi bi-journals"></i> Education</button>
                        {/* <button className="nav-link fw-semibold alert alert-dark " id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="bi bi-activity"></i> Activity</button> */}
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-about" role="tabpanel" aria-labelledby="v-pills-about-tab">
                            <div class="container px-4 text-dark shadow-lg m-4 bounce" >
                                <div class="row gx-5 p-4">
                                    <div class="col p-5 m-4">
                                        <h1 className='bounce'>About me</h1>
                                        <p className='fst-italic'>I'm a FullStack Developer from Maharashtra, India.</p>
                                        <div class="">
                                            <p className='fst-italic fw-medium text-start'>
                                                "I have a passion for transforming complex problems into elegant and intuitive interfaces. With a love for the logic and structure of coding, I constantly aim to write efficient and elegant code."
                                                <p>When I'm not coding, you'll find me reading Novels and Baking Cakes.</p>
                                            </p>
                                            <span class="badge rounded-pill text-bg-primary bounce">FullStack Developer</span>
                                            <span class="badge rounded-pill text-bg-primary bounce">Mobile App</span>
                                        </div>
                                    </div>
                                    <div class="col text-center">
                                        <div class="">
                                            <img src="sakshi.png" alt="" height={450} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="container text-center">

                                <div className='m-4'>
                                    <h3 type="button">Skills & Technologies </h3>
                                </div>
                                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 shadow-lg">
                                    <div class="col">
                                        <div class="p-3">
                                            <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> HTML & CSS</i></p> </div>
                                    </div>
                                    <div class="col">
                                        <div class="p-3">
                                            <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> JavaScript</i></p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="p-3">
                                            <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> Bootstrap</i></p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="">
                                            <div class="p-3">
                                                <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> Tailwind CSS</i></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="p-3">
                                            <div class="">
                                                <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> ReactJs</i></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="p-3">
                                            <div class="">
                                                <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> Angular</i></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="p-3">
                                            <div class="">
                                                <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> Material UI</i></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="p-3">
                                            <div class="">
                                                <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> Node.js</i></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="p-3">
                                            <div class="">
                                                <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> Express.js</i></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="p-3">
                                            <div class="p">
                                                <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill ">  SQL</i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='m-4'>
                                    <h3>Others </h3>
                                </div>
                                <div className='row shadow-lg m-1 p-3'>
                                    <div class="col">
                                        <div>
                                            <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> Redux</i></p> </div>
                                    </div>
                                    <div class="col">
                                        <div>
                                            <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> GitHub</i></p> </div>
                                    </div>
                                    <div class="col">
                                        <div>
                                            <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> Data Structures</i></p> </div>
                                    </div>
                                    <div class="col">
                                        <div>
                                            <p type="text" class="btn btn-dark shadow-lg grow"><i class="bi bi-check-circle-fill "> React Native</i></p> </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade alert " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab ">
                            <div className='m-1 text-center'>
                                <h3>Website I've Built</h3>
                                <p className='fw-semibold'>Website showcases my proficiency in web development and design</p>
                            </div>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card grow">
                                        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="photo" height={200} />
                                        <div className="card-body">
                                            <h5 className="card-title">Appointment Website</h5>
                                            <p className="card-text">Effortlessly schedule appointments on specific dates with our integrated calendar feature, simplifying organization and productivity.</p>
                                            <a className='nav-link' href="https://github.com/SakshiPothikar/Appointment-web" type='button' >Visit</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card grow">
                                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="PHOTO" height={200} />
                                        <div className="card-body">
                                            <h5 className="card-title">Login form Curd</h5>
                                            <p className="card-text">Experience comprehensive login tracking through CRUD functionality, enabling seamless access to a history of all past logins.</p>
                                            <a className='nav-link' href="https://github.com/SakshiPothikar/login-form-curd" type='button' >Visit</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card grow">
                                        <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." height={200} />
                                        <div className="card-body">
                                            <h5 className="card-title">Attandence</h5>
                                            <p className="card-text">Empower efficient attendance management with a Node.js and React-based website, facilitating seamless tracking of student presence and absence.</p>
                                            <a className='nav-link' href="https://github.com/SakshiPothikar/attendance" type='button' >Visit</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <div class="container text-center">
                                <div class="row align-items-start">
                                    <div class="col">
                                        <div className='m-4'>
                                            <h3 className='fw-semibold text-start text-success'>Education </h3>
                                        </div>
                                        <div class="col text-start shadow-lg slide">
                                            <div class="p-2 text-success fw-semibold">
                                                <i class="bi bi-calendar-check"></i>  2021-2024
                                                <p><i class="bi bi-journals"></i> Shiv Chhatrapati College.
                                                    <p><i class="bi bi-pin-map"></i> Bachelor in Computer Application.</p>

                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="col text-start shadow-lg slide">
                                            <div class="p-3 text-success fw-semibold">
                                                <i class="bi bi-calendar-check"></i>  2018-2020
                                                <p><i class="bi bi-journals"></i> Deogiri College.
                                                    <p><i class="bi bi-pin-map"></i> HSC Science.</p>

                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="col text-start shadow-lg slide">
                                            <div class="p-3 text-success fw-semibold">
                                                <i class="bi bi-calendar-check"></i> 2018
                                                <p><i class="bi bi-journals"></i> Holy Cross High School.
                                                    <p><i class="bi bi-pin-map"></i> SSC.</p>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            hey
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;
