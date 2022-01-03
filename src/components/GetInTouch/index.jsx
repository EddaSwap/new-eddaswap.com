import React from "react";

import { Input, Button, Space } from "antd";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import "./index.css";
import { useForm } from "../forms/useForm";

import Fade from "react-reveal/Fade";
import Lottie from "lottie-react";
import animationData from "./line.json";
import { isMobile, browserName } from "react-device-detect";

const MAILCHIMP_SUBSCRIBE_URL = process.env.MAILCHIMP_SUBSCRIBE_URL;

const SubmitForm = (props) => {
  const {
    inputValues,
    handleChange,
    errors,
    validateForm,
    validateField,
    resetState,
  } = useForm("contacts", [
    {
      name: "EMAIL",
      required: true,
      isPhoneOrEmail: true,
    },
  ]);

  const submitForm = async () => {
    let isValidForm = validateForm();

    if (isValidForm) {
      try {
        await props.onSubmitted({
          ...inputValues,
        });
        resetState();
      } catch (e) {
        resetState();
      }
    }
  };

  return (
    <>
      <div className="in-touch-form">
        <Input
          placeholder="Your Email"
          size="large"
          className="in-touch-email"
          name="EMAIL"
          onChange={handleChange}
          onBlur={validateField}
        />
        <br />

        <div
          style={{
            background: "#E6007A",
            color: "#FCFCFD",
            fontDamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "150%",
            borderRadius: "14px",
            padding: "12px 40px",
            textAlign: "center",
            marginLeft: "1.5rem",
          }}
          className="in-touch-form-btn"
          onClick={submitForm}
        >
          Subscribe
        </div>
      </div>
      <span className="error-input">
        {(errors && errors.EMAIL && errors.EMAIL.message) || <br />}
      </span>
    </>
  );
};

const SubscribeForm = () => (
  <MailchimpSubscribe
    url={MAILCHIMP_SUBSCRIBE_URL}
    render={({ subscribe, status, message }) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SubmitForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "white" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "white" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "white" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);

const GetInTouch = () => {
  return (
    <div id="contact" style={{ position: "relative" }}>
      <div className="in-touch-container">
        <Space direction="vertical">
          <Fade bottom>
            <div
              className={
                browserName === "Chrome"
                  ? "in-touch-title-chrome"
                  : "in-touch-title"
              }
              style={{ marginBottom: "32px" }}
            >
              Get in touch
            </div>
          </Fade>
          <Fade bottom delay="200">
            <div className="in-touch-content">
              Any question? Reach out to us and we’ll get back to you shortly.
            </div>
          </Fade>
          <Fade bottom delay="400">
            <div className="in-touch-content in-touch-content-2">
              Subscribe to our newsletter to stay updated.
            </div>
          </Fade>
          <Fade bottom delay="800">
            <SubscribeForm />
          </Fade>
        </Space>
        <Fade bottom delay="1200">
          <Space
            direction="horizontal"
            className="in-touch-contact"
            style={{ gap: "0px" }}
          >
            <Space style={{ zIndex: 10, gap: "16px" }}>
              <img src="/getintouch/email.svg" alt="" width={40} />
              <div
                style={{
                  color: "#FCFCFD",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                }}
              >
                <a
                  href="mailto:hello@eddaswap.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#020313",
                  }}
                >
                  hello@eddaswap.com
                </a>
              </div>
            </Space>
            <Space
              className="telegram-contact-item"
              style={{ zIndex: 10, gap: "16px" }}
            >
              <img src="/getintouch/telegram.svg" alt="" width={40} />
              <div
                style={{
                  color: "#FCFCFD",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                }}
              >
                <a
                  href="https://t.me/EDDASwap"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#020313",
                  }}
                >
                  Join us on Telegram
                </a>
              </div>
            </Space>
          </Space>
        </Fade>
        {!isMobile && (
          <Lottie
            animationData={animationData}
            style={{
              width: "100%",
            }}
          />
        )}
        <div
          style={{
            left: 0,
            position: "absolute",
            top: "50px",
          }}
          className="decor-item floating-item"
        >
          <img src="/getintouch/1.svg" alt="" />
        </div>
        <div
          style={{
            left: "60px",
            position: "absolute",
            top: "400px",
          }}
          className="decor-item floating-item"
        >
          <img src="/getintouch/2.svg" alt="" />
        </div>
        <div
          style={{
            right: "400px",
            position: "absolute",
            bottom: "20px",
          }}
          className="decor-item floating-item"
        >
          <img src="/getintouch/3.svg" alt="" width="250" />
        </div>
        <div
          style={{
            right: "180px",
            position: "absolute",
            bottom: "140px",
          }}
          className="decor-item floating-item"
        >
          <img src="/getintouch/4.svg" alt="" width="200" />
        </div>
        <div
          style={{
            position: "absolute",
            right: "0px",
            top: "250px",
          }}
          className="decor-item floating-item"
        >
          <img src="/getintouch/5.svg" alt="" />
        </div>
      </div>
      {isMobile && (
        <div className="intouch-mobile-decor">
          <img
            src="/getintouch/mobile-decor.svg"
            className="intouch-mobile-decorline"
            alt=""
          />
          <img
            src="/getintouch/mobile-right.svg"
            className="intouch-mobile-decor-left"
            width="160"
            height="340"
            alt=""
          />
          <img
            src="/getintouch/mobile-middle.svg"
            className="intouch-mobile-decor-middle"
            height="200"
            alt=""
          />
          <img
            src="/getintouch/mobile-left.svg"
            className="intouch-mobile-decor-right"
            height="200"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default GetInTouch;
