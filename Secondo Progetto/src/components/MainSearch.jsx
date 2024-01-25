import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { getsJobs } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const jobs = useSelector((state) => state.job.results)
  const dispatch = useDispatch() //useSelector ottiene il valore dello stato Redux dallo store e useDispatch ottiene la funzione di dispatch dello store

  const handleChange = (e) => {
    setQuery(e.target.value)
  } //quando l'utente modifica l'input, aggiorna lo stato query con il valore inserito dall'utente

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getsJobs(query))
  } 

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Cerca Lavoro</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Scrivi il lavoro che vuoi cercare" className='bars'/>
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => ( //mappa ogni elemento dell'array jobs utilizzando il metodo map
            <Job key={jobData._id} data={jobData} /> ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
