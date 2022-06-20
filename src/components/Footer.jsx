import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import '../styles/footer.scss'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { FaInstagramSquare, FaLinkedin, FaGooglePlay } from 'react-icons/fa'


export default function App() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

            <section className='information'>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3 column'>
                        <div className='col-md-1 col-lg-2 col-xl-2 mx-auto mb-4 care'>
                            <div className='title'>CHĂM SÓC KHÁCH HÀNG</div>
                            <ul className='link-more'>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Trung Tâm Trợ Giúp</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Shopee Blog</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Shopee Mall</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Hướng Dẫn Mua Hàng</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Hướng Dẫn Bán Hàng</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Thanh Toán</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Shopee Xu</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Vận Chuyển</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Trả Hàng & Hoàn Tiền</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Chăm Sóc Khách Hàng</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Chính Sách Bảo Hành</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 about-us'>
                            <div className='title'>VỀ SHOPEE</div>
                            <ul className='link-more'>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Giới Thiệu Về Shopee Việt Nam</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Tuyển Dụng</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Điều Khoản Shopee</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Chính Sách Bảo Mật</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Chính Hãng</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Kênh Người Bán</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Flash Sales</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Chương Trình Tiếp Thị Liên Kết Shopee</a>
                                </li>
                                <li className='lsm'>
                                    <a href='#' className='' title=''>Liên Hệ Với Truyền Thông</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 follow'>
                            <div className='title'>THEO DÕI CHÚNG THÔI TRÊN</div>
                            <ul className='link-more'>
                                <li className='lsm'>
                                    <BsFacebook />
                                    <a href='#' className='' title=''>Facebook</a>
                                </li>
                                <li className='lsm'>
                                    <FaInstagramSquare />
                                    <a href='#' className='' title=''>Instagram</a>
                                </li>
                                <li className='lsm'>
                                    <FaLinkedin />
                                    <a href='#' className='' title=''>Linkedin</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 app'>
                            <div className='title'>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</div>
                            <ul className='link-more'>
                                <li className='lsm'>
                                    <BsApple />
                                    <a href='#' className='' title=''>App Store</a>
                                </li>
                                <li className='lsm'>
                                    <FaGooglePlay />
                                    <a href='#' className='' title=''>Google Play</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <div className='address'>
                <div className='infor-address'>Công Ty TNHH Shopee</div>
                <div className='infor-address'>
                    Địa chỉ: Tầng 4-5-6, toà nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành Phố Hà Nội, Việt Nam.
                    Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                </div>
                <div className='infor-address'>
                    Chịu Trách Nhiệm Quản Lý Nội Dung: Đỗ Trung Giang - Điện thoại liên hệ: 0123456789
                </div>
                <div className='infor-address'>
                    Mã số doanh nghiệp: 0123456789 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                </div>
            </div>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2015 Shopee. Tất cả các quyền được bảo lưu.
            </div>
        </MDBFooter>
    );
}