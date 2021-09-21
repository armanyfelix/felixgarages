import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';
import PinDropIcon from '@material-ui/icons/PinDrop';

function Header() {
    const header = { 
        background: `rgba(0, 0, 0)`,
        color: `rgb(184, 184, 184)`,
    }
    return (
        <>
            <div className="p-2 w-full text-center border-0" style={header}>
                <PhoneIcon /> <span>Tel: +(52) 668-113-62-92 </span>
                <span> | </span>
                <AccessTimeIcon /> <span> Horario: 8:30 AM a 5:30 PM</span>
                <span> | </span>
                <PinDropIcon /> <span>Ubicacion: Margaritas 576, Lomas del Matamoros, 22206 Tijuana, B.C.</span>

            </div>

        </>
    )
}

export default Header;
