import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'
const Job = ({ data }) => {

  return (
    <><Row
      className="mx-0 mt-3 p-3 divv">
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
    </> 
  )
}

export default Job