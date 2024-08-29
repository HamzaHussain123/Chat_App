import React from 'react';

const GenderCheckbox = () => {
    return (
        <div className='flex justify-start gap-8 mt-4'>
            <div className='form-control'>
                <label className='label cursor-pointer flex items-center gap-3'>
                    <input type="radio" name="gender" className='radio appearance-none h-4 w-4 border border-gray-400 rounded-full checked:bg-blue-500 checked:border-transparent checked:text-white checked:ring-2 checked:ring-offset-2 checked:ring-blue-500 transition-all duration-200' />
                    <span className='label-text font-medium text-gray-700 text-base'>Male</span>
                </label>
            </div>

            <div className='form-control'>
                <label className='label cursor-pointer flex items-center gap-3'>
                    <input type="radio" name="gender" className='radio appearance-none h-4 w-4 border border-gray-400 rounded-full checked:bg-pink-500 checked:border-transparent checked:text-white checked:ring-2 checked:ring-offset-2 checked:ring-pink-500 transition-all duration-200' />
                    <span className='label-text font-medium text-gray-700 text-base'>Female</span>
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;
