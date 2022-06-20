import React from "react";
import '../styles/login.scss';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrTwitter } from 'react-icons/gr';



const LoginPage = () => {

    return (
        <form className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">ĐĂNG NHẬP</h3>
                                <div className="input-form">
                                    <div className="input-username">
                                        <input type="email" id="input-email" className="form-control form-control-lg" placeholder="Email" />
                                    </div>

                                    <div className="input-password">
                                        <input type="password" id="input-password" className="form-control form-control-lg" placeholder="Mật khẩu" />
                                    </div>
                                </div>
                                <div className="login-button">
                                    <button className="btn-login" type="submit">ĐĂNG NHẬP</button>
                                </div>
                                <div className="forget-link">
                                    <a href="#">Quên mật khẩu</a>
                                </div>
                                <hr className="my-4" />
                                {/* <div className="action-more">
                                    <button className="btn-social" type="submit">
                                        <FcGoogle size="20px"/>  Google
                                    </button>
                                    <button className="btn-social" type="submit">
                                        <FaFacebook size="20px" color="#178ef1"/>  Facebook
                                    </button>
                                    <button className="btn-social" type="submit">
                                        <GrTwitter size="20px" color="#1d9bf0"/>  Twitter
                                    </button>
                                </div> */}
                                <div className="register-link">
                                    Bạn mới biết đến Shopee? <a href="#">Đăng ký</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginPage;