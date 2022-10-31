import React from 'react'
import './InputOption.css'

function InputOption({Icon , title , color}) {
  return (
    <div className="inputOption">
     <Icon Style={{color:color}}/>
     <p>{title}</p>

    </div>
  );
}

export default InputOption