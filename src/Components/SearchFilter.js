import React, { useState } from 'react';


const SearchFilter = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.text.includes(searchWord);

        });
        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    return (
        <div className='search flex justify-center flex-col m-15 '  >

            <div className='searchInputs'>
                <input type='text' placeholder={placeholder}
                    onChange={handleFilter}
                    className="m-10 border-green-700 hover:border-green-500 focus:border-green-900 focus:ring-green-900 self-center" />
            </div>
            {filteredData.length != 0 && (
                <div className='dataResult bg-white self-center px-4 py-4 '>
                    {filteredData.map((value, key) => {
                        return <div>{value.text}</div>
                    }

                    )}
                </div>
            )}

        </div>
    )
}

export default SearchFilter;