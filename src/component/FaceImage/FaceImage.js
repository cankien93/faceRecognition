import React from 'react';
import './FaceImage.css';

const FaceImage = ({url, box})=>{
    return(
        <div className='dectectedImg'>
            <img alt='' id='faceDetector' src={url} />
            <div className='bounding_box' style={{left: box.left, top: box.top, right: box.right, bottom: box.bottom}}></div>
        </div>
    )
}

export default FaceImage;