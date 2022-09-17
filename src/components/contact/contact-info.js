import React from "react";

const ContactInfo = () => {
  return (
    <>
      <h2 className="mb-3 text-5 text-uppercase">Address</h2>
      <p className="text-3 mb-4">
        1th Floor, Plot No.18,
        <br />
        145 sokullu mehmet pasa Rd.
        <br />
        city
      </p>
      <p className="text-3 mb-1">
        <span className="text-primary text-4 me-2">
          <i className="fas fa-phone"></i>
        </span>
        (090) 545 130 0955
      </p>
      <p className="text-3 mb-1">
        <span className="text-primary text-4 me-2">
          <i className="fas fa-fax"></i>
        </span>
        (060) 555 545 555
      </p>
      <p className="text-3 mb-4">
        <span className="text-primary text-4 me-2">
          <i className="fas fa-envelope"></i>
        </span>
        muzafferyenicet@gmail.com
      </p>
      <h2 className="mb-3 text-5 text-uppercase">Follow Me</h2>
      <ul className="social-icons justify-content-center justify-content-md-start">
        <li className="social-icons-dribbble">
          <a
            data-bs-toggle="tooltip"
            href="../../../harnishdesign/index.htm"
            target="_blank"
            title="Dribbble"
          >
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
        <li className="social-icons-twitter">
          <a
            data-bs-toggle="tooltip"
            href="../../../harnishdesign/index-1.htm"
            target="_blank"
            title="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-icons-facebook">
          <a
            data-bs-toggle="tooltip"
            href="../../../harnishdesign/index-2.htm"
            target="_blank"
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="social-icons-google">
          <a
            data-bs-toggle="tooltip"
            href="../../../index-3.htm"
            target="_blank"
            title="Google"
          >
            <i className="fab fa-google"></i>
          </a>
        </li>
        <li className="social-icons-github">
          <a
            data-bs-toggle="tooltip"
            href="../../../index-4.htm"
            target="_blank"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default ContactInfo;
