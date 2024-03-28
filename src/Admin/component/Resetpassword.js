import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import "../css/resetpassword.css"
const ResetPassword = () => {
    const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi API để gửi email reset mật khẩu
    // Sau khi gửi email thành công, chuyển hướng đến trang đăng nhập
    navigate("/admin/user-manager")
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
    <div className="reset-password">
      <div className="container">
        <h1>Reset password</h1>
        <h2>Enter your new password</h2>
        <form className="form" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
          <input
            className="Newpassword"
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default ResetPassword;