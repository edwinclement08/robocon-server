import React from 'react';
import './footer.css';
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  HomeFilled,
  YoutubeFilled
} from '@ant-design/icons';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer">
      <Row>
        <Col lg={12} xs={24}>
          <div>
            <h1>ROBOCON CRCE</h1>

            <div className="nav-icons">
              <a target="_blank" href="https://www.facebook.com/roboconcrce/">
                <FacebookFilled className="icon" />
              </a>
              <a target="_blank" href="https://www.instagram.com/robocon.crce/">
                <InstagramFilled className="icon" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/robocon-frcrce-958583148/">
                <LinkedinFilled className="icon" />
              </a>
              <a target="_blank" href="https://www.youtube.com/channel/UCbejVM8W4XUWwHX5Of_tPFQ">
                <YoutubeFilled className="icon" />
              </a>
            </div>
          </div>
        </Col>

        <Col lg={12} xs={24}>
          <div id="contact">
            <h1>
              Contact <span className="touch"> Info</span>
            </h1>
            <table id="myTable">
              <tr>
                <td>
                  <HomeFilled className="icon" />
                </td>
                <td className="td-text">
                  Fr. Conceicao Rodrigues College of Engineering, Bandstand,
                  Bandra (W), Mumbai.
                </td>
              </tr>
              <tr>
                <td>
                  <PhoneFilled className="icon" />
                </td>
                <td className="td-text">7045898193</td>
              </tr>
              <tr>
                <td>
                  <MailFilled className="icon " />
                </td>
                <td className="td-text">
                  <a href="mailto: robocon.frcrce@gmail.com">
                    robocon.frcrce@gmail.com
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
