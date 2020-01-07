import React from 'react'
import Loadable from 'react-loadable';
import Loading from '../../Utils/Loader/index'
export default Loadable({
  loader: () => import('./index'),
  loading: () => <Loading/>,
});