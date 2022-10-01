function Header() {
  return (
    <div>
      <nav className='teal darken-3'>
        <div className='nav-wrapper'>
          {/* <a href='#' className='brand-logo'>
            Hero Pack Shop
          </a> */}
          <span className='brand-logo' style={{ fontSize: '1.5rem' }}>
            Hero Shop
          </span>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='badges.html'>Home</a>
            </li>
            <li>
              <a href='collapsible.html'>About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Header };
