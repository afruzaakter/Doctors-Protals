import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const BookingModal = ({ treatment, date,setTreatment,refetch }) => {
    const [user] = useAuthState(auth);
    console.log('kkk user',user)
    const {_id, name, slots,price} = treatment;
    console.log(treatment);
    const formattedDate = format(date, 'PP');
    const handleBooking = (e) =>{
        e.preventDefault();
        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value,
        }

        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
        console.log(data)
        if(data.success){
            toast(`Appointment is set, ${formattedDate} at ${slot}`)
        }
        else{
            toast.error(`Already have and Appointment on, ${data.booking?.date} at ${data.booking?.slot}`)
        }
        refetch();
            
        // to close the modal
        setTreatment(null)
        })

    }

  

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal  modal-bottom sm:modal-middle">

                <div className="modal-box p-8">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-info text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input  input-bordered w-full max-w-xs" />

                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input  input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input  input-bordered w-full max-w-xs" />
                        <input type="text" name="price" value={price || ''} className="input  input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input  input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-info w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;