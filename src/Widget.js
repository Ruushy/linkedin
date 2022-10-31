import React from 'react'
import './Widget.css'
import { InfoOutlined } from '@mui/icons-material'
import { FiberManualRecord } from '@mui/icons-material'

function Widget() {
    const newsarticle = (heading , subtitle) => (
        <div className='widgetsArticle'>


           <div className='articleRight'>
            <FiberManualRecord />
           </div>


           <div className='articleLeft'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
           </div>
        </div>
        )
  return (
    <div className='widgets'>
         <div className="widget_header">
          <h2>linkedin news</h2>
          <InfoOutlined />
         </div>
         {newsarticle("my first react app " , "top news - 2122readers")}
         {newsarticle("Uniso's education on cs" , "top news - 3562 readers")}
         {newsarticle("somali students" , "top news - 8632 readers")}
         {newsarticle("will somalia overcome " , "top news - 762 readers")}
         {newsarticle("covid Update" , "top news - 7893 readers")}
         {newsarticle("SOmalia's technolgy" , "top news - 452 readers")}
         {newsarticle("whats new on makka " , "top news - 2122readers")}
         {newsarticle("this years's hajj" , "top news - 3562 readers")}
         {newsarticle("islamic schools in somalia" , "top news - 8632 readers")}
         {newsarticle("war on gangs " , "top news - 762 readers")}
         {newsarticle("cybar war " , "top news - 7893 readers")}
         {newsarticle("SOmalia's technolgy" , "top news - 452 readers")}
    </div>
  )
}

export default Widget