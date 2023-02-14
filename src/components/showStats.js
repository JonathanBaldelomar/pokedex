import React,{useState,useEffect} from "react";
import  Chart  from "react-apexcharts";

function Areachart()
{
   const [getDatayear, setGetDatayear]= useState([]);
   const [getDatacommit, setGetDatacommit]= useState([]);
   
   useEffect( ()=>{
    const getCommitdata= async()=>{
        const getYear=[];
        const getCommit=[];
        const reqData= await fetch("http://localhost/reactgraphtutorial/Areachartgitgub");
        const resData= await reqData.json();
          for(let i=0; i<resData.length;i++)
          {
            getYear.push(resData[i].year); 
            getCommit.push(resData[i].commits);  
          }
         setGetDatayear(getYear);
         setGetDatacommit(getCommit); 
         }
      getCommitdata();
   },[]);


    return(
    <React.Fragment>
        <div className="container-fluid mb-3 mt-3">    
        <h2>Areachart Github Style</h2>
       <Chart 
       type="area"
       width={1380}
       height={550}

       series={[
              {   name:"Commits",
                  data:[345,27,121,676,98,321]
              }
       ]}
     
       options={ {
        title:{
            text:"Areachart Github Style",
            style:{ fontSize:20}
            },

        colors:['#f90000'],
        stroke: {width:3, curve:'smooth'},
        ///fill:{opacity:1, type:'solid'},
      
      xaxis:{
          title:{ text:"Commit in Year",
          style:{ fontSize:20, color:'#f90000'}
                },
           categories:getDatayear
         },
      yaxis:{
       title:{
           text:"No of Commits",
           style:{ fontSize:20}
           }
      }
       }}          
       >
       </Chart>
        </div>
    </React.Fragment>
    );
}
export default Areachart;