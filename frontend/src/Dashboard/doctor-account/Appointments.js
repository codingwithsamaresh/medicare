import React from 'react'
import './Appointments.css'
import {FormatDate} from '../../utils/FormatDate.js'

const Appointments = ({appointments}) => {
  return (
    <table>
        <thead>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Gender</th>
                <th scope='col'>Payment</th>
                <th scope='col'>Price</th>
                <th scope='col'>Booked on</th>
            </tr>
        </thead>
        <tbody>
            {appointments?.map(item =>(
                <tr key={item._id}>
                    <th className='t' scope='row'>
                         <div className='a'>
                            <div className='b'>{item.user.name}</div>
                            <div className='b'>{item.user.email}</div>
                         </div>
                    </th>
                    <td className='l'>{item.user.gender}</td>
                    <td className='l'>
                        {item.isPaid && (
                            <div className='c'>
                                <div className='d'></div>
                                Paid
                            </div>
                        )}
                        {!item.isPaid && (
                            <div className='c'>
                                <div className='e'></div>
                                Unpaid
                            </div>
                        )}
                    </td>
                    <td className='l'>{item.ticketPrice}</td>
                    <td className='l'>{FormatDate(item.createdAt)}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Appointments