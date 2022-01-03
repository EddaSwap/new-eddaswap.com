import React from "react";

import "./index.css";

const Team = () => {
  return (
    <div
      style={{ backgroundColor: "#16151A", width: "100%", height: "100%" }}
      id="terms"
    >
      <div className={"terms__div"}>
        <div className={"terms__header"}>
          <div
            animation="fadeInUp"
            duration="0.6s"
            delay="0.65s"
            style={{ textAlign: "center" }}
          >
            <a className={"terms__logo"} href="/">
              <img
                className={"terms__logo__img"}
                src={"/logo2.svg"}
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div animation="fadeInUp" duration="0.6s" delay="0.95s">
          <h1 className={"terms__title"}>Terms &amp; Conditions</h1>
        </div>
        <div className={"terms__list"}>
          <div animation="fadeInUp" duration="0.6s" delay="1.1s">
            <p>
              These Terms &amp; Conditions apply to www.EDDASwap.com as well as
              any other affiliated sites, digital services, or applications on
              which a link to these Terms &amp; Conditions appears
              (collectively, the "Website") and apply to all visitors. These
              Terms &amp; Conditions and any other terms that appear on the page
              from which you were directed to these Terms &amp; Conditions
              govern your use of the Website. By accessing the Website, you
              agree to be legally bound by the Terms &amp; Conditions then in
              effect. Please also refer to the relevant additional legal
              information applicable to your country.
            </p>
          </div>
          <div animation="fadeInUp" duration="0.6s" delay="1.2s">
            <p>
              These Terms &amp; Conditions as well as the information and
              materials contained in the Website are subject to change at any
              time and from time to time, without notice. If you do not agree to
              be bound by these Terms &amp; Conditions, do not use the Website.
            </p>
          </div>
          <div animation="fadeInUp" duration="0.6s" delay="1.3s">
            <p>
              The Website and all information and functionalities contained
              within them are not directed at or intended for use by any person
              resident or located in any jurisdiction where (1) the distribution
              of such information or functionality is contrary to the laws of
              such jurisdiction; or (2) such distribution is prohibited without
              obtaining the necessary licenses or authorizations by the relevant
              branch, subsidiary or affiliate office of EDDASwap and such
              licenses or authorizations have not been obtained.
            </p>
          </div>
          <div animation="fadeInUp" duration="0.6s" delay="1.4s">
            <p>
              Unless specifically stated otherwise, all information on the
              Website is indicative only. No representation or warranty, either
              express or implied, is provided in relation to the accuracy,
              completeness or reliability of the materials, nor are they a
              complete statement of the developments referred to herein. The
              materials should not be regarded by recipients as a substitute for
              the exercise of their own judgment.
            </p>
          </div>
          <div animation="fadeInUp" duration="0.6s" delay="1.5s">
            <p>
              All information and materials published, distributed or otherwise
              made available on the Website are provided for informational
              purposes, for your non-commercial, personal use only. No
              information or materials published on the Website constitutes a
              solicitation, an offer, or a recommendation to buy or sell any
              investment instruments, to effect any transactions, or to conclude
              any legal act of any kind whatsoever.
            </p>
          </div>
          <div animation="fadeInUp" duration="0.6s" delay="1.6s">
            <p>
              EDDASwap does not provide investment, legal or tax advice through
              the Website and nothing herein should be construed as being
              financial, legal, tax or other advice.
            </p>
          </div>
          <div animation="fadeInUp" duration="0.6s" delay="1.7s">
            <p>
              Your use of the Website, and any other affiliated sites, digital
              services, applications, or functionalities offered in connection
              with the Website, is at your own risk. Any platforms or
              applications offered by EDDASwap are in their beta version, and
              your use of the same is at your own risk. The Website, together
              with all content, information and materials contained therein, is
              provided "as is" and "as available", without any representations
              or warranties of any kind. Any materials, information or content
              accessed, downloaded or otherwise obtained through the use of the
              Website is done at your own risk and EDDASwap is not responsible
              for any damage to your computer systems or loss of data that
              results from the download of such material.
            </p>
          </div>
          <div animation="fadeInUp" duration="0.6s" delay="1.8s">
            <p>
              To the fullest extent permitted by law, in no event shall EDDASwap
              or our affiliates, or any of our directors, employees,
              contractors, service providers or agents have any liability
              whatsoever to any person for any direct or indirect loss,
              liability, cost, claim, expense or damage of any kind, whether in
              contract or in tort, including negligence, or otherwise, arising
              out of or related to the use of all or part of the Website, or any
              links to third party websites.
            </p>
          </div>
          <div animation="fadeInUp" duration="0.6s" delay="1.9s">
            <p>
              EDDASwap shall not be liable to you or anybody else for any
              damages incurred in connection with any messages sent to EDDASwap
              using ordinary e-mail or any other electronic messaging system.
            </p>
          </div>
          <div animation="fadeInUp" duration="0.6s" delay="1.9s">
            <p>
              Your use of the Website, and any other affiliated sites, digital
              services, applications, or functionalities offered in connection
              with the Website, including participation in the Token Sale, is at
              your own risk, and EDDASwap makes no representations or warranties
              for the same. In no event and under no circumstances will EDDASwap
              or any of our directors, employees, contractors, service
              providers, consultants, advisors or agents be liable for any
              refund or monetary claim, and no portion of any payments of any
              kind whatsoever made hereunder shall be owed or be repayable or
              refunded by EDDASwap. EDDASwap reserves the right to change the
              terms of the Token Sale at any time, at EDDASwap's discretion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
