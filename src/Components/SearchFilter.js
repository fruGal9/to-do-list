import React, { useState } from 'react';


const SearchFilter = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.text.toLowerCase().includes(searchWord.toLowerCase());

        });
        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    return (
        <div className='search inline-flex flex-col'  >

            <div className='searchInputs'>
                <input type='text' placeholder={placeholder}
                    onChange={handleFilter}
                    className="m-1 border-green-700 hover:border-green-500 focus:border-green-900 focus:ring-green-900 " />
            </div>
            <div className='border-2'>
            {filteredData.length != 0 && (
                <div className='dataResult bg-white mt-1 shadow-sm overflow-hidden overflow-y-auto placeholder-inherit h-52'>
                    {filteredData.map((value) => {
                        return <p>{value.text}</p>
                    }

                    )}
                </div>
            )}
            </div>

        </div>
    )
}

export default SearchFilter;