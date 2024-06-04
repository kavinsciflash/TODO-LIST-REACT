import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form>
          <label for="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="txt" placeholder="User name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="pswd" placeholder="Password" required="" />
          <button>Sign up</button>
        </form>
      </div>

      <div class="login">
        <form>
          <label for="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="pswd" placeholder="Password" required="" />
          <button onClick={() => navigate('/todo')}>Login</button>
        </form>
      </div>
    </div>

  );
};

export default Login;
