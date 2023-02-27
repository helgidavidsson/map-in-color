import React, { useState, Component } from 'react'
import '../App.css'

import NavButton from '../NavButton'
import Legend1 from './legends/Legend-1';
import Legend2 from './legends/Legend-2';
import Legend3 from './legends/Legend-3';
import Legend4 from './legends/Legend-4';
import Legend5 from './legends/Legend-5';
import Legend6 from './legends/Legend-6';
import Legend7 from './legends/Legend-7';
import Legend8 from './legends/Legend-8';


function Navigator({ 
    legend1TitleValue, 
    legend2TitleValue ,
    legend3TitleValue,
    legend4TitleValue,
    legend5TitleValue,
    legend6TitleValue,
    legend7TitleValue,
    legend8TitleValue,




    handleTitle1ValueChange,
    handleTitle2ValueChange, 
    handleTitle3ValueChange,
    handleTitle4ValueChange,
    handleTitle5ValueChange,
    handleTitle6ValueChange,
    handleTitle7ValueChange,
    handleTitle8ValueChange,




    legend1ColorValue, 
    legend2ColorValue, 
    legend3ColorValue,
    legend4ColorValue,
    legend5ColorValue,
    legend6ColorValue,
    legend7ColorValue,
    legend8ColorValue,





    setLegend1ColorValue, 
    setLegend2ColorValue,
    setLegend3ColorValue,
    setLegend4ColorValue,
    setLegend5ColorValue,
    setLegend6ColorValue,
    setLegend7ColorValue,
    setLegend8ColorValue,



    


    numItems,
    setNumItems



}) {

    
    const [ activeLegend, setActiveLegend ] = useState(1);



    const [ activeButton, setActiveButton ] = useState(1)

    
    const [legend1StatesValue, setLegend1StatesValue] = useState('');
    
    const [legend2StatesValue, setLegend2StatesValue] = useState('');
    
    const [legend3StatesValue, setLegend3StatesValue] = useState('');
    
    const [legend4StatesValue, setLegend4StatesValue] = useState('');
    
    const [legend5StatesValue, setLegend5StatesValue] = useState('');
    
    const [legend6StatesValue, setLegend6StatesValue] = useState('');
    
    const [legend7StatesValue, setLegend7StatesValue] = useState('');
    
    const [legend8StatesValue, setLegend8StatesValue] = useState('');












    

   const handleButtonClick = (buttonNum) => {
    setActiveLegend(buttonNum)
    setActiveButton(buttonNum)
   }

   const handleAddButtonClick = () => {
    if (numItems < 8) {
        var addButton = document.getElementById('addButton')

      setNumItems(numItems + 1);
      
    } if (numItems >= 7) {
        addButton.style.display = 'none'
    }  
  };


    
    return(

        <div>

            <ul className='class-items'>
            {Array.from({ length: Math.min(numItems, 8) }, (_, index) => (<li className='nav-button' key={index}>
            <NavButton
              onClick={() => handleButtonClick(index + 1)}
              label={`Group ${index + 1}`}
              active={activeButton === index + 1}
              index={index}
              numItems={numItems}
              setNumItems={setNumItems}
              
            />
             
          </li>
        ))}

        <button id='addButton' className='add-button' onClick={handleAddButtonClick}><img className='add-img' src='../assets/plus.png'></img></button>
                

        

                </ul>
            
                <Legend1
                    activeLegend={activeLegend}
                    // color value
                   legend1ColorValue = {legend1ColorValue}
                   setLegend1ColorValue={setLegend1ColorValue}
                   
                   // states value
                    legend1StatesValue={legend1StatesValue}
                    setLegend1StatesValue={setLegend1StatesValue}
    
                    legend2StatesValue={legend2StatesValue}
                    setLegend2StatesValue={setLegend2StatesValue}

                    legend3StatesValue={legend3StatesValue}
                    setLegend3StatesValue={setLegend3StatesValue}

                    legend4StatesValue={legend4StatesValue}
                    setLegend4StatesValue={setLegend4StatesValue}

                    legend5StatesValue={legend5StatesValue}
                    setLegend5StatesValue={setLegend5StatesValue}

                    legend6StatesValue={legend6StatesValue}
                    setLegend6StatesValue={setLegend6StatesValue}

                    legend7StatesValue={legend7StatesValue}
                    setLegend7StatesValue={setLegend7StatesValue}

                    legend8StatesValue={legend8StatesValue}
                    setLegend8StatesValue={setLegend8StatesValue}


                   // legend title
                   legend1TitleValue={legend1TitleValue}
                   handleTitle1ValueChange={handleTitle1ValueChange}

                 

                />

                <Legend2
                    activeLegend={activeLegend}
                    // color value
                   legend2ColorValue = {legend2ColorValue}
                   setLegend2ColorValue={setLegend2ColorValue}
                   
                   // states value
                    legend1StatesValue={legend1StatesValue}
                    setLegend1StatesValue={setLegend1StatesValue}
    
                    legend2StatesValue={legend2StatesValue}
                    setLegend2StatesValue={setLegend2StatesValue}

                    legend3StatesValue={legend3StatesValue}
                    setLegend3StatesValue={setLegend3StatesValue}

                    legend4StatesValue={legend4StatesValue}
                    setLegend4StatesValue={setLegend4StatesValue}

                    legend5StatesValue={legend5StatesValue}
                    setLegend5StatesValue={setLegend5StatesValue}

                    legend6StatesValue={legend6StatesValue}
                    setLegend6StatesValue={setLegend6StatesValue}

                    legend7StatesValue={legend7StatesValue}
                    setLegend7StatesValue={setLegend7StatesValue}

                    legend8StatesValue={legend8StatesValue}
                    setLegend8StatesValue={setLegend8StatesValue}


                   // legend title
                   legend2TitleValue={legend2TitleValue}
                   handleTitle2ValueChange={handleTitle2ValueChange}

                 

                />

                  <Legend3
                    activeLegend={activeLegend}
                    // color value
                   legend3ColorValue = {legend3ColorValue}
                   setLegend3ColorValue={setLegend3ColorValue}
                   
                   // states value
                    legend1StatesValue={legend1StatesValue}
                    setLegend1StatesValue={setLegend1StatesValue}
    
                    legend2StatesValue={legend2StatesValue}
                    setLegend2StatesValue={setLegend2StatesValue}

                    legend3StatesValue={legend3StatesValue}
                    setLegend3StatesValue={setLegend3StatesValue}

                    legend4StatesValue={legend4StatesValue}
                    setLegend4StatesValue={setLegend4StatesValue}

                    legend5StatesValue={legend5StatesValue}
                    setLegend5StatesValue={setLegend5StatesValue}

                    legend6StatesValue={legend6StatesValue}
                    setLegend6StatesValue={setLegend6StatesValue}

                    legend7StatesValue={legend7StatesValue}
                    setLegend7StatesValue={setLegend7StatesValue}

                    legend8StatesValue={legend8StatesValue}
                    setLegend8StatesValue={setLegend8StatesValue}


                   // legend title
                   legend3TitleValue={legend3TitleValue}
                   handleTitle3ValueChange={handleTitle3ValueChange}

                 

                />

                  <Legend4
                    activeLegend={activeLegend}
                    // color value
                   legend4ColorValue = {legend4ColorValue}
                   setLegend4ColorValue={setLegend4ColorValue}
                   
                   // states value
                    legend1StatesValue={legend1StatesValue}
                    setLegend1StatesValue={setLegend1StatesValue}
    
                    legend2StatesValue={legend2StatesValue}
                    setLegend2StatesValue={setLegend2StatesValue}

                    legend3StatesValue={legend3StatesValue}
                    setLegend3StatesValue={setLegend3StatesValue}

                    legend4StatesValue={legend4StatesValue}
                    setLegend4StatesValue={setLegend4StatesValue}

                    legend5StatesValue={legend5StatesValue}
                    setLegend5StatesValue={setLegend5StatesValue}

                    legend6StatesValue={legend6StatesValue}
                    setLegend6StatesValue={setLegend6StatesValue}

                    legend7StatesValue={legend7StatesValue}
                    setLegend7StatesValue={setLegend7StatesValue}

                    legend8StatesValue={legend8StatesValue}
                    setLegend8StatesValue={setLegend8StatesValue}


                   // legend title
                   legend4TitleValue={legend4TitleValue}
                   handleTitle4ValueChange={handleTitle4ValueChange}

                 

                />
                

                <Legend5
                    activeLegend={activeLegend}
                    // color value
                   legend5ColorValue = {legend5ColorValue}
                   setLegend5ColorValue={setLegend5ColorValue}
                   
                   // states value
                    legend1StatesValue={legend1StatesValue}
                    setLegend1StatesValue={setLegend1StatesValue}
    
                    legend2StatesValue={legend2StatesValue}
                    setLegend2StatesValue={setLegend2StatesValue}

                    legend3StatesValue={legend3StatesValue}
                    setLegend3StatesValue={setLegend3StatesValue}

                    legend4StatesValue={legend4StatesValue}
                    setLegend4StatesValue={setLegend4StatesValue}

                    legend5StatesValue={legend5StatesValue}
                    setLegend5StatesValue={setLegend5StatesValue}

                    legend6StatesValue={legend6StatesValue}
                    setLegend6StatesValue={setLegend6StatesValue}

                    legend7StatesValue={legend7StatesValue}
                    setLegend7StatesValue={setLegend7StatesValue}

                    legend8StatesValue={legend8StatesValue}
                    setLegend8StatesValue={setLegend8StatesValue}


                   // legend title
                   legend5TitleValue={legend5TitleValue}
                   handleTitle5ValueChange={handleTitle5ValueChange}

                 

                />



                  <Legend6
                    activeLegend={activeLegend}
                    // color value
                   legend6ColorValue = {legend6ColorValue}
                   setLegend6ColorValue={setLegend6ColorValue}
                   
                   // states value
                    legend1StatesValue={legend1StatesValue}
                    setLegend1StatesValue={setLegend1StatesValue}
    
                    legend2StatesValue={legend2StatesValue}
                    setLegend2StatesValue={setLegend2StatesValue}

                    legend3StatesValue={legend3StatesValue}
                    setLegend3StatesValue={setLegend3StatesValue}

                    legend4StatesValue={legend4StatesValue}
                    setLegend4StatesValue={setLegend4StatesValue}

                    legend5StatesValue={legend5StatesValue}
                    setLegend5StatesValue={setLegend5StatesValue}

                    legend6StatesValue={legend6StatesValue}
                    setLegend6StatesValue={setLegend6StatesValue}

                    legend7StatesValue={legend7StatesValue}
                    setLegend7StatesValue={setLegend7StatesValue}

                    legend8StatesValue={legend8StatesValue}
                    setLegend8StatesValue={setLegend8StatesValue}


                   // legend title
                   legend6TitleValue={legend6TitleValue}
                   handleTitle6ValueChange={handleTitle6ValueChange}

                 

                />

                  <Legend7
                    activeLegend={activeLegend}
                    // color value
                   legend7ColorValue = {legend7ColorValue}
                   setLegend7ColorValue={setLegend7ColorValue}
                   
                   // states value
                    legend1StatesValue={legend1StatesValue}
                    setLegend1StatesValue={setLegend1StatesValue}
    
                    legend2StatesValue={legend2StatesValue}
                    setLegend2StatesValue={setLegend2StatesValue}

                    legend3StatesValue={legend3StatesValue}
                    setLegend3StatesValue={setLegend3StatesValue}

                    legend4StatesValue={legend4StatesValue}
                    setLegend4StatesValue={setLegend4StatesValue}

                    legend5StatesValue={legend5StatesValue}
                    setLegend5StatesValue={setLegend5StatesValue}

                    legend6StatesValue={legend6StatesValue}
                    setLegend6StatesValue={setLegend6StatesValue}

                    legend7StatesValue={legend7StatesValue}
                    setLegend7StatesValue={setLegend7StatesValue}

                    legend8StatesValue={legend8StatesValue}
                    setLegend8StatesValue={setLegend8StatesValue}


                   // legend title
                   legend7TitleValue={legend7TitleValue}
                   handleTitle7ValueChange={handleTitle7ValueChange}

                 

                />


                  <Legend8
                    activeLegend={activeLegend}
                    // color value
                   legend8ColorValue = {legend8ColorValue}
                   setLegend8ColorValue={setLegend8ColorValue}
                   
                   // states value
                    legend1StatesValue={legend1StatesValue}
                    setLegend1StatesValue={setLegend1StatesValue}
    
                    legend2StatesValue={legend2StatesValue}
                    setLegend2StatesValue={setLegend2StatesValue}

                    legend3StatesValue={legend3StatesValue}
                    setLegend3StatesValue={setLegend3StatesValue}

                    legend4StatesValue={legend4StatesValue}
                    setLegend4StatesValue={setLegend4StatesValue}

                    legend5StatesValue={legend5StatesValue}
                    setLegend5StatesValue={setLegend5StatesValue}

                    legend6StatesValue={legend6StatesValue}
                    setLegend6StatesValue={setLegend6StatesValue}

                    legend7StatesValue={legend7StatesValue}
                    setLegend7StatesValue={setLegend7StatesValue}

                    legend8StatesValue={legend8StatesValue}
                    setLegend8StatesValue={setLegend8StatesValue}


                   // legend title
                   legend8TitleValue={legend8TitleValue}
                   handleTitle8ValueChange={handleTitle8ValueChange}

                 

                />





            

        
            
            
        </div>
    )

    


}

export default Navigator