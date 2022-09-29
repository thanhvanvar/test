import React from "react"
import {useState} from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Swal from "sweetalert2";
import axios from 'axios';


export default function Index() {
    function MyForm() {

        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
            console.log(value)
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            const data = {
                name: event.target.name.value,
                email: event.target.email.value,
                message: event.target.message.value,
                phone: event.target.phone.value,
            }
            /*alert(inputs);*/
            /*if (value == undefined) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Vui lòng điền'+ name,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
                return false;
            }*/
            /*if (inputs.email == undefined) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Vui lòng điền email',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
                return false;
            }
*/
            axios.post(`https://script.google.com/macros/s/AKfycbyPpIeyI1YcIOCLeUlkL6qFfUOQwc2fG8wwABcQsnGdH50evHjuAUoRiWwEvtt53-2NGQ/exec`, {data})
                .then(res => {
                    console.log(res);
                })
        }

        return (
            <form id="subscribe-form" action="?" onSubmit={handleSubmit}>
                <div className="row bg_two align-items-stretch">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">*Họ tên:</label>
                            <input className="form-control" id="name" type="text" name="name"
                                   placeholder="Tên của bạn *"
                                   onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input className="form-control" id="email" type="email" name="email"
                                   placeholder="Email của bạn *"
                                   onChange={handleChange}/>
                        </div>
                        <div className="form-group mb-md-0">
                            <label htmlFor="message" className="form-label">Vị trí ứng
                                tuyển:</label>
                            <input className="form-control" id="message" type="text" name="message"
                                   placeholder="Vị trí ứng tuyển *"
                                   onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-md-0">
                            <label htmlFor="phone" className="form-label">*Số điện
                                thoại:</label>
                            <input className="form-control" id="phone" type="tel" name="phone"
                                   placeholder="Số điện thoại của bạn *"
                                   onChange={handleChange}/>
                        </div>
                        <div className="text-center pt-5">
                            <button className="btn btn-xl text-uppercase btn_1">Tải lên CV</button>
                            <button className="btn btn-xl text-uppercase btn_2" type="submit">ĐĂNG KÝ</button>
                        </div>
                        <div className="text_1">*Hãy trở thành người đồng hành cùng DKRV HOLDINGS</div>
                    </div>
                </div>
            </form>
        );
    }

    function SliderList(props) {
        const listItems = props.url.map((row, index) => (
            <div className={row.display == 'active' ? "carousel-item active" : "carousel-item"} key={index}>
                <Image
                    src={row.src}
                    alt="Picture of the author"
                    layout="responsive"
                    width={1244}
                    height={700}
                />
            </div>

        ))
        return listItems;
    }

    const slider_url = [
        {display: 'active', src: '/assets/img/tuyen-dung/banner-1.png'},
        {display: '', src: '/assets/img/tuyen-dung/banner-2.png'}
    ];
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <SliderList url={slider_url}/>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="page-section bg_one section_two">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 p-0 pt-5 m-0 col_one">
                            <Image
                                src="/assets/img/tuyen-dung/2-10-01.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/2-10-01.png"
                                width={2177}
                                height={1953}
                            />
                        </div>
                        <div className="col-md-7 p-0 pt-5 m-0 col_two">
                            <Image
                                src="/assets/img/tuyen-dung/2-10-02.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/2-10-02.png"
                                width={2418}
                                height={1851}
                            />

                        </div>

                    </div>
                </div>
            </section>
            <section className="page-section bg_one">
                <div className="container" style={{background: "#ce3131"}}>
                    <div className="row">
                        <div className="col-md-5 p-0"
                             style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <h1 style={{paddingTop: "2.5em"}}
                                className=" bg-success-red text-white text-center pt-115">CÔNG TY <span
                                className="fw-light">HÀNG ĐẦU</span>
                            </h1>
                            <p className="p-5 m-0 text-justify text_section_three"
                               style={{background: "#eaeaea", height: "100%", fontSize: "21px"}}>
                                DKRV Holdings đã từng triển khai nhiều dự án ấn tượng và để lại tiếng vang lớn trên thị
                                trường.
                                Với
                                hệ thống nhiều công ty con và đại lý khắp từ Bắc vào Nam, thị trường hoạt động chủ yếu
                                từ
                                TPHCM
                                –
                                Khánh Hoà, DKRV Holdings đang có tốc độ phát triển nhanh và bền vững trên thị trường bất
                                động
                                sản.
                            </p>
                        </div>
                        <div className="col-md-7 p-0 pt-5 m-0">
                            <Image
                                src="/assets/img/tuyen-dung/tuyen-dung-3.jpg"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/tuyen-dung-3.jpg"
                                width={930}
                                height={617}
                            />
                        </div>

                    </div>
                </div>
            </section>
            <section className="page-section bg_one section_pd_top section_pd_bottom section_four">
                <div className="container">
                    <div className="row row_one">
                        <div className="col-md-4 col_one" style={{
                            background: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <div className={styles.title_two_1}>Sản phẩm</div>
                            <div className={styles.title_two_2}>ĐA DẠNG</div>

                        </div>
                        <div className="col-md-4 m-0 col_two">
                            <Image
                                src="/assets/img/tuyen-dung/2-10-04.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/2-10-04.png"
                                width={743}
                                height={672}
                            />
                        </div>
                        <div className="col-md-4 m-0 col_three">
                            <Image

                                src="/assets/img/tuyen-dung/2-10-03.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/2-10-03.png"
                                width={746}
                                height={685}
                            />
                        </div>

                    </div>
                </div>
            </section>
            <section className="page-section bg_two section_pd_top section_pd_bottom section_five">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className={styles.title_three_1}>Thu nhập</div>
                            <div className={styles.title_three_2}>ĐỘT PHÁ</div>
                            <div className={styles.fs_22}>Hoa hồng:<br></br> <strong>Lên đến 150 - 200TR/GIAO
                                DỊCH</strong></div>
                            <div className={styles.fs_22}>Thưởng nóng theo từng dự án:<br></br> <strong>TỪ 50TR/GIAO
                                DỊCH</strong></div>
                        </div>
                        <div className="col-md-4 m-0">
                            <Image
                                src="/assets/img/tuyen-dung/2-01.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/2-01.png"
                                width={1430}
                                height={1536}
                            />
                        </div>
                        <div className="col-md-4" style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center"
                        }}>
                            <div className="text_1">Thưởng nhóm, thưởng theo quý, năm theo doanh số</div>
                            <div className="text_2">Thu nhập từ 1 tỷ/năm</div>
                            <div className="text_3"><span className="text_4">Hỗ trợ khác</span> <span
                                className="text_5">Chi phí marketing</span></div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-2 m-0"></div>
                        <div className="col-md-4 mt-3">
                            <Image
                                src="/assets/img/tuyen-dung/2-02.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/2-02.png"
                                width={1447}
                                height={965}
                            />
                        </div>

                    </div>
                </div>
            </section>
            <section className="page-section section_pd_top section_pd_bottom section_six"
                     style={{background: "#eaeaea"}} id="services">
                <div className="container">

                    <div className="row">

                        <div className="col-md-5 p-0">
                            <p style={{fontSize: "22px"}} className="text_one">Chương trình đào tạo bài bản 7 ngày cho
                                người mới bắt đầu vào nghề và gia nhập DKRV Holdings
                                <br></br>
                                100% Chuyên viên tư vấn được đào tạo & bổ sung kiến thức, kỹ năng định kỳ.
                                Được tham gia các khoá huấn luyện nâng cao theo cấp bậc với lộ trình phát triển rõ ràng
                                <br></br>
                                Tham gia các buổi chia sẻ thông tin thị trường cùng Ban lãnh đạo và các phòng ban/tổ
                                chức liên quan</p>
                        </div>
                        <div className="col-md-7 p-0"
                             style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                            <Image
                                className={styles.img_one}
                                src="/assets/img/tuyen-dung/2-04.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/2-04.png"
                                width={800}
                                height={385}
                            />
                            <div className="title_one">
                                <p style={{fontSize: "50px"}} className="p-0 m-0 mx-5">ĐÀO TẠO</p>
                                <h4 style={{textAlign: "center", fontSize: "50px"}} className="">& PHÁT TRIỂN</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg_two section_pd_top section_pd_bottom section_seven">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 m-0">
                            <Image
                                src="/assets/img/tuyen-dung/s-7-1.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/s-7-1.png"
                                width={265}
                                height={361}
                            />
                        </div>
                        <div className="col-md-5 m-0">
                            <Image
                                src="/assets/img/tuyen-dung/s-7-3.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/s-7-3.png"
                                width={994}
                                height={764}
                            />
                        </div>
                        <div className="col-md-4 m-0">
                            <Image
                                src="/assets/img/tuyen-dung/s-7-2.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/s-7-2.png"
                                width={607}
                                height={647}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg_two p-3 section_eight">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12 m-auto">
                            <div className="text_1">Chúng tôi luôn tìm kiếm</div>
                            <div className="text_2">NHỮNG CỘNG SỰ ĐAM MÊ LĨNH VỰC BẤT ĐỘNG SẢN</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg_one section_pd_top section_nine">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-0">
                            <Image
                                src="/assets/img/tuyen-dung/s-9-1.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/s-9-1.png"
                                width={748}
                                height={649}
                            />
                        </div>
                        <div className="col-md-7 m-0">
                            <Image
                                src="/assets/img/tuyen-dung/s-9-2.png"
                                alt="Picture of the author"
                                placeholder="blur"
                                blurDataURL="/assets/img/tuyen-dung/s-9-2.png"
                                width={1359}
                                height={992}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg_one section_pd_bottom section_ten" id="contact">
                <div className="container">
                    <MyForm/>
                </div>
            </section>
            <div id="template-mo-zay-hero-carousel2" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel2" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel2" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel2" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner bg-white">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="col-lg-6 mt-2 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1 fs-mb-20">NHIỀU CHƯƠNG TRÌNH </h1>
                                        <h3 className="h2 fs-mb-20">thu hút hàng ngàn CVTV tham gia </h3>
                                    </div>
                                </div>
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <Image
                                        src="/assets/img/tuyen-dung/2-09.png"
                                        alt="Picture of the author"
                                        placeholder="blur"
                                        blurDataURL="/assets/img/tuyen-dung/2-09.png"
                                        width={1671}
                                        height={1254}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <Image
                                        src="/assets/img/tuyen-dung/tuyen-dung-10.jpg"
                                        alt="Picture of the author"
                                        placeholder="blur"
                                        blurDataURL="/assets/img/tuyen-dung/tuyen-dung-10.jpg"
                                        width={1931}
                                        height={1085}
                                    />
                                </div>
                                <div className="col-lg-6 mt-2 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h3 className="h2 fs-mb-20">Những chuyến trải nghiệm thực tế dự án thu hút hàng
                                            trăm CVTV khắp 3
                                            miền</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <Image
                                        src="/assets/img/tuyen-dung/tuyen-dung-11.jpg"
                                        alt="Picture of the author"
                                        placeholder="blur"
                                        blurDataURL="/assets/img/tuyen-dung/tuyen-dung-11.jpg"
                                        width={1849}
                                        height={1033}
                                    />
                                </div>
                                <div className="col-lg-6 mt-2 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h3 className="h2 fs-mb-20">Cùng đồng nghiệp trải nghiệm những cột mốc đáng nhớ
                                            trong nghề</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3"
                   href="#template-mo-zay-hero-carousel"
                   role="button" data-bs-slide="prev">

                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3"
                   href="#template-mo-zay-hero-carousel"
                   role="button" data-bs-slide="next">

                </a>
            </div>
            <section className="bg-success-gray py-5 section_eleven">
                <div className="container">
                    <div className="row text-center pb-3 text-white">
                        <div className="col-lg-12 m-auto">
                            <h1 className="fw-bold-300 fs-mb-20">CÔNG TY CỔ PHẦN DKRV HOLDINGS</h1>
                        </div>
                    </div>
                    <div className="row text-white">

                        <div className="col-md-4 col-lg-4 pb-5">
                            <div className="h1 text-white text-center">
                                <Image
                                    className="img-fluid"
                                    src="/assets/img/tuyen-dung/icon_1.png"
                                    alt="Picture of the author"
                                    placeholder="blur"
                                    blurDataURL="/assets/img/tuyen-dung/icon_1.png"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <p className="text-white text-center fs-16">
                                <strong>13 Đặng Tất, P. Tân Định</strong>
                            </p>
                            <p className="text-white text-center fs-16">
                                Q. 1, TP. HCM
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-4 pb-5">

                            <div className="h1 text-white text-center">
                                <Image
                                    className="img-fluid"
                                    src="/assets/img/tuyen-dung/icon_2.png"
                                    alt="Picture of the author"
                                    placeholder="blur"
                                    blurDataURL="/assets/img/tuyen-dung/icon_2.png"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <p className="text-white text-center fs-16">
                                <strong>(028) 3931 1234</strong>
                            </p>
                            <p className="text-white text-center fs-16">
                                Line 706
                            </p>

                        </div>

                        <div className="col-md-4 col-lg-4 pb-5">

                            <div className="h1 text-white text-center">
                                <Image
                                    className="img-fluid"
                                    src="/assets/img/tuyen-dung/icon_3.png"
                                    alt="Picture of the author"
                                    placeholder="blur"
                                    blurDataURL="/assets/img/tuyen-dung/icon_3.png"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <p className="text-white text-center fs-16">
                                <strong> hcns@dkrvholdings.vn</strong>
                            </p>

                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

Index.getLayout = function getLayout(page) {
    return (
        {page}
    )
}
