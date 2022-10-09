const Pagination = ({ goodsPerPage, totalGoods, paginate, currentPage, prevPage, nextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {currentPage !== 1 && (
          <li className='waves-effect' onClick={() => prevPage()}>
            <a href='#!'>
              <i className='material-icons'>chevron_left</i>
            </a>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='#!' className={number === currentPage ? 'active' : ''}>
              {number}
            </a>
          </li>
        ))}

        {pageNumbers.length !== currentPage && (
          <li className='waves-effect' onClick={() => nextPage()}>
            <a href='#!'>
              <i className='material-icons'>chevron_right</i>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export { Pagination };
