import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBolt, faMicrochip, faClock } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const { isDevMode } = useContext(ThemeContext);
  const heroBg = 'bg-white text-dark';
  const textMuted = 'text-dark';

  return (
    <section className={`hero-section d-flex align-items-center transition-all ${heroBg}`} style={{ minHeight: '100vh', paddingTop: '80px', transition: 'background-color 0.4s ease, color 0.4s ease' }}>
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
                  <h5 className={`${textMuted} mb-3 fw-bold font-monospace small opacity-75`}>&gt; init_ai_agents() --speed=max</h5>
                  <h1 className="display-4 fw-bold mb-4 font-monospace text-dark" style={{ letterSpacing: '-1px' }}>
                    Building <span className="text-decoration-underline">AI-Powered</span> Business Ecosystems.
                  </h1>
                  <p className={`lead mb-5 ${textMuted} font-monospace opacity-75`} style={{ fontSize: '1.1rem' }}>
                    Deploying high-performance web architectures in record time using top-tier stacks (React, TypeScript, Python, FastAPI). 
                    We engineer custom AI Agents and autonomous workflows to skyrocket your productivity.
                  </p>
                  <div className="d-flex gap-3 mb-3">
                    <Button variant="outline-dark" className="px-4 py-3 fw-bold font-monospace rounded-0" style={{ borderWidth: '2px' }}>
                      &gt; execute_projects()
                    </Button>
                    <Button variant="link" className="px-4 py-3 font-monospace rounded-0 text-dark text-decoration-none border border-dark">
                      view_stack.md
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="corp-hero"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h5 className="text-uppercase mb-3 fw-bold small text-secondary" style={{ letterSpacing: '2px' }}>Next-Gen Automation</h5>
                  <h1 className="display-4 fw-bolder mb-4 text-dark" style={{ letterSpacing: '-1px' }}>
                    Supercharging Productivity with <span className="text-decoration-underline">AI Agents.</span>
                  </h1>
                  <p className="lead mb-5 text-secondary">
                    We transform companies by automating complex operations. Delivering cutting-edge software and autonomous AI ecosystems in record time to maximize your efficiency and business growth.
                  </p>
                  <div className="d-flex gap-3 ">
                    <Button variant="dark" className="px-5 py-3 fw-bold rounded-0 text-uppercase shadow-sm" style={{ letterSpacing: '1px' }}>
                      Automate Now
                    </Button>
                    <Button variant="outline-dark" className="px-4 py-3 rounded-0 text-uppercase" style={{ letterSpacing: '1px' }}>
                      Consultancy
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Col>
          
          <Col lg={6} className="d-none d-lg-block">
            <AnimatePresence mode="wait">
              <motion.div
                key={isDevMode ? 'dev-img' : 'corp-img'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="ps-lg-5"
              >
                {isDevMode ? (
                  <div className="p-4 border border-dark rounded-3 bg-black text-white shadow-lg font-monospace" style={{ borderWidth: '2px' }}>
                    <div className="d-flex gap-2 mb-4 pb-3 border-bottom" style={{ borderColor: '#333' }}>
                      <div className="rounded-circle bg-white" style={{ width: 12, height: 12, opacity: 0.2 }}></div>
                      <div className="rounded-circle bg-white" style={{ width: 12, height: 12, opacity: 0.5 }}></div>
                      <div className="rounded-circle bg-white" style={{ width: 12, height: 12 }}></div>
                    </div>
                    <div className="small fw-medium" style={{ color: '#e5e7eb' }}>
                      <p><span className="fw-bold text-white">class</span> StackoAIAgent:</p>
                      <p className="ps-3">def __init__(self):</p>
                      <p className="ps-4">self.core = <span className="fw-bold text-white">"LLM / Claude 3.5"</span></p>
                      <p className="ps-4">self.stack = <span className="fw-bold text-white">["React", "FastAPI", "PostgreSQL"]</span></p>
                      <p className="ps-4">self.delivery_time = <span className="fw-bold text-white">"Record Time"</span></p>
                      <br/>
                      <p className="ps-3">def optimize_business(self):</p>
                      <p className="ps-4">return <span className="fw-bold text-white">"100% Processes Automated"</span></p>
                    </div>
                  </div>
                ) : (
                  <div className="shadow-lg bg-white p-5 border border-dark rounded-0">
                    <div className="d-flex justify-content-between align-items-center mb-5 pb-3 border-bottom border-dark">
                      <h6 className="m-0 fw-bolder text-uppercase" style={{ letterSpacing: '2px' }}>Impact Metrics</h6>
                      <FontAwesomeIcon icon={faRobot} className="fs-4 text-dark" />
                    </div>
                    
                    <div className="mb-4 d-flex align-items-center gap-4">
                      <div className="bg-dark text-white p-3 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                        <FontAwesomeIcon icon={faBolt} className="fs-4" />
                      </div>
                      <div>
                        <div className="small text-secondary text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>AI Task Automation</div>
                        <div className="fw-bolder fs-4 text-dark">+300% Efficiency</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                      <div className="border border-dark text-dark p-3 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                        <FontAwesomeIcon icon={faClock} className="fs-4" />
                      </div>
                      <div>
                        <div className="small text-secondary text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>Delivery Time</div>
                        <div className="fw-bolder fs-4 text-dark">Record Speed</div>
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