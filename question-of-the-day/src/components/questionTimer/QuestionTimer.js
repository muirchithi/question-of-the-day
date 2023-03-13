import { useEffect, useRef } from 'react'; // import the useEffect and useRef hooks from the React library

function CountdownTimer({ countdownTo }) { // create a functional component called CountdownTimer which takes in a prop called countdownTo
  const canvasRef = useRef(null); // create a reference to the canvas element using the useRef hook

  useEffect(() => { // use the useEffect hook to perform a side effect
    const rings = { // an object containing data for the rings that will be displayed on the canvas
      DAYS: { s: 86400000, max: 365 },
      HOURS: { s: 3600000, max: 24 },
      MINUTES: { s: 60000, max: 60 },
      SECONDS: { s: 1000, max: 60 },
    };

    let time = 0; // initialize a variable called time to 0
    let countdownToTime = new Date(countdownTo).getTime(); // convert the countdownTo prop to a timestamp and assign it to a variable called countdownToTime
    let actualSize = 100 + 2; // initialize a variable called actualSize to 102

    const updateCanvas = () => { // create a function called updateCanvas which will update the canvas
      time = new Date().getTime() - countdownToTime; // calculate the difference between the current time and the countdownToTime and assign it to the time variable
      const ctx = canvasRef.current.getContext('2d'); // get the 2D rendering context of the canvas using the current property of the canvasRef object
      ctx.textAlign = 'center'; // set the text alignment of the context to center

      for (let idx = 0; idx < 4; idx++) { // loop through each ring
        const ringKey = Object.keys(rings)[idx]; // get the key for the current ring
        const ring = rings[ringKey]; // get the data for the current ring using the key

        const x = 50 + idx * 120; 
        const y = 50; 

        // calculate arc end angle
        let value = parseFloat(time / ring.s); 
        time -= Math.round(parseInt(value)) * ring.s; 
        value = Math.abs(value); 

        const degrees = 360 - (value / ring.max) * 360.0; 
        const endAngle = degrees * (Math.PI / 180); 

        ctx.save(); // save the current context state

        ctx.translate(x, y); 
        ctx.clearRect(-actualSize / 2, -actualSize / 2, actualSize, actualSize); 

        // first circle
        ctx.strokeStyle = 'rgba(128,128,128,0.2)';
        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, 2 * Math.PI, 2);
        ctx.lineWidth = 2;
        ctx.stroke();

        // second circle
        ctx.strokeStyle = 'rgba(253, 128, 1, 0.9)';
        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, endAngle, 1);
        ctx.lineWidth = 2;
        ctx.stroke();

        // label
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Helvetica';
        ctx.fillText(ringKey, 0, 23);
        ctx.fillText(ringKey, 0, 23);

        ctx.font = 'bold 40px Helvetica';
        ctx.fillText(Math.floor(value), 0, 10);

        ctx.restore();
      }

      setTimeout(updateCanvas, 11);
    };

    updateCanvas();
  }, [countdownTo]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={100}
      style={{ position: 'absolute', right: 0, top: "100px" }}
    />
  );
}

export default CountdownTimer;