import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <div className='outer-container'>
      <div className='title'>
        <h1>
          Welcome to Earie
        </h1>
        <p className='blurb'>
          Welcome to our Earie where your hearing comes first.
        </p>
      </div>
      <div className='hero'>
        <img className='hero-img' src='https://media.istockphoto.com/id/1339140097/vector/deafness-concept-different-types-of-hearing-aids-by-size-type-linear-vector-illustration-in.jpg?s=612x612&w=0&k=20&c=OOiZLddE5VAr6Co0uxehAWWxQEV9D2GwStwgkVJDHbs=' alt='hero'/>
      </div>
    </div>

    </div>
  )
}

export default Home