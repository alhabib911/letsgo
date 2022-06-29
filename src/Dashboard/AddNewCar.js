import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddNewCar = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '90e95b3525e50641af585dfcd312cac7'


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const car = {
                        name: data.name,
                        bodyType: data.bodyType,
                        manufactureYear: data.manufactureYear,
                        seatCapacity: data.seatCapacity,
                        price: data.price,
                        img: img
                    }
                    // send to your database 
                    fetch('http://localhost:5000/addcar', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(car)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast('Car details upload successfully')
                                reset();
                            }
                           
                        })

                }

            })
    }
    return (
        <div>
            <div className="car-add-page">
                <div className="car-add-container">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            
                                <input
                                    type="text"
                                    placeholder="car Name"
                                    className="input input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                            
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Body Type</span>
                            </label>
                            <input
                                type="text"
                                placeholder="bodyType"
                                className="input input-bordered "
                                {...register("bodyType", {
                                    required: {
                                        value: true,
                                        message: 'bodyType is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.bodyType?.type === 'required' && <span className="label-text-alt text-red-500">{errors.bodyType.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Manufacture Year</span>
                            </label>
                            <input
                                type="text"
                                placeholder="manufactureYear"
                                className="input input-bordered "
                                {...register("manufactureYear", {
                                    required: {
                                        value: true,
                                        message: 'manufactureYear is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.manufactureYear?.type === 'required' && <span className="label-text-alt text-red-500">{errors.manufactureYear.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Seat Capacity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="seatCapacity"
                                className="input input-bordered "
                                {...register("seatCapacity", {
                                    required: {
                                        value: true,
                                        message: 'seatCapacity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.seatCapacity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.seatCapacity.message}</span>}
                            </label>
                        </div>
                    
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered "
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>

                        <div className="add-car-btn">
                        <input type="submit" value="Upload car" />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddNewCar;