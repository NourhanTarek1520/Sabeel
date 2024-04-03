import React from "react";

function TeamContainer() {
    return(<div>
        <div className="container-fluid team py-5" dir="rtl">
    <div className="container py-5">
    <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" >
        <p className="fs-5 text-uppercase text-primary">فريقنا</p>
        <h1 className="display-3">تعرف على منظمنا</h1>
    </div>

    <div className="row g-5">
        <div className="col-lg-4 col-xl-5">
            <div className="team-img wow zoomIn" data-wow-delay="0.1s">
            <img src="../../assets/img/blog-1.jpg" className="img-fluid" alt=""/>
            </div>
        </div>

        <div className="col-lg-8 col-xl-7">
            <div className="team-item wow fadeIn" data-wow-delay="0.1s">
                <h1> نورهان طارق</h1>
                <h5 className="fw-normal fst-italic text-primary mb-4">رئيس</h5>
                <p className="mb-4">
                رغي كثييييييييييير رغي كثييييييييييير رغي كثييييييييييير رغي كثييييييييييير رغي كثييييييييييير رغي كثييييييييييير رغي كثييييييييييير رغي كثييييييييييير 
                </p>
                <div className="team-icon d-flex pb-4 mb-4 border-bottom border-primary">
                <a className="btn btn-primary btn-lg-square me-2" href=""><i className="fab fa-facebook-f"></i> فيسبوك</a>
                <a className="btn btn-primary btn-lg-square me-2" href=""><i className="fab fa-twitter"></i> تويتر</a>
                <a href="#" className="btn btn-primary btn-lg-square me-2"><i className="fab fa-instagram"></i> انستقرام</a>
                <a href="#" className="btn btn-primary btn-lg-square"><i className="fab fa-linkedin-in"></i> لينكدإن</a>
                </div>
            </div>
            
            <div className="row g-4">
            <div className="col-md-4">
                <div className="team-item wow zoomIn" data-wow-delay="0.2s">
                <img src="../../assets/img/about-2.jpg" className="img-fluid w-100" alt=""/>
                <div className="team-content text-dark text-center py-3">
                    <div className="team-content-inner">
                    <h5 className="mb-0">مصطفى كمال</h5>
                    <p className="text-dark">إمام</p>
                    <div className="team-icon d-flex align-items-center justify-content-center">
                        <a className="btn btn-primary btn-sm-square me-2" href=""><i className="fab fa-facebook-f"></i> فيسبوك</a>
                        <a className="btn btn-primary btn-sm-square me-2" href=""><i className="fab fa-twitter"></i> تويتر</a>
                        <a href="#" className="btn btn-primary btn-sm-square me-2"><i className="fab fa-instagram"></i> انستقرام</a>
                        <a href="#" className="btn btn-primary btn-sm-square"><i className="fab fa-linkedin-in"></i> لينكدإن</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>  
    </div>)
    
}
export default TeamContainer