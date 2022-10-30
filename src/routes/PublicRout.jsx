import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function PublicRout( {children} ) {
  const isAuth = useSelector((state) => state.auth.isAuth );
  const navigate = useNavigate();

  if(isAuth){
    navigate('./DashboardPage');
    return "";
  }
  return children;
}

export default PublicRout