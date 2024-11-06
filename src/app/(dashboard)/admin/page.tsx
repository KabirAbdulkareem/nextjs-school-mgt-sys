import UserCard from "@/app/components/UserCard"

const page = () => {
    return (
      <div className="p-4 flex gap-4 flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type = "student"></UserCard>
        <UserCard type = "teacher"></UserCard>
        <UserCard type = "parent"></UserCard>
        <UserCard type = "staff"></UserCard>
        </div>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3 bg-red-200">Right</div>
      </div>
    )
  }
  
  export default page