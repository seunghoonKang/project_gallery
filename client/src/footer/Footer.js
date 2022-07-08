import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        15조의 프로젝트 입니다.
                    </p>
                        <p className="footer-subscription-text">
                            프로젝트 주제는 ~
                        </p>
                    </section>
                    <div class='footer-links'>
                        <div className='footer-link-wrapper'>
                            <div class='footer-link-items'>
                                <h2>팀원 소개</h2>
                                <Link to='/'>강승훈</Link>
                                <Link to='/'>박세웅</Link>
                                <Link to='/'>안소희</Link>
                                <Link to='/'>정덕준</Link>
                                <Link to='/'>추효진</Link>
                           
                            </div>
                            <div class='footer-link-items'>
                                <h2>Contact</h2>
                                <Link to='/'>Elice</Link>
                                <Link to='/'>Git</Link>
                            </div>
                            <div className='footer-link-wrapper'>
                            <div class='footer-link-items'>
                                <h2>Project</h2>
                                <Link to='/'>Page 1</Link>
                                <Link to='/'>Page 2</Link>
                                <Link to='/'>Page 3</Link>
                                <Link to='/'>Page 4</Link>
                            </div>
                        </div>
                    </div>
                    <section className="social-media">
                        <div className="social-media-wrap">
                            <div className="footer-logo">
                                <Link to='/' className="social-logo">
                                    TRVL <i className="fab fa-typo3"></i>
                                </Link>
                            </div>
                            <small className="website-rights">15조 © 2022</small>
                        </div>
                    </section>
                </div>
                </div>
            )        
}
