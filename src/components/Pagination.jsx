// import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const [currentBtn, setCurrentBtn] = useState(2);

  return (
    <div>
      <ul className='pagination'>
        <li className='disabled'>
          <a href='#!'>
            {/* <a href='#!' onClick={() => setCurrentBtn((prev) => (prev === 1 ? prev : prev - 1))}> */}
            <i className='material-icons'>chevron_left</i>
          </a>
        </li>

        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='#!' className={number === currentPage ? 'active' : ''}>
              {number}
            </a>
          </li>
        ))}

        <li className='waves-effect'>
          <a href='#!'>
            {/* <a href='#!' onClick={() => setCurrentBtn((prev) => (prev === pageNumbers.length ? prev : prev + 1))}> */}
            <i className='material-icons'>chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export { Pagination };
