import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({ OnInputChange,OnButtonSubmit }) => {
	return(
         <div>
            <p className = 'f3'>
            	{'This will detect your face, Try it!!'}
            </p>
            <div className = 'center'>
               <div className='form center pa4 br3 shadow-5'>
                    <input className = 'f4 pa2 w-70 center' type = 'text' onChange = { OnInputChange }/>
	                <button 
                   className = 'w-30 f4 grow link ph3 pv2 dib white bg-light-purple'
                   onClick = {OnButtonSubmit}
                   >Detect</button>
               </div>
            </div>
         </div>
		);
}

export default ImageLinkForm;