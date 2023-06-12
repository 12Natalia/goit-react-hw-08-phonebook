import { ThreeCircles } from 'react-loader-spinner';

export const Spiner = () => {
  return (
    <ThreeCircles
      height="300"
      width="100%"
      color="#3f51b5"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '0 auto',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#008000"
      innerCircleColor="#ADFF2F"
      middleCircleColor="#008000"
    />
  );
};
