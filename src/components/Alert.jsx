import { useEffect } from 'react';

function Alert(props) {
  const { displayName = '', closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 4000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [displayName]);

  return (
    <div id='toast-container'>
      <div className='toast'>{displayName} added to the basket</div>
    </div>
  );
}

export { Alert };
