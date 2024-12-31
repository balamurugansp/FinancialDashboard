import React, { useEffect }from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface UserFormInputs {
  name: string;
  username: string;
  email: string;
  password?: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePicture?: string;
}

interface UserFormProps {
  initialData?: UserFormInputs;
  onSubmit: (data: UserFormInputs) => void;
}


const UserForm: React.FC<UserFormProps> = ({ initialData, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UserFormInputs>({
    defaultValues: initialData || {},
  });

  const submitHandler: SubmitHandler<UserFormInputs> = (data) => {
    onSubmit(data);
    reset(); // Reset the form after submission (optional)
  };
  useEffect(() => {
    const userProfiles:any = localStorage.getItem("userProfile") ;
    //jsonuserProfile
    
    if (userProfiles) {
      const parsedData: UserFormInputs = JSON.parse(userProfiles);
      Object.entries(parsedData).forEach(([key, value]) => {
        setValue(key as keyof UserFormInputs, value );
      });
    }
  }, [setValue]);
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="p-6 bg-white shadow rounded max-w-xl mx-auto space-y-4"
    >
      <h2 className="text-2xl font-bold">Edit User Profile</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
           
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Username */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          {...register("username", { required: "Username is required" })}
          
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
           
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          {...register("password")}
           
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          type="date"
          {...register("dateOfBirth", { required: "Date of Birth is required" })}
          
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.dateOfBirth && (
          <p className="text-sm text-red-500">
            {errors.dateOfBirth.message}
          </p>
        )}
      </div>

      {/* Present Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Present Address
        </label>
        <input
          type="text"
          {...register("presentAddress", {
            required: "Present Address is required",
          })}
          
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.presentAddress && (
          <p className="text-sm text-red-500">
            {errors.presentAddress.message}
          </p>
        )}
      </div>

      {/* Permanent Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Permanent Address
        </label>
        <input
          type="text"
          {...register("permanentAddress", {
            required: "Permanent Address is required",
          })}
           
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.permanentAddress && (
          <p className="text-sm text-red-500">
            {errors.permanentAddress.message}
          </p>
        )}
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          {...register("city", { required: "City is required" })}
           
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.city && (
          <p className="text-sm text-red-500">{errors.city.message}</p>
        )}
      </div>

      {/* Postal Code */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Postal Code
        </label>
        <input
          type="text"
          {...register("postalCode", { required: "Postal Code is required" })}
           
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.postalCode && (
          <p className="text-sm text-red-500">{errors.postalCode.message}</p>
        )}
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <input
          type="text"
          {...register("country", { required: "Country is required" })}
           
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.country && (
          <p className="text-sm text-red-500">{errors.country.message}</p>
        )}
      </div>

      {/* Profile Picture */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Profile Picture
        </label>
        <input
          type="file"
          {...register("profilePicture")}
           
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
