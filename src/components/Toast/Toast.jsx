import { Slide, ToastContainer } from 'react-toastify';

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      theme={'colored'}
      transition={Slide}
      closeOnClick
    />
  );
};

export default Toast;
