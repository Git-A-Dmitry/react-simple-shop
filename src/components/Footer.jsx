function Footer() {
  return (
    <>
      <footer className='page-footer deep-purple lighten-1'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a className='grey-text text-lighten-4 right' href='#!'>
            Repository
          </a>
        </div>
      </footer>
    </>
  );
}

export { Footer };
