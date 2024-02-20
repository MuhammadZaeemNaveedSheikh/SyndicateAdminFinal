import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccountTab from "./AccountTab";
import UpdatePasswordTab from "./UpdatePasswordTab";
import { Typography } from "@mui/material";

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="px-5 py-4 xl:h-[100vh]">
        <div className="flex justify-between items-center pt-6 px-4">
          <div className="flex items-center gap-3">
            <Typography sx={{ fontWeight: 700, fontSize: { xs: 24, md: 30 } }}>
              Profile
            </Typography>
          </div>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            mt: 2,
            fontFamily: "Montserrat",
            "& button:focus": {},

            "& .MuiTab-root.Mui-selected": {
              color: "#5B1CD4",
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              fontFamily: "Montserrat",
            },
          }}
          TabIndicatorProps={{
            sx: { bgcolor: "#5B1CD4" },
          }}
        >
          <Tab
            sx={{
              fontWeight: 600,
              fontSize: { xs: 14, sm: 16 },
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="My Account"
          />
          <Tab
            sx={{
              fontWeight: 600,
              fontSize: { xs: 14, sm: 16 },
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Update Password"
          />
        </Tabs>
        {value === 0 && (
          <div className="mt-9">
            <AccountTab />
          </div>
        )}
        {value === 1 && (
          <div className="mt-9">
            <UpdatePasswordTab />
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
