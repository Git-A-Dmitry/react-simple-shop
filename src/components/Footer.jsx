function Footer() {
  return (
    <>
      <footer className='page-footer grey darken-2'>
        <div className='container'>
          © {new Date().getFullYear()} Hero Shop - All Rights Reserved
          <a className='grey-text text-lighten-4 right' href='https://github.com/Git-A-Dmitry/react-simple-shop' target='_blank' rel='noreferrer'>
            Repository
          </a>
        </div>
      </footer>
    </>
  );
}

export { Footer };
