import './App.css'
import News from './components/News'
import AsideAdd from './components/AsideAdd'
import Search from './components/Search'
import HorizontalAdd from './components/HorizontalAdd'
import Weather from './components/Weather'
import Popular from './components/Popular'
import Tv from './components/Tv'
import TvNow from './components/TvNow'
import Map from './components/Map'
import { tvList, newsList, asideAdd, category, popular, tvChanel } from './components/data'

function App() {
  return (
    <div>
       <div className='header'>
        <News newsList={newsList}/>
        <AsideAdd asideAdd={asideAdd}/>
      </div>
      <Search category={category}/>
      <HorizontalAdd/>
      <div className='blocks'>
        <div className='col1'>
          <Weather/>
          <Popular popular={popular}/>
        </div>
        <div className='col2'>
          <Map/>
          <Tv tvChanel={tvChanel}/>
        </div>
        <div className='col3'>
          <TvNow tvList={tvList}/>
        </div>
      </div>
    </div>
  )
}

export default App
