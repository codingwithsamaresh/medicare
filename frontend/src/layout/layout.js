import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Router from '../router/Router'

const layout = () => {
  return (
    <>
        <Header />
        <main>
            <Router />
        </main>
        <Footer />
    </>
  )
}

export default layout