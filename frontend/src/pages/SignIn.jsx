import { useDispatch} from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
// REDUX
import { setCredentials } from '../features/auth/authSlice'
import { useLoginMutation } from '../features/auth/authApiSlice'


const SignIn = () => {




  const [email, setEmail] = useState('steve@rogers.com')
  const [pwd, setPwd] = useState('password456')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  // useEffect(() => {
  //     userRef.current.focus()
  // }, [])

  useEffect(() => {
      setErrMsg('')
  }, [email, pwd])

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const tokenData = await login({ email:email, password:pwd }).unwrap()
        const tokenRecu = tokenData.body.token
        dispatch(setCredentials({token: tokenRecu}))
        setEmail('')
        setPwd('')
        navigate('/user')
      } catch (err) {
          if (!err?.originalStatus) {
              setErrMsg('Pas de réponse du serveur');
          } else if (err.originalStatus === 400) {
              setErrMsg(`Email ou le mot de passe manquant`);
          } else if (err.originalStatus === 401) {
              setErrMsg('Non autorisé');
          } else {
              setErrMsg('Email ou le mot de passe incorrect');
          }
      }
  }

  const handleEmailInput = (e) => setEmail(e.target.value)

  const handlePwdInput = (e) => setPwd(e.target.value)




  return (
      <main className="singIn main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"/>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="sign-in-input-container">
              <div className="input-wrapper">
                <label htmlFor="email">
                  Email
                  <input type="text" id="email" onChange={handleEmailInput} value={email} required/>
                  </label>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">
                  Password
                <input type="password" id="password" onChange={handlePwdInput} value={pwd} required/>
                  </label>
              </div>
            </div>
            <div className="input-remember">
              <label htmlFor="remember-me">
                <input type="checkbox" id="remember-me" />
                Remember me
              </label>
            </div>
                    {errMsg && <p className="error-message">{errMsg}</p>}

          <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
  );
};

export default SignIn;