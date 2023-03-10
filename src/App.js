import './components/App.css';
import './components/world-map/WorldMap.css'
import Header from './components/Header';
import WorldMap from './components/world-map/WorldMap';
import UnitedStates from './components/us-states/UnitedStates';
import { useState } from 'react';
import Europe from './components/europe/Europe';
import Footer from './components/Footer';



function App() {


    const [mapTitleValue, setMapTitleValue] = useState('')

    const [group1TitleValue, setGroup1TitleValue] = useState('')
    const [group2TitleValue, setGroup2TitleValue] =useState('')
    const [group3TitleValue, setGroup3TitleValue] =useState('')
    const [group4TitleValue, setGroup4TitleValue] =useState('')
    const [group5TitleValue, setGroup5TitleValue] =useState('')
    const [group6TitleValue, setGroup6TitleValue] =useState('')
    const [group7TitleValue, setGroup7TitleValue] =useState('')
    const [group8TitleValue, setGroup8TitleValue] =useState('')
  
  
  
  
  
    const [group1ColorValue, setGroup1ColorValue] = useState('#000000')
    const [group2ColorValue, setGroup2ColorValue] = useState('#000000')
    const [group3ColorValue, setGroup3ColorValue] = useState('#000000')
    const [group4ColorValue, setGroup4ColorValue] = useState('#000000')
    const [group5ColorValue, setGroup5ColorValue] = useState('#000000')
    const [group6ColorValue, setGroup6ColorValue] = useState('#000000')
    const [group7ColorValue, setGroup7ColorValue] = useState('#000000')
    const [group8ColorValue, setGroup8ColorValue] = useState('#000000')
  
  
  

  
    const [selectedRes, setSelectedRes] = useState('13.33');
  
    const [ numItems, setNumItems ] = useState(1)
  
  
    
    const handleMapTitleValueChange = (value) => {
      setMapTitleValue(value)
    }
  
  
    const handleTitle1ValueChange = (newValue) => {
      setGroup1TitleValue(newValue)
    }
  
    const handleTitle2ValueChange = (newValue) => {
      setGroup2TitleValue(newValue)
    }
  
    const handleTitle3ValueChange = (newValue) => {
      setGroup3TitleValue(newValue)
    }
  
    const handleTitle4ValueChange = (newValue) => {
      setGroup4TitleValue(newValue)
    }
  
    const handleTitle5ValueChange = (newValue) => {
      setGroup5TitleValue(newValue)
    }
  
    const handleTitle6ValueChange = (newValue) => {
      setGroup6TitleValue(newValue)
    }
  
    const handleTitle7ValueChange = (newValue) => {
      setGroup7TitleValue(newValue)
    }
  
    const handleTitle8ValueChange = (newValue) => {
      setGroup8TitleValue(newValue)
    }

  let component
  switch (window.location.pathname) {
 
    case '/world-map':
      component = 
      <WorldMap
          group1TitleValue={group1TitleValue}
          group2TitleValue={group2TitleValue}
          group3TitleValue={group3TitleValue}
          group4TitleValue={group4TitleValue}
          group5TitleValue={group5TitleValue}
          group6TitleValue={group6TitleValue}
          group7TitleValue={group7TitleValue}
          group8TitleValue={group8TitleValue}

          handleTitle1ValueChange={handleTitle1ValueChange}
          handleTitle2ValueChange={handleTitle2ValueChange}
          handleTitle3ValueChange={handleTitle3ValueChange}
          handleTitle4ValueChange={handleTitle4ValueChange}
          handleTitle5ValueChange={handleTitle5ValueChange}
          handleTitle6ValueChange={handleTitle6ValueChange}
          handleTitle7ValueChange={handleTitle7ValueChange}
          handleTitle8ValueChange={handleTitle8ValueChange}

          group1ColorValue={group1ColorValue}
          group2ColorValue={group2ColorValue}
          group3ColorValue={group3ColorValue}
          group4ColorValue={group4ColorValue}
          group5ColorValue={group5ColorValue}
          group6ColorValue={group6ColorValue}
          group7ColorValue={group7ColorValue}
          group8ColorValue={group8ColorValue}

          setGroup1ColorValue={setGroup1ColorValue}
          setGroup2ColorValue={setGroup2ColorValue}
          setGroup3ColorValue={setGroup3ColorValue}
          setGroup4ColorValue={setGroup4ColorValue}
          setGroup5ColorValue={setGroup5ColorValue}
          setGroup6ColorValue={setGroup6ColorValue}
          setGroup7ColorValue={setGroup7ColorValue}
          setGroup8ColorValue={setGroup8ColorValue}

          mapTitleValue={mapTitleValue}
          handleMapTitleValueChange={handleMapTitleValueChange}

          selectedRes={selectedRes}
          setSelectedRes={setSelectedRes}

          numItems={numItems}
          setNumItems={setNumItems}
      />
    
      break;
    
    case '/us-states':
      component = <UnitedStates
          group1TitleValue={group1TitleValue}
          group2TitleValue={group2TitleValue}
          group3TitleValue={group3TitleValue}
          group4TitleValue={group4TitleValue}
          group5TitleValue={group5TitleValue}
          group6TitleValue={group6TitleValue}
          group7TitleValue={group7TitleValue}
          group8TitleValue={group8TitleValue}

          handleTitle1ValueChange={handleTitle1ValueChange}
          handleTitle2ValueChange={handleTitle2ValueChange}
          handleTitle3ValueChange={handleTitle3ValueChange}
          handleTitle4ValueChange={handleTitle4ValueChange}
          handleTitle5ValueChange={handleTitle5ValueChange}
          handleTitle6ValueChange={handleTitle6ValueChange}
          handleTitle7ValueChange={handleTitle7ValueChange}
          handleTitle8ValueChange={handleTitle8ValueChange}

          group1ColorValue={group1ColorValue}
          group2ColorValue={group2ColorValue}
          group3ColorValue={group3ColorValue}
          group4ColorValue={group4ColorValue}
          group5ColorValue={group5ColorValue}
          group6ColorValue={group6ColorValue}
          group7ColorValue={group7ColorValue}
          group8ColorValue={group8ColorValue}

          setGroup1ColorValue={setGroup1ColorValue}
          setGroup2ColorValue={setGroup2ColorValue}
          setGroup3ColorValue={setGroup3ColorValue}
          setGroup4ColorValue={setGroup4ColorValue}
          setGroup5ColorValue={setGroup5ColorValue}
          setGroup6ColorValue={setGroup6ColorValue}
          setGroup7ColorValue={setGroup7ColorValue}
          setGroup8ColorValue={setGroup8ColorValue}

          mapTitleValue={mapTitleValue}
          handleMapTitleValueChange={handleMapTitleValueChange}

          selectedRes={selectedRes}
          setSelectedRes={setSelectedRes}

          numItems={numItems}
          setNumItems={setNumItems}
      />

      break;

    case '/europe':
      component = <Europe
      group1TitleValue={group1TitleValue}
          group2TitleValue={group2TitleValue}
          group3TitleValue={group3TitleValue}
          group4TitleValue={group4TitleValue}
          group5TitleValue={group5TitleValue}
          group6TitleValue={group6TitleValue}
          group7TitleValue={group7TitleValue}
          group8TitleValue={group8TitleValue}

          handleTitle1ValueChange={handleTitle1ValueChange}
          handleTitle2ValueChange={handleTitle2ValueChange}
          handleTitle3ValueChange={handleTitle3ValueChange}
          handleTitle4ValueChange={handleTitle4ValueChange}
          handleTitle5ValueChange={handleTitle5ValueChange}
          handleTitle6ValueChange={handleTitle6ValueChange}
          handleTitle7ValueChange={handleTitle7ValueChange}
          handleTitle8ValueChange={handleTitle8ValueChange}

          group1ColorValue={group1ColorValue}
          group2ColorValue={group2ColorValue}
          group3ColorValue={group3ColorValue}
          group4ColorValue={group4ColorValue}
          group5ColorValue={group5ColorValue}
          group6ColorValue={group6ColorValue}
          group7ColorValue={group7ColorValue}
          group8ColorValue={group8ColorValue}

          setGroup1ColorValue={setGroup1ColorValue}
          setGroup2ColorValue={setGroup2ColorValue}
          setGroup3ColorValue={setGroup3ColorValue}
          setGroup4ColorValue={setGroup4ColorValue}
          setGroup5ColorValue={setGroup5ColorValue}
          setGroup6ColorValue={setGroup6ColorValue}
          setGroup7ColorValue={setGroup7ColorValue}
          setGroup8ColorValue={setGroup8ColorValue}

          mapTitleValue={mapTitleValue}
          handleMapTitleValueChange={handleMapTitleValueChange}

          selectedRes={selectedRes}
          setSelectedRes={setSelectedRes}

          numItems={numItems}
          setNumItems={setNumItems}
      />
  }




  return (
    <div className="App">

      <Header/>
      
      {component}

      <Footer/>
      </div>
  );
}

export default App;
