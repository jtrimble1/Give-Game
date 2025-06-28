import React from 'react';
import './ThankYou.css'; // reuse same styling

function ThankYou() {
  return (
    <div className="thankyou-page-container">
      <div className="thankyou-card">
        <h1 className="thankyou-title">
          <span className="logo-black">Give</span>
          <span className="logo-amp">&</span>
          <span className="logo-red">Game</span>
        </h1>
        <p className="thankyou-message">
          Thank you for signing up and registering for our mailing list!
          <br />
          Stay tuned for further updates regarding Give&Game, and look out for our fully functional
          website coming <strong>August 2025</strong>!!!
        </p>
      </div>
    </div>
  );
}

export default ThankYou;




// function ThankYou() {
//     const navigate = useNavigate();
  
//     useEffect(() => {
//       const timeout = setTimeout(() => {
//         navigate('/role-page');
//       }, 4000); // 4 seconds
  
//       return () => clearTimeout(timeout);
//     }, [navigate]);
  
//     return (
//       <div className="thankyou-page-container">
//         <div className="thankyou-card">
//           <h1 className="thankyou-title">
//             <span className="logo-black">Give</span>
//             <span className="logo-amp">&</span>
//             <span className="logo-red">Game</span>
//           </h1>
//           <p className="thankyou-message">
//             Thank you for signing up! <br />
//             You’ll be redirected shortly...
//           </p>
//         </div>
//       </div>
//     );
//   }