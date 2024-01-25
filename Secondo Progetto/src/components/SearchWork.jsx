import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'

const WorkSearch = () => {
  const [works, setWork] = useState([])
  const params = useParams()

  const url =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='

  useEffect(() => {
    getWork()
  }, [])

  const getWork = async () => {
    try {
      const response = await fetch(url + params.companyName)
      if (response.ok) {
        const {data} = await response.json()
        setWork(data)
      } else {
        alert('errore')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {works.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default WorkSearch
