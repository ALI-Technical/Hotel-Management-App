import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <>
            <section className={`${styles.p_0} bg-img ${styles.coverBackground}`} style={{ backgroundImage: 'url(https://bootdey.com/img/Content/bg1.jpg)' }}>
                <div className="container-fluid d-flex flex-column">
                    <div className="row align-items-center justify-content-center min-vh-100">
                        <div className="col-md-9 col-lg-6 my-5">
                            <div className={`text-center ${styles.errorPage}`}>
                                <h1 className={`mb-0 ${styles.textSecondary}`}>404</h1>
                                <h2 className={`${styles.mb_4} text-white`}>Sorry, something went wrong!</h2>
                                <p className={`w-sm-80 mx-auto ${styles.mb_4} text-white`}>This page is incidentally inaccessible because of support. We will back very before long much obliged for your understanding</p>
                                <div>
                                    <Link to={'/home'}>
                                        <button className="btn btn-info btn-lg me-sm-2 mb-2 mb-sm-0">Return Home</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageNotFound
