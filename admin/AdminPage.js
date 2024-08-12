import React, { useState, useEffect } from 'react';
import './AdminPage.css';

const AdminPage = () => {
    const [customers, setCustomers] = useState([]);
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        // Mock data for customers
        const mockCustomers = [
            { id: 1, name: 'John Doe', username: 'john.doe', email: 'john.doe@example.com' },
            { id: 2, name: 'Jane Smith', username: 'jane.smith', email: 'jane.smith@example.com' },
            // Add more customers as needed
        ];

        // Mock data for purchases
        const mockPurchases = [
            { id: 1, userId: 1, instrument: 'Guitar', purchaseDate: '2024-01-01' },
            { id: 2, userId: 2, instrument: 'Piano', purchaseDate: '2024-02-01' },
            // Add more purchases as needed
        ];

        setCustomers(mockCustomers);
        setPurchases(mockPurchases);
    }, []);

    return (
        <div className="admin-container">
            <h1>Admin Page</h1>
            <h2>Registered Customers</h2>
            <table className="customers-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.username}</td>
                            <td>{customer.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Purchases</h2>
            <table className="purchases-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer ID</th>
                        <th>Instrument</th>
                        <th>Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map(purchase => (
                        <tr key={purchase.id}>
                            <td>{purchase.id}</td>
                            <td>{purchase.userId}</td>
                            <td>{purchase.instrument}</td>
                            <td>{new Date(purchase.purchaseDate).toLocaleDateString()}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;
