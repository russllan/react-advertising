import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PrivateRout( {children} ) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  if(!isAuth){
    return navigate('./login')
  }
  return children;
}

export default PrivateRout;