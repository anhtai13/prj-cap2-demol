import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import "../css/forgotpassword.css"
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi API để gửi email reset mật khẩu
    // Sau khi gửi email thành công, chuyển hướng đến trang đăng nhập
    navigate("/resetpassword")
  };
  const handleBackToLogin = () => {
    // Gọi API để logout (nếu cần)
    navigate("/")
    // Chuyển hướng đến trang login
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        handleSubmit();
    }
}
  return (
    <div className="forgot-password">
      <div className="container">
        <h1>Forgot password</h1>
        <h3>Enter the email you used to create your account so we can send you instructions on how to reset your password.</h3>
        <form className="form" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
          <input
            className="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="button_send" type="submit" onClick={handleSubmit}>
            Send
          </button>
          <button className="button_back" type="submit" onClick={handleBackToLogin}>
            Back to login
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default ForgotPassword;