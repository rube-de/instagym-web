import React from "react";
import Webcam from "react-webcam";

export class CaptureVideo extends React.Component {
    private webcam!: Webcam
    setRef = (webcam: Webcam) => {
        this.webcam = webcam;
      };
    
      capture = () => {
        const imageSrc = this.webcam.getScreenshot();
      };
    
      render() {
        const videoConstraints = {
          width: 1280,
          height: 720,
          facingMode: "user"
        };
    
        return (
          <div className="webcam">
            <Webcam
              audio={false}
              height={400}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={450}
              videoConstraints={videoConstraints}
            />
            {/* <button onClick={this.capture}>Capture photo</button> */}
          </div>
        );
      }
    }
