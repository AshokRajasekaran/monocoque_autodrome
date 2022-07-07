import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaSignInAlt,
  FaUserAlt,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";
import MobileMenu from "../../components/MobileMenu";

import Logo from "../../img/Monocoque-Logo-New.png";
import Logo40 from "../../img/logo-40.jpg";
import globe from "../../img/globe.png";
import clock from "../../img/clock.png";
import "flag-icon-css/css/flag-icons.min.css";
import "./style.css";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "pt",
    name: "Português",
    country_code: "pt",
  },
];

const Header = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  const { t } = useTranslation();

  return (
    <Fragment>
      <section className="gauto-header-top-area">
        <Container>
          <Row>
            <Col md={6}>
              <div className="header-top-left">
                <p>
                  <FaPhoneAlt /> {t("call")}: +91 8778719503
                </p>
              </div>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
        </Container>
      </section>
      <header className="gauto-main-header-area">
        <Container>
          <Row>
            {/* <Col md={3}>
              <div className="site-logo">
                <a href="/">
                  <img src={Logo} alt="gauto" />
                </a>
              </div>
            </Col> */}
            <Col lg={6} sm={9}>
              <div className="header-promo">
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img src={Logo40} alt="globe" />
                  </div>
                  <div className="header-promo-info">
                    <h3>Aminjikarai, Chennai</h3>
                    <p>{t("melbourne_city")}</p>
                  </div>
                </div>
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img src={clock} alt="clock" />
                  </div>
                  <div className="header-promo-info">
                    <h3>Open all days</h3>
                    <p>10:00am - 6:30pm</p>
                  </div>
                </div>
              </div>
            </Col>
            <div className="col-lg-3">
              <div className="header-action">
                <Link to="/contact">
                  <FaPhoneAlt /> {t("request_call")}
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </header>
      <section className="gauto-mainmenu-area">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="mainmenu">
                <nav>
                  <ul id="gauto_navigation">
                    <li>
                      <Link to="/">{t("header-navigation.home")}</Link>
                    </li>
                    <li>
                      <Link to="/about">{t("header-navigation.about")}</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        {t("header-navigation.service")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/service">
                            {t("header-navigation.all_service")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-single">
                            {t("header-navigation.service_details")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/gallery">
                        {t("header-navigation.gallery")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        {t("header-navigation.contact")}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
            <Col lg={3} sm={12}>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Header;
