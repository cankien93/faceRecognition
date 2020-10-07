import React from 'react';
import './FaceImage.css';

const FaceImage = ({url, box})=>{
    return(
        <div className='dectectedImg'>
            <img alt='' id='faceDetector' src={url} />
            {box.map((blueBox, id)=>
                <div className='bounding_box' style={{left: blueBox.left, top: blueBox.top, right: blueBox.right, bottom: blueBox.bottom} } key={id}></div>
                )
            }
        </div>
    )
}

export default FaceImage;