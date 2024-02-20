import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { ChangeEvent, useState } from "react";

const AccountTab = () => {
  const [previewImage, setPreviewImage] = useState<string>(
    "/Icons/profileMain.svg"
  );
  const theme = useTheme();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      className={`flex flex-col gap-3 mt-4 lg:flex-row ${
        //@ts-ignore
        theme.palette.mode === "light"
          ? "bg-black bg-opacity-10"
          : "bg-white bg-opacity-5"
      } rounded-[10px]`}
    >
      <div className="w-full lg:W-1/2 p-4 md:p-6 lg:p-9">
        <div className="relative w-full flex justify-center">
          <img
            className="mb-2 w-24 h-24"
            src={previewImage}
            alt="Profile"
            style={{ borderRadius: "50%" }}
          />
          <label htmlFor="profileImageInput">
            <Box
              sx={{
                position: "absolute",
                top: 70,
                right: "43%",
              }}
            >
              <img
                className="cursor-pointer"
                src="/Icons/profileButton.svg"
                alt="Upload Button"
              />
            </Box>
          </label>
          <input
            type="file"
            id="profileImageInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <label className="text-[#ACACAC] font-semibold text-base md:text-lg mt-8">
          User Name
        </label>
        <input
          placeholder="Enter Username"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <label className="text-[#ACACAC] font-semibold text-base md:text-lg ">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          placeholder="Enter name"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <label className="text-[#ACACAC] font-semibold text-base md:text-lg mt-8">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          placeholder="Enter email"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
      </div>

      <div className="w-full lg:W-1/2 p-4 md:p-6 lg:p-9">
        <label className="text-[#ACACAC] font-semibold text-base md:text-lg mt-8">
          Address
        </label>
        <input
          placeholder="Enter address"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <div className="flex w-full justify-between gap-4">
          <div>
            <label className="text-[#ACACAC] font-semibold text-base md:text-lg ">
              City
            </label>
            <input
              placeholder="Enter city"
              className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
            />
          </div>
          <div>
            <label className="text-[#ACACAC] font-semibold text-base md:text-lg mt-8">
              Zip/Postal Code
            </label>
            <input
              placeholder="Enter zip code"
              className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
            />
          </div>
        </div>
        <label className="text-[#ACACAC] font-semibold text-base md:text-lg mt-8">
          Country
        </label>
        <input
          placeholder="Enter Country"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <label className="text-[#ACACAC] font-semibold text-base md:text-lg mt-8">
          State/Province
        </label>
        <input
          placeholder="Enter Province"
          className="w-full placeholder:text-[#ACACAC] bg-transparent border-2 my-3 rounded-[9px] text-base h-12 border-gray-400 px-3"
        />
        <button className="w-[30%] md:w-[20%] rounded-[4px] cursor-pointer h-8 bg-[#5B1CD4] text-white text-[15px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default AccountTab;
