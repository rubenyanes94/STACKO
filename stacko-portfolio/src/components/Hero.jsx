import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faChartLine, faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const { isDevMode } = useContext(ThemeContext);

  return (
    <section className="hero-section d-flex align-items-center" style={{ minHeight: '90vh', paddingTop: '80px' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <AnimatePresence mode="wait">
              {isDevMode ? (
                <motion.div
                  key="dev-hero"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h5 className="text-brand mb-3 fw-bold font-monospace">&gt; root.start_engine()</h5>
                  <h1 className="display-3 fw-bold mb-4 font-monospace">
                    Building <span className="text-brand">Scalable</span> Backend Architectures.
                  </h1>
                  <p className="lead mb-5 text-secondary font-monospace">
                    Full Stack Developer specialized in Python (Flask) and React[cite: 4, 34]. 
                    Turning complex logic into efficient RESTful APIs[cite: 5, 10].
                  </p>
                  <div className="d-flex gap-3">
                    <Button variant="outline-info" className="px-4 py-2 mb-5 font-monospace">view_projects()</Button>
                    <Button variant="link" className="text-decoration-none text-secondary font-monospace mb-5">read_docs.pdf</Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="analyst-hero"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h5 className="text-indigo mb-3 fw-bold">Strategic Insights & Data Visualization</h5>
                  <h1 className="display-3 fw-bold mb-4">
                    Data Driven <span className="text-indigo">Decisions</span> for Growth.
                  </h1>
                  <p className="lead mb-5 text-muted">
                    Transforming raw data into actionable business intelligence using Power BI and Tableau[cite: 30].
                    Expertise in PostgreSQL and SQL Alchemy for data integrity[cite: 9, 35].
                  </p>
                  <div className="d-flex gap-3">
                    <Button className="btn-indigo px-4 py-2 shadow">View Dashboards</Button>
                    <Button variant="outline-secondary" className="px-4 py-2">Consultancy Services</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <AnimatePresence mode="wait">
              <motion.div
                key={isDevMode ? 'dev-img' : 'ana-img'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="ps-lg-5"
              >
                {isDevMode ? (
                  <div className="stacko-card font-monospace p-4 border-brand">
                    <div className="d-flex gap-2 mb-3">
                      <div className="rounded-circle bg-danger" style={{ width: 12, height: 12 }}></div>
                      <div className="rounded-circle bg-warning" style={{ width: 12, height: 12 }}></div>
                      <div className="rounded-circle bg-success" style={{ width: 12, height: 12 }}></div>
                    </div>
                    <div className="text-secondary small">
                      <p><span className="text-success">class</span> <span className="text-brand">StackoEngine:</span></p>
                      <p className="ps-3">def __init__(self):</p>
                      <p className="ps-4 text-warning">self.frontend = "React.js"</p>
                      <p className="ps-4 text-warning">self.backend = "Python/Flask"</p>
                      <p className="ps-4 text-warning">self.database = "PostgreSQL"</p>
                      <p className="ps-3">def deploy(self):</p>
                      <p className="ps-4 text-info">return "App live on Heroku/Vercel" [cite: 12]</p>
                    </div>
                  </div>
                ) : (
                  <div className="stacko-card shadow-lg bg-white p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h6 className="m-0 fw-bold">Project Growth KPI</h6>
                      <FontAwesomeIcon icon={faChartLine} className="text-indigo" />
                    </div>
                    <div className="bg-light rounded p-3 mb-3 d-flex align-items-center gap-3">
                      <FontAwesomeIcon icon={faCodeBranch} className="text-indigo fs-4" />
                      <div>
                        <div className="small text-muted">Dev Efficiency</div>
                        <div className="fw-bold">+24% Improved Flow</div>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 d-flex align-items-center gap-3">
                      <FontAwesomeIcon icon={faDatabase} className="text-success fs-4" />
                      <div>
                        <div className="small text-muted">Data Integrity</div>
                        <div className="fw-bold">100% PostgreSQL Synced [cite: 25]</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;