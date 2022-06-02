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
        <div className='search inline-flex flex-col'  >

            <div className='searchInputs'>
                <input type='text' placeholder={placeholder}
                    onChange={handleFilter}
                    className="m-10 border-green-700 hover:border-green-500 focus:border-green-900 focus:ring-green-900 " />
            </div>
            {filteredData.length != 0 && (
                <div className='dataResult bg-white mt-1.5 shadow-sm overflow-hidden overflow-y-auto w-80 h-52'>
                    {filteredData.map((value) => {
                        return <p>{value.text}</p>
                    }

                    )}
                </div>
            )}

        </div>
    )
}

export default SearchFilter;