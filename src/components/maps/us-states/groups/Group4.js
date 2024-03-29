import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import React from 'react';
import '../Navigator'
import { CompactPicker } from 'react-color'
import States from '../States';


 

function Group4({
    activeGroup,
    
    group4ColorValue,
    setGroup4ColorValue,
    
    group1StatesValue,
    setGroup1StatesValue,

    group2StatesValue,
    setGroup2StatesValue,

    group3StatesValue,
    setGroup3StatesValue,

    group4StatesValue,
    setGroup4StatesValue,

    group5StatesValue,
    setGroup5StatesValue,

    group6StatesValue,
    setGroup6StatesValue,

    group7StatesValue,
    setGroup7StatesValue,

    group8StatesValue,
    setGroup8StatesValue,

    group4TitleValue,
    handleTitle4ValueChange,

    selectedOption,
    setSelectedOption

    
}) {
    
    const handleColorChange = (color) =>{
        setGroup4ColorValue(color.hex)
        for (var i = 0; i < group4StatesValue.length; i++) {
            const id = group4StatesValue[i];
            document.getElementById(id).style.fill = color.hex;
          }
    }

    const handleTitle4Change = (event) => {
        handleTitle4ValueChange(event.target.value)

        
    }

   

    
    
        if (activeGroup !== 4) {
            return null
        } 

        
    return(
        <div>
            <div className='group'>
                <div className='group-set'>
                    
                    <div className='group-title'>
                        
                        <input 
                            className='group-title' 
                            placeholder="Group title here" 
                            onChange={handleTitle4Change}
                            type='text'
                            value={group4TitleValue}
                            maxLength='30'
                            ></input>

                        
                   
                        

                    </div>


                    <CompactPicker
                        
                        className='color-picker'
                        color={group4ColorValue}
                        value={group4ColorValue}
                        onChangeComplete={handleColorChange} 
                        colors={[
                              '#8B0000', //Dark red
                              '#FF0000', // Red
                              '#FF4500', // Orange Red
                              '#FF8C00', // Dark Orange
                              '#FFA500', // Orange
                              '#FFD700', // Gold
                              '#006400', // Dark Green
                              '#008000', // Geen
                              '#008B8B', // Dark Cyan
                              '#00CED1', // Dark Turquoise
                              '#00008B', // Dark Blue
                              '#0000FF', // Blue
                              
                              
                              '#C71585', // Medium Violet Red 
                              '#DB7093', // PaleVioletRed 
                              '#4B0082', //Indigo
                              '#800080', // Purple
                              '#BDB76B', // Dark Khaki 
                              '#F0E68C', // Khaki
                              '#4682B4', // Steel Blue
                              '#5F9EA0', // Cadet Blue
                              '#BC8F8F', // Rosy Brown
                              '#F4A460', // Sandy Brown
                              '#808000', // Olive
                              '#2F4F4F', // Dark Slate Gray
                              '#778899', // Light Slate Gray
                              '#696969', // Dim Gray
                              '#C0C0C0', // Silver
                              '#CD5C5C', // Indian Red
                              '#000000', //Black
                              '#FFFFFF', // White
                            





                        ]

                        }
                        />
                    
                   
                    
                </div>

           
               
                
            </div>
            
            <States
                group={4}

                    group4ColorValue={group4ColorValue}


                    group1StatesValue={group1StatesValue}
                    setGroup1StatesValue={setGroup1StatesValue}
    
                    group2StatesValue={group2StatesValue}
                    setGroup2StatesValue={setGroup2StatesValue}

                    group3StatesValue={group3StatesValue}
                    setGroup3StatesValue={setGroup3StatesValue}

                    group4StatesValue={group4StatesValue}
                    setGroup4StatesValue={setGroup4StatesValue}

                    group5StatesValue={group5StatesValue}
                    setGroup5StatesValue={setGroup5StatesValue}

                    group6StatesValue={group6StatesValue}
                    setGroup6StatesValue={setGroup6StatesValue}

                    group7StatesValue={group7StatesValue}
                    setGroup7StatesValue={setGroup7StatesValue}

                    group8StatesValue={group8StatesValue}
                    setGroup8StatesValue={setGroup8StatesValue}

                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}


                  

            />
            
            
        </div>
    )

   
}

export default Group4