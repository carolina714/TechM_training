import React from "react";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Meal: ${data.meal}, Calories: ${data.calories}`);
  };

  return (
    <div>
      <h2>Plan Your Meal</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Meal Name</label>
          <input type="text" className="form-control" {...register("meal", { required: true })} />
          {errors.meal && <p className="text-danger">Meal name is required</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Calories</label>
          <input type="number" className="form-control" {...register("calories", { required: true, min: 1 })} />
          {errors.calories && <p className="text-danger">Valid calorie count is required</p>}
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
