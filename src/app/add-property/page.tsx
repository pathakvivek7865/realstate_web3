import React from "react";

const page = () => {
    return (
        <main>
            <h1>Add Property</h1>

            <form className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    cols={30}
                    rows={10}
                ></textarea>

                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" />

                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="room">Room</option>
                </select>

                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" />

                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" />

                <label htmlFor="image">Image</label>
                <input type="file" name="image" id="image" />

                <button type="submit">Add Property</button>
            </form>
        </main>
    );
};

export default page;
