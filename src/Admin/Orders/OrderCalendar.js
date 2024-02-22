import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function OrderCalendar() {
    let data =[
        { title: 'event 1', date: '2024-01-01' },
        { title: 'event 2', date: '2024-01-02' }
  ]

    return (
    <div>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={data}
        />
    </div>
    )
}

export default OrderCalendar;
