 
import UserForm from "./UserForm";

const EditProfile = () => {
  const handleFormSubmit = (data: any) => {
    console.log("Submitted Data:", data);
    localStorage.setItem("userProfile", JSON.stringify(data));
  };

 

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <UserForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default EditProfile;
