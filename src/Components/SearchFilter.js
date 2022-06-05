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
        <div className='flex justify-center mt-2'>

            <div className='flex-col bg-white'>
                <input type='text' placeholder={placeholder}
                    onChange={handleFilter} />

                {filteredData.length != 0 && (
                    <div className='text-center border-blue-600 border-solid border-x-2 border-y-2  max-h-60 overflow-y-scroll scrollbar-hide'>
                        {filteredData.map((value) => {
                            return (
                                // <a href={value.link} target='_self'>
                                    <p>{value.text}</p>
                                // </a>k
                            )
                        }
                        )}
                    </div>

                )}
            </div>


        </div>
    )
}

export default SearchFilter;