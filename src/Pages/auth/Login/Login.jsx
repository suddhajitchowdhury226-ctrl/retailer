import React, { useState } from 'react';
import './Login.scss';
import AuthSlideImg1 from '../../../assets/images/bg/LoginBgImg.png';
import Logo from '../../../assets/images/logos/WholesaleLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type, onClose, show }) => {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast toast--${type}`}>
      <div className="toast__content">
        <div className="toast__icon">
          {type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
        </div>
        <span className="toast__message">{message}</span>
        <button className="toast__close" onClick={onClose}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const navigate = useNavigate();

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: '', type: '' });
  };

  const isFormValid = () => {
    return (
      formData.email.trim() &&
      formData.password.length >= 6 &&
      ['admin', 'wholesaler', 'retailer', 'user'].includes(formData.role)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    console.log('Sending login data:', formData);

    try {
      const response = await axiosInstance.post('/api/auth/login', formData);
      const { token } = response.data;
      if (token) {
        localStorage.setItem('userToken', token);
        console.log('Token stored in localStorage:', token);
        showToast('Login successful!', 'success');
        navigate('/account/my-profile');
      } else {
        showToast('No token received from server', 'error');
        setError('No token received from server');
      }
    } catch (err) {
      console.error('Error response:', err.response?.data);
      const errorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.';
      setError(errorMessage);
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Login__mainWrapper">
      <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
      <div className="loginPage__leftWrapper">
        <div className="mainFormWrapper">
          <div className="logoWrapper">
            <img src={Logo} alt="logo" />
          </div>

          <form className="login__from" onSubmit={handleSubmit} noValidate>
            {error && <p className="error" role="alert">{error}</p>}
            <div className="inputWrapper">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                placeholder="Enter email..."
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                aria-required="true"
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="login-role">Role</label>
              <select id="login-role" name="role" value={formData.role} onChange={handleChange} required aria-required="true">
                <option value="user">User</option>

              </select>
            </div>
            <div className="inputWrapper">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                placeholder="Enter password..."
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                autoComplete="current-password"
                aria-required="true"
                title="Password must be at least 6 characters"
              />
              {formData.password.length > 0 && formData.password.length < 6 && (
                <p className="error" role="alert" style={{ fontSize: '0.8rem', marginTop: '5px', color: 'red' }}>
                  Password must be at least 6 characters long
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !isFormValid()}
              aria-label={loading ? 'Logging in, please wait' : 'Log in to your account'}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="forgetAndRegisterlinkWrapper">
              <Link to="/auth/forgot-password">Forgot password?</Link>
              <p>
                Don't have an account? <Link to="/auth/register">Register Now</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="loginPage__rightWrapper">
        <img src={AuthSlideImg1} alt="bg" />
      </div>
    </div>
  );
};