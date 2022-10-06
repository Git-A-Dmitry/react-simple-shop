function Footer() {
  return (
    <>
      <footer className='page-footer grey darken-2'>
        <div className='container'>
          © {new Date().getFullYear()} Hero Shop - All Rights Reserved
          <a className='grey-text text-lighten-4 right' href='#!'>
            Terms and Conditions
          </a>
        </div>
      </footer>
    </>
  );
}

export { Footer };
