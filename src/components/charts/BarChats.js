//Gráficos de documentos

import React from 'react'
import { Pie } from 'react-chartjs-2'

const BarChart = () => {
    return (
        <div>
            <Pie 
               data={{
                   
                   labels:['Recrutados com sucesso' , 'Recrutados com pendências' , 'Recrutados a serem avaliados'],
                   datasets:[{
                       data:[112 , 72 , 25],
                       backgroundColor:[  
                        'rgba(124, 246 , 111 )',
                        'rgba(246, 111 ,111 )',
                        'rgba(255, 255 , 132 )',]
                   }]
               }}

               height={400}
               width={400}  
               



               var options={{
                maintainAspectRatio: false,
                
            }}
           
            />
            
        </div>
    )
}

export default BarChart;