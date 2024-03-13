import { Col } from "react-bootstrap";

export const TechStackCard = ({ toolUrl }) => {
  return (
    <Col sm={4} md={3} xl={2}>
      <div className="tech-imgbx">
        <img src={toolUrl} className="tech-img" alt="" />
      </div>
    </Col>
  );
}
