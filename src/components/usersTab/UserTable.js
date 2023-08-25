import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const hardcodedUsers = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phoneNumber: "123-456-7890",
        dateJoined: "2023-08-21",
        isDeleted: false,
        isVerified: true,
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phoneNumber: "987-654-3210",
        dateJoined: "2023-08-21",
        isDeleted: false,
        isVerified: true,
    },
    // Add more users here
];

function UserTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // Simulate fetching users from an API
        setTimeout(() => {
            setUsers(hardcodedUsers);
            setLoading(false);
        }, 1000);
    }, []);

    const columns = [
        {
            name: "Name",
            selector: "name",
            sortable: true,
        },
        {
            name: "Email",
            selector: "email",
            sortable: true,
        },
        {
            name: "Phone Number",
            selector: "phoneNumber",
            sortable: true,
        },
        {
            name: "Date Joined",
            selector: "dateJoined",
            sortable: true,
        },
        {
            name: "Is Deleted",
            selector: "isDeleted",
            sortable: true,
            cell: (row) => (row.isDeleted ? "Yes" : "No"),
        },
        {
            name: "Is Verified",
            selector: "isVerified",
            sortable: true,
            cell: (row) => (row.isVerified ? "Yes" : "No"),
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="action-buttons">
                    <button onClick={() => handleEdit(row)}>Edit</button>
                    <button onClick={() => handleDelete(row)}>Delete</button>
                </div>
            ),
        },
    ];

    const handleEdit = (user) => {
        const confirmed = window.confirm("Are you sure you want to edit this user?");
        if (confirmed) {
            // Handle edit logic here
            console.log("Edit user:", user);
        }
    };

    const handleDelete = (user) => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (confirmed) {
            // Handle delete logic here
            console.log("Delete user:", user);
        }
    };



    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: "#168F71", color:"white",// Color for table header
            },
        } 
    };

    return (
        <div className="user-table">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <DataTable
                    title="User Table"
                    columns={columns}
                    data={filteredUsers}
                    pagination
                    selectableRows
                    search
                    subHeader
                    subHeaderComponent={
                        <input
                            id="search"
                            type="text"
                            placeholder="Search users"
                            value={searchText}
                            onChange={handleSearch}
                        />
                    }
                    customStyles={customStyles}
                />
            )}
        </div>
    );

}

export default UserTable;
