import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './OrderPlace.css'

const OrderPlace = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="px-2">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <input className='col-12 mb-2 py-1' defaultValue={""} placeholder="Name"  {...register("name")} 
                />
                <input className='col-12 mb-2 py-1' defaultValue={""} placeholder="Email"  {...register("email", { required: true })} 
                />
                <input className='col-12 mb-2 py-1' placeholder="Address" defaultValue="" {...register("address")} 
                />
                <input className='col-12 mb-2 py-1' placeholder="City" defaultValue="" {...register("city")} 
                />
                <input className='col-12 mb-2 py-1' placeholder="Phone" defaultValue='' {...register("phone")} 
                />
                <input className='d-none col-12 mb-2 py-1' defaultValue='pending' {...register("status")} 
                />
                <Button className="cat-btn fs-5 py-1 text-black" type="submit" value='Order Place' >
					Order Place
      			</Button>
            </form>
        </div>
    );
};

export default OrderPlace;