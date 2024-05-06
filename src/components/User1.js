import React, { useEffect, useState } from 'react';
import axios from 'axios';
import About1 from './About1';

export default function User1() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [item, setItem] = useState('');
    const [trucktype, setTrucktype] = useState('');
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/user')
            .then(res => setResult(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/user', { name, contact, email,pickup,drop, item, trucktype })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' /></td>
                        </tr>
                        <tr>
                            <td><label>Contact:</label></td>
                            <td><input type='number' value={contact} onChange={(e) => setContact(e.target.value)} placeholder='Enter your number' /></td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td><input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter mail id' /></td>
                        </tr>
                        <tr>
                            <td><label>Pickup:</label></td>
                            <td><input type='text' value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder='Pickup Location' /></td>
                        </tr>
                        <tr>
                            <td><label>Drop:</label></td>
                            <td><input type='text' value={drop} onChange={(e) => setDrop(e.target.value)} placeholder='Drop Location' /></td>
                        </tr>
                        <tr>
                            <td><label>Item:</label></td>
                            <td>
                                <select value={item} onChange={(e) => setItem(e.target.value)} placeholder='Choose your Item'>
                                <option>Industrial Machinery</option>
                                 <option> Household Goods
                                 </option>
                                 <option>Part Load / Parcel / luggage transport (N.A)
                                 </option>
                                 <option>Fresh Fruits / Vegetables (N.A)
                                 </option>
                                 <option>Healthcare / Pharmacy Products / Medicines
                                 </option>
                                 <option>Rice/Wheat/Grains ( N.A)
                                 </option>
                                 <option>Paper / Packaging / Printed Material
                                 </option>
                                 <option>Textile / Garments
                                 </option>
                                 <option>Machine / Auto Parts
                                 </option>
                                 <option>Furniture / Plywood / Laminates
                                 </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Truck Type:</label></td>
                            <td>
                                <select value={trucktype} onChange={(e) => setTrucktype(e.target.value)} placeholder='Choose type of Truck'>
                                <option>E / DOST / PICKUP(1.5 TON)
                                 </option>
                                 <option>EICHER 17FT(5 TON)
                                 </option>
                                 <option>EICHER 19FT(7 TON)
                                 </option>
                                 <option>20FT CONTAINER(6.5 TON)
                                 </option>
                                 <option>EICHER PRO 22FT(10 TON)
                                 </option>
                                 <option>32FT CONTAINER(7 TON)
                                 </option>
                                 <option>32FT CONTAINER(14 TON)
                                 </option>

                                 <option>TAURUS(18 TON) N.A
                                 </option>
                                 <option>32 / 40 FEET OPEN TRAILER
                                 </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button type="submit">Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Pickup</th>
                        <th>Drop</th>
                        <th>Items</th>
                        <th>Trucktype</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((x, index) => (
                        <tr key={index}>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.contact}</td>
                            <td>{x.pickup}</td>
                            <td>{x.drop}</td>
                            <td>{x.item}</td>
                            <td>{x.trucktype}</td>
                            {/* <About1 name={x.name} mail={x.mail} contact={x.contact} pickup={x.pickup} drop={x.drop} item={x.item} trucktype={x.trucktype}/> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}