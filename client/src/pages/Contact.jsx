import React from 'react'
import { useAddAdminMutation } from '../redux/admin'
import { useFormik } from 'formik'
import * as yup from "yup"
const Contact = () => {
    const [adminData] = useAddAdminMutation()
    const formik = useFormik({
        initialValues: {
            message: "",
            to: "",
            subject: ""
        },
        validationSchema: yup.object({
            subject: yup.string().required("Enter Name"),
            to: yup.string().required("Enter Email"),
            message: yup.string().required("Enter Message"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            adminData(values);
            resetForm()
        }
    })
    return <>

        <div class="container px-4 text-center">
            <div class="row gx-5">
                <div class="col">
                    <div class="p-3 grow">
                        <img src="letstalk.png" alt="" />
                    </div>
                </div>
                <div class="col">
                    <div class="m-1">
                        <div class="container  alert alert-success fw-semibold text-start shadow-lg fs-5">
                            <div class="row">
                                {/* <pre>{JSON.stringify(formik.errors, null, 2)}</pre> */}
                                <div class="col-md-6 offset-md-3 slide">
                                    <h6>Let's Talk </h6>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div class="form-group slide">
                                            <label for="">Enter Your Name</label>
                                            <input type="" class="form-control"
                                                {...formik.getFieldProps("subject")}
                                                id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputEmail">Email address</label>
                                            <input type="email"
                                                class="form-control slide"
                                                {...formik.getFieldProps("to")}

                                                id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div class="form-group slide">
                                            <label for="inputMessage">Message</label>
                                            <textarea class="form-control" id="inputMessage"
                                                {...formik.getFieldProps('message')}
                                                rows="5" placeholder="Enter your message"></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-primary m-4 slide" onSubmit={formik.handleSubmit}>Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>

}

export default Contact