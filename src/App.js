import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPost } from './redux/actions/postAction';


function App() {
  const data = useSelector(state => state.post.data);
  const requesting = useSelector(state => state.post.requesting);

  console.log(data, requesting);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPost());
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {
          requesting ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            (data && data.length > 0 ?
              <div>
                <ul>
                  {
                    data.map(item => <li key={item.id}>{item.title}</li>)
                  }
                </ul>
              </div>
              :
              <div> Data is empty</div>
            )
        }
      </header>
    </div>
  );
}

export default App;
